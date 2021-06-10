import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Heading, Image, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Tag from 'components/Tag'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { RiGithubFill } from 'react-icons/ri'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from '../config/ChakraMdRenderer'
import { Project } from '../content/projects'
interface Props {
	project: Project
	md: string
}

const MotionImage = motion.custom(Image)
const MotionButton = motion.custom(Button)

export default function ProjectInfo({ project, md }: Props): ReactElement {
	const iconColor = useColorModeValue('teal.600', 'teal.200')
	return (
		<VStack
			maxW='100vw'
			justify='center'
			spacing={4}
			shouldWrapChildren
			align='center'
			m={{ base: '2rem', md: '4rem' }}
			gap='2rem'
		>
			<Box h={['30vh', '50vh']}>
				{project.image && (
					<MotionImage
						h={['30vh', '50vh']}
						whileHover={{ scale: 1.1 }}
						objectFit='cover'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						src={project.image}
						layoutId={`${project.id}-image`}
						cursor='pointer'
					/>
				)}
			</Box>
			<Container ml='auto' maxW='2xl' centerContent>
				<Heading mb='2rem' as='a' size='3xl'>
					{project.name}
				</Heading>
				<Stack
					direction={{ base: 'column' }}
					justify={{ base: 'center' }}
					align='center'
					mb={'2em'}
					spacing='2em'
				>
					<Stack maxW='100vw' direction='row' spacing={{ base: '0.5em', md: '2em' }} align='center'>
						{project.tags.map((tag, index) => (
							<>{<Tag tag={tag} key={index} />}</>
						))}
					</Stack>
					<Stack direction='row' align='center' spacing='1em'>
						{project.demo && (
							<Link href={project.demo}>
								<MotionButton
									size='sm'
									leftIcon={<ExternalLinkIcon />}
									color={iconColor}
									whileHover={{ scale: 1.2 }}
									variant='solid'
									aria-label='demo'
									fontSize={{ base: '1rem', lg: '1.5rem' }}
								>
									Demo
								</MotionButton>
							</Link>
						)}
						{project.github && (
							<Link href={project.github}>
								<MotionButton
									size='sm'
									leftIcon={<RiGithubFill />}
									color={iconColor}
									whileHover={{ scale: 1.2 }}
									variant='solid'
									fontSize={{ base: '1rem', lg: '1.5rem' }}
									aria-label='github'
								>
									Browse Code
								</MotionButton>
							</Link>
						)}
					</Stack>
				</Stack>

				<Text fontSize='xl'>{project.description}</Text>
			</Container>
			<Container maxW='3xl'>
				<ReactMarkdown components={ChakraUIRenderer()} children={md} />
			</Container>
		</VStack>
	)
}
