import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Container, Heading, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import AnimatedDivider from 'components/AnimatedDivider'
import ChakraUIRenderer from 'config/ChakraMdRenderer'
import { Post } from 'content/posts'
import React, { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Comments from './Comments'
import PostHeader from './PostHeader'
interface Props {
	post: Post
	md: string
}

export default function PostComponent({ post, md }: Props): ReactElement {
	const commentColor = useColorModeValue('gray.100', 'gray.900')
	const { isOpen, onToggle } = useDisclosure()
	return (
		<VStack divider={<AnimatedDivider widths={['0px', '500px']} />}>
			<VStack
				// mb='30vh'
				minH='100vh'
				maxW='100vw'
				justify='center'
				spacing={4}
				shouldWrapChildren
				align='center'
				gap='2rem'
			>
				<PostHeader post={post} minHeight='60vh' />
				<Container maxW='3xl'>
					<ReactMarkdown
						rehypePlugins={[rehypeRaw]}
						remarkPlugins={[remarkGfm]}
						components={ChakraUIRenderer()}
						children={md}
					/>
				</Container>
			</VStack>
			<Box bg={isOpen ? commentColor : 'auto'} mt='2rem'>
				<Center>
					<Button
						size='xl'
						rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
						bg={commentColor}
						variant='solid'
						borderRadius='full'
						margin='auto'
						onClick={onToggle}
					>
						<Heading size='xl' textAlign='center'>
							{isOpen ? 'Comments' : 'View Comments'}
						</Heading>
					</Button>
				</Center>
				<Comments isOpen={isOpen} />
			</Box>
		</VStack>
	)
}
