import React, { ReactElement } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import Social from '../Social'
import { useBreakpointValue } from "@chakra-ui/react"

export default function Footer(): ReactElement {
    const size = useBreakpointValue({base: 'xs', lg: 'md'})
	return (
		<Flex
            justify='space-between'
            align='center'
			direction={['column-reverse', null, null, 'row']}
			maxW='100vw'
			m='6rem auto 0 auto'
			p='2rem'
			boxShadow='md'>
			<Heading
				size={size}
				colorScheme='gray'
				mr={{ base: '0', lg: '2em' }}
				mt={{ base: '2em', lg: '0' }}>
				Copyright © 2021 Saransh Grover - All Rights Reserved
			</Heading>
			<Social />
		</Flex>
	)
}
