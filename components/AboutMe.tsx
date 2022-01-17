import React, { ReactElement } from 'react'
import { Flex, useBreakpointValue, Stack, Container, Box } from '@chakra-ui/react'
import { IntersectionObserver } from '../contexts/IntersectionObserver'
import About from './About'
import ScaleBox from '../components/ScaleBox'
import content from '../content/intro'
import Social from './Social'
// import { Image } from 'components/Image'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import rehypeRaw from 'rehype-raw'
import ChakraUIRenderer from 'config/ChakraMdRenderer'
import ReactMarkdown from 'react-markdown'
import profilePic from '../public/images/saransh_potrait.jpeg'

interface Props {
	md: string
}
export default function AboutMe({ md }: Props): ReactElement {
	const size = useBreakpointValue({ base: 300, md: 300, lg: 500, default: 300 })
	const showLargeImage = useBreakpointValue({ base: false, md: false, lg: true, default: true })
	const router = useRouter()

	return (
		<Flex direction={['column', 'row']} justify='space-around' align='center' p='4'>
			<Stack direction={'column'}>
				<Container maxW='xl'>
					<ReactMarkdown rehypePlugins={[rehypeRaw]} children={md} components={ChakraUIRenderer()} />
				</Container>
				<Social />
			</Stack>
			<Flex h='35vmax' w='35vmax' justify='center' align={'center'} mt={{ base: '5em', lg: 0 }}>
				<Image src={profilePic} alt='Saransh Image' priority />
			</Flex>
		</Flex>
	)
}
