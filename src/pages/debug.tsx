import { Flex, Text} from "@chakra-ui/react"
import { GetServerSideProps, GetStaticProps } from "next"
import { useEffect } from "react"
import { api } from "../services/api"

export default function Debug() {


    useEffect(() => {
        const loadX = async () => {
            const imagem = await api.get<{ caminho: string}>("/debug", { params: { queryText: "Hong Kong" } })
            console.log("Le props", imagem)

        }
        loadX()
    }, [])




    return (
        <Flex>
            <Text>Ola Debug</Text>
        </Flex>
    )
    
}


