import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import {ContextProvider} from "../contexts/ContinentContext"

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import "swiper/components/pagination/pagination.scss";

import "../styles/swiper.scss";
import { mirageServer } from '../services/mirage';

function MyApp({ Component, pageProps } : AppProps) {

  mirageServer()
  
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ContextProvider>
        
        <Component {...pageProps} />

      </ContextProvider>
    </ChakraProvider>
  )
}

export default MyApp

