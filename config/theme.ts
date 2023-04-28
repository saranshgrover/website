import { extendTheme } from '@chakra-ui/react'
import typography from './typography'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
	...typography,
	styles: {
		global: (props) => ({
			body: {
				overflowX: 'hidden',
				backgroundColor: mode('#b8c6db', '#16161d')(props),
				backgroundImage: mode(
					'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);',
					'linear-gradient(315deg, ##16161d 0%, #09203f 50%);'
				)(props),
			},
			a: {
				backgroundImage: mode(
					'linear-gradient(1deg, #00cdcd 0%, #00cdcd 100%)',
					'linear-gradient(120deg, teal 0%, teal 100%)'
				)(props),
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100% 0.05em',
				backgroundPosition: '0 88%',
				transition: 'background-size 0.25s ease-in',
				'&:hover': {
					backgroundSize: '100% 88%',
				},
			},
			b: {
				color: mode('#6180FE', '#00cdcd')(props),
			},
			u: {
				bgColor: mode('lightblue', 'lightblue')(props),
				color: mode('white', 'black')(props),
				// textDecorationColor: mode('#00cdcd', 'teal')(props),
				// textDecorationThickness: '0.2em',
				// textUnderlineOffset: '0.3em',
			},
			mark: {
				bgColor: mode('lightblue', 'lightblue')(props),
				// color: mode('black', 'white')(props),
			},
			li: {
				fontSize: {
					base: '18px',
					lg: '18px',
					'2xl': '22px',
				},
			},
			td: {
				fontSize: {
					base: '18px',
					lg: '18px',
					'2xl': '22px',
				},
			},
			th: {
				fontSize: {
					base: '22px',
					lg: '22px',
					'2xl': '22px',
				},
			},
			h4: {
				fontWeight: 'bold',
			},
		}),
	},
	config: {
		useSystemColorMode: false,
		initialColorMode: 'light',
	},
})

export default theme
