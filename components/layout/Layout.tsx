import React, { ReactElement } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function Layout({
	children,
}: React.PropsWithChildren<{}>): ReactElement {
	return (
		<Flex direction='column' w='100vw' minH='100vh'>
			<Header />
			{children}
			<Footer />
		</Flex>
	)
}
