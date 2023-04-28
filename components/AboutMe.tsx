import React, { ReactElement } from 'react'
import { Flex, useBreakpointValue, Stack, Container, Box, Heading, Center, Text } from '@chakra-ui/react'
import { IntersectionObserver } from '../contexts/IntersectionObserver'
// import { Image } from 'components/Image'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import rehypeRaw from 'rehype-raw'
import ChakraUIRenderer from 'config/ChakraMdRenderer'
import ReactMarkdown from 'react-markdown'
import profilePic from '../public/images/saransh_potrait.jpeg'
import Timeline from './Timeline'

interface Props {
	md: string
}
export default function AboutMe({ md }: Props): ReactElement {
	const size = useBreakpointValue({ base: 300, md: 300, lg: 500, default: 300 })
	const showLargeImage = useBreakpointValue({ base: false, md: false, lg: true, default: true })
	const router = useRouter()

	return (
		<Box p='12'>
			{/* <Heading as='h1'>Started with bits, fell in love with people</Heading> */}
			<Flex direction={['column', 'row']} justify='space-around' align='flex-start' pb='8' w='100%'>
				<Center w={{ base: '100%', lg: '35%' }} display={'block'} mb={{ base: '5em', lg: 0 }}>
					<Image layout='responsive' src={profilePic} alt='Saransh Image' priority />
				</Center>
				<Stack direction={'column'} w={{ base: '100%', lg: '60%' }}>
					<Container maxW={{ base: 'xl', xl: '4xl' }}>
						<ReactMarkdown rehypePlugins={[rehypeRaw]} children={md} components={ChakraUIRenderer()} />
					</Container>
				</Stack>
			</Flex>
			<Box display={{ base: 'none', md: 'block' }}>
				<Heading textAlign={'center'} as='h2'>
					My Career Timeline
				</Heading>
				<Timeline />
			</Box>
		</Box>
	)
}
