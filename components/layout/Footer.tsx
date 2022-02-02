import React, { ReactElement } from 'react'
import { Divider, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import Social from '../Social'
import { useBreakpointValue } from '@chakra-ui/react'

export default function Footer(): ReactElement {
	const size = useBreakpointValue({ base: 'xs', lg: 'sm' })
	const color = useColorModeValue('teal.600', 'teal.200')
	return (
		<>
			<Divider />
			<Flex
				justify='center'
				align='center'
				direction={['column-reverse', null, null, 'row']}
				w='100vw'
				m='6rem auto 0 auto'
				p='2rem'
				boxShadow='md'
			>
				<Heading size={size} color={color} mr={{ base: '0', lg: '2em' }} mt={{ base: '2em', lg: '0' }}>
					{'Designed & Developed by Saransh Grover © 2022'}
				</Heading>
				<Social />
			</Flex>
		</>
	)
}
