import React, { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../config/typography'
import theme from '../config/theme'

export default function ContextWrapper({
	children,
}: React.PropsWithChildren<{}>): ReactElement {
	return (
		<>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</>
	)
}
