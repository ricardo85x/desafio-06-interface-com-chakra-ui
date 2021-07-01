import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

    colors: {
        yellow: {
            "500": "#FFBA08"
        }
    },
  
    fonts: {
        headings: 'Poppins',
        body: 'Poppins', 
    },
    styles: {
        global: {
            body: {
                color: '#47585B',
                bg: '##F5F8FA'
            }
        }
    }
    
})