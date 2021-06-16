import { NextApiRequest, NextApiResponse } from 'next'

import {createApi} from 'unsplash-js';
import { Basic } from "unsplash-js/src/methods/photos/types"




export default async function searchPhotos(req: NextApiRequest, res: NextApiResponse) {

  const { query: { continent } } = req
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY 
  });

  

  const emptyResponse = { url: "", description: ""}

  try {
    const photos = await unsplash.photos.getRandom({ query: continent as string,  orientation: "landscape"})

    const { response } = photos

  

    if ( response ) {

      // console.log("unsplash x-ratelimit-limit", originalResponse.headers.get("x-ratelimit-limit"))
      // console.log("unsplash x-ratelimit-remaining", originalResponse.headers.get("x-ratelimit-remaining"))

      const photo = response as Basic

      const { alt_description } = photo

      if (alt_description){
        return res.json({
          url: photo.urls.regular,
          description: alt_description
        })
      }
     
    }
    return res.json(emptyResponse)
    
  } catch (err) {
    console.log(err)
  }

  return res.json(emptyResponse)

};