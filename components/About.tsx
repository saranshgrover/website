import React, { ReactElement } from 'react'
import { IntersectionObserver } from '../contexts/IntersectionObserver'
import ScaleBox from '../components/ScaleBox'
import { Flex, Text } from '@chakra-ui/react'
import AnimatedDivider from './AnimatedDivider'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from '../config/ChakraMdRenderer'
import { GetStaticProps } from 'next'
import { getMdFor } from '../logic/markdown'
import { Container } from '@chakra-ui/react'
import rehypeRaw from 'rehype-raw'

interface Props {
	md: string
}

export default function About({ md }: Props): ReactElement {
	return (
		<IntersectionObserver>
			{/* {paragraphs.map((paragraph, key) => (
						<Text fontSize='xl' key={key}>{paragraph}</Text>
					))} */}
			<Container maxW={{ base: 'xl', '2xl': '5xl' }} padding='0'>
				<ReactMarkdown rehypePlugins={[rehypeRaw]} children={md} components={ChakraUIRenderer()} />
			</Container>
		</IntersectionObserver>
	)
}
