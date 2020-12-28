import React, { ReactElement } from 'react'
import { IntersectionObserver } from '../contexts/IntersectionObserver'
import ScaleBox from '../components/ScaleBox'
import { Flex, Text} from '@chakra-ui/react'
import AnimatedDivider from './AnimatedDivider'
import Link from 'next/link'

interface Props {}

const paragraphs = [
	<>
	 I am a Senior at <Link href='https://stonybrook.edu'>Stony Brook University</Link> majoring in Computer Science with a Human Computer Interaction specialization a minor in English. I'm passionate about UI/UX Design, Visualization, Gesture Interfaces and Abstraction.
	</>,
	<>
	I'm also an avid <Link href='https://srn.sh/wca'>Speedcuber </Link> and currently serve as the Vice-Chair and Director for the <Link href='https://wca.link'>World Cube Association.</Link>
	</>
]

export default function About({}: Props): ReactElement {
	return (
		<IntersectionObserver>
			<ScaleBox delayOrder={0}>
				<Flex direction='column' maxW='700px' justify='space-around' align='center' mt='4'>
					<AnimatedDivider/>
					{paragraphs.map((paragraph, key) => (
						<Text fontSize='xl' key={key}>{paragraph}</Text>
					))}
				</Flex>
			</ScaleBox>
		</IntersectionObserver>
	)
}
