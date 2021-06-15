import { NextApiRequest, NextApiResponse } from 'next'

import {createApi} from 'unsplash-js';



export default async function searchPhotos(req: NextApiRequest, res: NextApiResponse) {

  const { query: { continent } } = req
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY 
  });

  try {
    const photos = await unsplash.search.getPhotos({ query: continent as string,  orientation: "landscape",perPage: 10, page: 1 })

    const { response } = photos

    if ( response && response.results.length > 0) {

      const randomImageIndex = Math.floor((Math.random()*response.results.length)); 

      return res.json({
        url: response.results[randomImageIndex].urls.regular,
        description: response.results[randomImageIndex].alt_description
      })
    }
    return res.json({ url: "", description: ""})
    
  } catch (err) {
    console.log(err)
  }

  return res.json({ url: "", description: ""})

};