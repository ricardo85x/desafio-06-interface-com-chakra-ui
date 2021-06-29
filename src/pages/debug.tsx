import { Flex, Text} from "@chakra-ui/react"
import { GetServerSideProps, GetStaticProps } from "next"
import { useEffect } from "react"
import { ImageProps } from "../contexts/ContinentContext"
import { api } from "../services/api"
import { RankProps } from "./continent/[id]"

interface CityProps {
    city: RankProps
}

export default function Debug() {




    useEffect(() => {
        const loadX = async () => {
            const image = await api.get<ImageProps>("/unsplash", { 
                params: { 
                    name: "Rio de Janeiro", 
                    queryText: `Brasil Rio de Janeiro`,
                    type: "city",
                    country: "Brazil",
                    continent: "América do Sul"
                    
                } 
            })            
            
            
            console.log("Le props", image)

        }
        loadX()
    }, [])




    return (
        <Flex>
            <Text>Ola Debug</Text>
        </Flex>
    )
    
}


