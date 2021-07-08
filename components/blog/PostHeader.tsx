import { Box, Button, Container, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Tag from 'components/Tag'
import intro from 'content/intro'
import { Post } from 'content/posts'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import React, { ReactElement } from 'react'
import Image from 'next/image'
interface Props {
	post: Post
	linkButton?: boolean
	minHeight?: string
}

export default function PostHeader({ post, linkButton = false, minHeight = '50vh' }: Props): ReactElement {
	const [gradient, description, gradientLevel] = useColorModeValue(
		['#fff', 'gray.800', 'rgba(255,255, 255, 0.18)'],
		['#000', 'gray.300', 'rgba(0, 0, 0, 0.18)']
	)
	return (
		<Box pos='relative' minW='100vw' minH={minHeight}>
			<Image src={post.image} layout='fill' objectFit='cover' />
			<Container ml='auto' maxW='2xl' centerContent minH={minHeight}>
				<Flex minH={minHeight} direction='column' justify='center' alignContent='center' alignItems='center'>
					<Heading textAlign='center' h='100%' size='4xl' zIndex={2} letterSpacing={4} mb='2rem'>
						{post.title}
					</Heading>
					<Text color={description} zIndex={2} fontSize='xl' mb='2rem'>
						{`Posted by ${intro.name} on ${post.date}`}{' '}
					</Text>
					<Stack
						direction={{ base: 'column' }}
						justify={{ base: 'center' }}
						align='center'
						mb={'2em'}
						spacing='2em'
						zIndex={2}
					>
						<Stack maxW='100vw' direction='row' spacing={{ base: '0.5em', md: '2em' }} align='center'>
							{post.tags.map((tag, index) => (
								<Tag tag={tag} key={index} zIndex={2} />
							))}
						</Stack>
					</Stack>
					<Text zIndex={2} fontSize='xl' mb='2rem'>
						{post.description}
					</Text>
					{linkButton && (
						<NextLink href={`/blog/${post.id}`}>
							<Button zIndex={2} colorScheme='teal' variant='outline' borderRadius='full' minW='20vw'>
								{`Read More & Comment`}
							</Button>
						</NextLink>
					)}
				</Flex>

				<Box
					pos='absolute'
					zIndex={0}
					opacity='0.8'
					bg={`linear-gradient(to top, ${gradient} 0%,${gradientLevel} 100%)`}
					h='100%'
					w='100%'
				/>
				<Box pos='absolute' zIndex={0} opacity='0.2' bg={gradient} h='100%' w='100%' />
			</Container>
		</Box>
	)
}
