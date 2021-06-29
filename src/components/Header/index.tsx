import { Flex, Image, Link } from "@chakra-ui/react";
import { default as NextLink}  from 'next/link'
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
            h={[50,100,100]}
            align="center"
            p="3"
            mx="auto"
            justify="center"
        >
            <Flex h={[5, 11.5, 11.5]} maxWidth={1160} margin={[15,27,27]} width="100%" justify="space-between">
               { hasBackButton && (<NextLink href="/"><Link><Image src={backImg} /></Link></NextLink>) } 
                <Flex w="100%" justify="center"> 
                    <Image  src={logo} />
                </Flex>
            </Flex>
            
        </Flex>
    )
}
