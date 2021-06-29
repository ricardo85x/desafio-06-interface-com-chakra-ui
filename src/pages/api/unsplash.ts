import { NextApiRequest, NextApiResponse } from 'next'
import { createApi } from 'unsplash-js';
import { Basic } from "unsplash-js/src/methods/photos/types"

import { query as q } from 'faunadb'

import { fauna } from '../../services/fauna';

export interface UnsplashImage {
  id: string;
  url: {
    regular: string;
    thumb: string;
  },
  name: string;
  description: string
  online: 0|1,
  user: {
    id: string,
    name: string
  },
  country?: string;
  continent?: string;
  local_id?: number;
}

const findPhotoDb = async ( name: string, type: string) => {

  try {
    const  image = await fauna.query(
      q.Get(
        q.Intersection([
          q.Match(q.Index(`${type}_by_name`), name),
          q.Match(q.Index(`${type}_is_online`), 1)
        ])
      )
    )

    return image;

  } catch (err) {
    // IMAGE not FOUND
    return false;

  }

}

const createUpdatePhotoDb = async (object: UnsplashImage, type: string) => {

  try {

    await fauna.query(
      q.If(
        q.Not(
          q.Exists(
            q.Match(
              q.Index(`${type}_by_name`),
              object.name
            )
          )
        ),
        q.Create(
          q.Collection(type),
          { data: object }
        ), 
        q.Update(
          q.Select(
            "ref",
            q.Get(
              q.Match(q.Index(`${type}_by_name`), object.name)
            ) 
          ),{
            data: object
          }
        )
      )
    )


  } catch (err) {
    console.log("Ops", err)
  }
  

}
interface SearchPhotosProps {
  
  queryText: string;
  name: string;
  type: string;
  width?: number;
  height?: number;
  country?: string,
  continent?: string;
  local_id?: number; // used to save json continent id
  
}

export default async function searchPhotos(req: NextApiRequest, res: NextApiResponse) {

  const {queryText, name, type, width = 1240, height = 450, country, continent, local_id } = req.query as any as SearchPhotosProps;

  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY
  });

  const failbackImageUrl = `https://via.placeholder.com/${width}/${height}/81E6D9/000000/?text=${name}`

  const emptyResponse = { url: failbackImageUrl }

  try {

    const imageDB = await findPhotoDb(name, type);

    if (!imageDB) {
      
      let fakeImage = {
        id:"",
        name,
        description: "generic",
        online: 0,
        user: {
          id: "",
          name: ""
        },
        url: {
          regular: failbackImageUrl,
          thumb: `https://via.placeholder.com/300/300/68D391/000000/?text=${name}`
        }
      } as UnsplashImage

      if (local_id){
        fakeImage.local_id = local_id
      }

      const photos = await unsplash.photos.getRandom({ query: queryText as string, orientation: "landscape" })

      const { response } = photos
  
      if (response) {

        const photo = response as Basic

        let dataUnsplash = { 
          id:photo.id,
          name,
          description: photo.description,
          online: 1,
          user: {
            id: photo.user.id,
            name: photo.user.name
          },
          url: {
            regular: photo.urls.regular,
            thumb: photo.urls.thumb
          }
        } as UnsplashImage

        if (country && continent){
          dataUnsplash = { ... dataUnsplash, country, continent}
        }
        if (local_id){
          dataUnsplash = { ... dataUnsplash, local_id }
        }

        await createUpdatePhotoDb(dataUnsplash, type)

        return res.json({
          url: photo.urls.regular
        })

      } else {
        await createUpdatePhotoDb(fakeImage, type)
      }

    } else {

      return res.json({
        url: (imageDB as { data: UnsplashImage }).data.url.regular
      })
    }

    return res.json(emptyResponse)

  } catch (err) {

    console.log("error unsplash", err)
  }

  return res.json(emptyResponse)

};