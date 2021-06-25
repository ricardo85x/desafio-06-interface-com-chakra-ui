import { NextApiRequest, NextApiResponse } from 'next'

import request from 'request'
import path from 'path'
import fs from 'fs'


const imageExists = (folder: string[], name: string, extension: string) => {

    const basePath = process.cwd()
    const caminho = path.join(basePath,...folder,`${name}.${extension}`)

    if (fs.existsSync(caminho)) {
        return true
    } else {
        return false
    }
}

const saveImage = async (image_url: string, folder: string[], name: string, extension: string) => {

    try {

        const basePath = process.cwd()
    
        const caminho = path.join(basePath,...folder,`${name}.${extension}`)

        if (fs.existsSync(caminho)) {
            console.log("Tudo numa boa")
        } else {
            const file = fs.createWriteStream(caminho);

            await new Promise((resolve, reject) => {
                request({
                    url: image_url
                }).pipe(file).on('finish', async() => {
                    console.log("image saved for offline use")
                    resolve("image saved for offline use");
                }).on('error', (error) => {
                    reject(error)
                });
            }).catch((error) => {
                console.log("Error saving image", error)
            })
        }

    } catch (err) {
        console.log("Error saving image", err)
    }
}

export default async function debugImage(req: NextApiRequest, res: NextApiResponse) {

    let caminho = "BLA"
    try {
        const image_url = "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80"

        const cidade = "Hong Kong"
    
        const { query: { queryText } } = req
    
        const basePath = process.cwd()
        //const basePath = "."
    
        caminho = path.join(basePath,"public","static","images","city",`${queryText}.jpeg`)

        if (fs.existsSync(caminho)) {
            console.log("Tudo numa boa")
        } else {
            const file = fs.createWriteStream(caminho);

            await new Promise((resolve, reject) => {
                request({
                    url: image_url
                }).pipe(file).on('finish', async() => {
                    console.log("imagem gravada")
                    resolve("Tudo numa boa imagem gravada");
                }).on('error', (error) => {
                    reject(error)
                });
            }).catch((error) => {
                console.log("Oups", error)
            })




        }

    
        console.log("Caminho", caminho)
    } catch (err) {
        console.log("ERRO api", err)
    }
   
     return res.json({
        caminho
    })

};