import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Container,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	VStack,
	Flex,
	Icon,
} from '@chakra-ui/react'
import Tag from 'components/Tag'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { RiGithubFill } from 'react-icons/ri'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import ChakraUIRenderer from '../config/ChakraMdRenderer'
import { Project } from '../content/projects'
interface Props {
	project: Project
	md: string
}

const MotionImage = motion(Image)
const MotionButton = motion(Button)

export default function ProjectInfo({ project, md }: Props): ReactElement {
	const iconColor = useColorModeValue('teal.600', 'teal.200')
	const borderColor = useColorModeValue('black', 'white')
	const { colorMode } = useColorMode()
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
			<Box h='auto'>
				{project.image && (
					<MotionImage
						m='auto'
						h='auto'
						w='70%'
						whileHover={{ scale: 1.05 }}
						objectFit='steretch'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						src={colorMode === 'dark' && project.darkImage ? project.darkImage : project.image}
						layoutId={`${project.id}-image`}
					/>
				)}
			</Box>
			<Container ml='auto' maxW='3xl' centerContent>
				<Heading mb='2rem' size='2xl' textAlign={'center'}>
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
				{project.demo && (
					<Text fontSize='xl' mb='2em'>
						{project.description}
					</Text>
				)}
				{project.featuredInfo && (
					<Stack w='80vw' direction={{ base: 'column', md: 'row' }} spacing='1em' align='center'>
						{project.featuredInfo.map((info, index) => (
							<Stack
								spacing='2em'
								w='100%'
								minH={{ base: '20px', md: '20vh' }}
								key={`${info.title}-${index}`}
								borderRight={{ base: 'none', md: `1px solid ${borderColor}` }}
								borderBottom={{ base: `1px solid ${borderColor}`, md: 'none' }}
								pr='0.3em'
							>
								<Stack w='100%' justify='center' direction='row' align='center' spacing='0.5em'>
									<Heading fontSize={'xl'}>{info.title}</Heading>
									{info.icon && <Icon as={info.icon} boxSize={'20px'} />}
								</Stack>
								<Text textAlign={'center'}>{info.content}</Text>
							</Stack>
						))}
					</Stack>
				)}
				<Divider borderColor={borderColor} w='100vw' />
			</Container>
			<Container maxW={{ base: '3xl', lg: '4xl', '2xl': '4xl' }}>
				<ReactMarkdown
					rehypePlugins={[rehypeRaw]}
					remarkPlugins={[remarkGfm]}
					components={ChakraUIRenderer()}
					children={md}
				/>
			</Container>
		</VStack>
	)
}
