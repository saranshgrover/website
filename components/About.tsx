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

interface Props {
	md: string
}

const paragraphs = [
	<>
		I am an incoming Graduate Student at{' '}
		<Link href='https://umd.edu'>University of Maryland's</Link> Human Computer
		Interaction program. I recently graduated from{' '}
		<Link href='https://stonybrook.edu'>Stony Brook University</Link> with a
		Bachelors of Science in Computer Science. I'm passionate about UI/UX Design
		especially with AR and VR devices, Visualizations with respect to journalism
		on the web and modern gesture interfaces.
	</>,
	<>
		I'm also an avid <Link href='https://srn.sh/wca'>Speedcuber</Link> and
		currently serve as the Vice-Chair and Director for the{' '}
		<Link href='https://wca.link'>World Cube Association.</Link>
	</>,
]

export default function About({ md }: Props): ReactElement {
	return (
		<IntersectionObserver>
			<ScaleBox delayOrder={0}>
				<Flex
					direction='column'
					maxW='700px'
					justify='space-around'
					align='center'
					mt='4'>
					<AnimatedDivider />
					{/* {paragraphs.map((paragraph, key) => (
						<Text fontSize='xl' key={key}>{paragraph}</Text>
					))} */}
					<Container maxW='xl'>
						<ReactMarkdown
							children={md}
							components={ChakraUIRenderer()}
						/>
					</Container>
				</Flex>
			</ScaleBox>
		</IntersectionObserver>
	)
}
