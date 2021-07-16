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
import { Container } from 'next/app'
import rehypeRaw from 'rehype-raw'

interface Props {
	md: string
}

export default function About({ md }: Props): ReactElement {
	return (
		<IntersectionObserver>
			<ScaleBox delayOrder={0}>
				<Flex direction='column' maxW='700px' justify='space-around' align='center' mt='4'>
					<AnimatedDivider />
					{/* {paragraphs.map((paragraph, key) => (
						<Text fontSize='xl' key={key}>{paragraph}</Text>
					))} */}
					<Container maxW='xl'>
						<ReactMarkdown rehypePlugins={[rehypeRaw]} children={md} components={ChakraUIRenderer()} />
					</Container>
				</Flex>
			</ScaleBox>
		</IntersectionObserver>
	)
}
