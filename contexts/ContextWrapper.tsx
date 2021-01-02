import React, { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
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
