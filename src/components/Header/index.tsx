import { Flex, Image, Link } from "@chakra-ui/react";
import logo from "./logo.svg";
import backImg from "./back.svg";

interface HeaderProps {
    hasBackButton?: boolean;
}

export function Header({hasBackButton = false} : HeaderProps) {

    return (
    
        <Flex
            as="header"
            maxWidth={1440}
            w="100%"
            h={100}
            align="center"
            p="3"
            mx="auto"
            justify="center"
        >
            <Flex maxWidth={1160} width="100%" justify="space-between">
               { hasBackButton && (<Link href="/"><Image src={backImg} /></Link>) } 
                <Flex w="100%" justify="center"> 
                    <Image  src={logo} />
                </Flex>
            </Flex>
            
        </Flex>
    )
}
