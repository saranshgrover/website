import { Button, Container, Image, Tag, useColorModeValue, VStack } from '@chakra-ui/react'
import ChakraUIRenderer from 'config/ChakraMdRenderer'
import { Post } from 'content/posts'
import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import PostHeader from './PostHeader'
interface Props {
	post: Post
	md: string
}

const MotionButton = motion.custom(Button)
const MotionTag = motion.custom(Tag)

export default function PostComponent({ post, md }: Props): ReactElement {
	const gradient = useColorModeValue('#fff', '#000')
	const description = useColorModeValue('gray.800', 'gray.300')
	const gradientLevel = useColorModeValue('rgba(255,255, 255, 0.18)', 'rgba(0, 0, 0, 0.18)')
	return (
		<VStack maxW='100vw' justify='center' spacing={4} shouldWrapChildren align='center' gap='2rem'>
			<PostHeader post={post} />
			<Container maxW='3xl'>
				<ReactMarkdown components={ChakraUIRenderer()} children={md} />
			</Container>
		</VStack>
	)
}
