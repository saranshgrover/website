import { Center, Heading } from '@chakra-ui/layout'
import React, { ReactElement } from 'react'

export default function Error(): ReactElement {
	return (
		<Center h='60vh'>
			<Heading size='4xl'>404 - Page Not Found</Heading>
		</Center>
	)
}
