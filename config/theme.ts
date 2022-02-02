import {extendTheme} from '@chakra-ui/react'
import typography from './typography'
import { mode } from "@chakra-ui/theme-tools"


const theme = extendTheme({
    ...typography,
    styles: {
        global: (props)  => ({
            body: {
                overflowX: 'hidden',
                backgroundColor: mode('#b8c6db', '#16161d')(props),
                backgroundImage: mode('linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);','linear-gradient(315deg, ##16161d 0%, #09203f 50%);')(props),

            },
            a: {
                backgroundImage: mode('linear-gradient(1deg, #00cdcd 0%, #00cdcd 100%)',"linear-gradient(120deg, teal 0%, teal 100%)")(props),
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 0.05em',
                backgroundPosition: '0 88%',
                transition: 'background-size 0.25s ease-in',
                '&:hover': {
                    backgroundSize: '100% 88%'
                }
            }
        })
    },
    fontSizes: {
        md: '18px',
        lg: '20px'
    },
    config: {
        useSystemColorMode: false,
        initialColorMode: 'dark'
    }
})

export default theme