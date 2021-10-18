import {extendTheme} from '@chakra-ui/react'
import typography from './typography'
import { mode } from "@chakra-ui/theme-tools"


const theme = extendTheme({
    ...typography,
    styles: {
        global: (props)  => ({
            body: {
                overflowX: 'hidden',
                bg: mode('white', '#141214')(props),

            },
            a: {
                backgroundImage: mode('linear-gradient(10deg, #00cdcd 0%, #00cdcd 100%)',"linear-gradient(120deg, teal 0%, teal 100%)")(props),
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 0.2em',
                backgroundPosition: '0 88%',
                transition: 'background-size 0.25s ease-in',
                '&:hover': {
                    backgroundSize: '100% 88%'
                }
            }
        })
    },
    fontSizes: {
        md: '20px',
        lg: '20px'
    },
    config: {
        useSystemColorMode: false,
        initialColorMode: 'dark'
    }
})

export default theme