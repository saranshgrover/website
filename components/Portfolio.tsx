import { ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons'
import {
	Box,
	Container,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Stack,
	Tag,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { RiGithubFill } from 'react-icons/ri'
import content, { Project } from '../content/projects'
import AnimatedDivider from './AnimatedDivider'

export default function Portfolio(): ReactElement {
	return (
		<Box m={['0.5em', null, '2em']}>
			{content.projects.map((project, index) => (
				<ProjectCover isEven={index % 2 == 0} key={index} project={project} />
			))}
		</Box>
	)
}

const MotionImage = motion.custom(Image)
const MotionFlex = motion.custom(Flex)
const MotionIcon = motion.custom(Icon)
const MotionIconButton = motion.custom(IconButton)
const MotionContainer = motion.custom(Container)

export function ProjectCover({ project, isEven }: { project: Project; isEven: boolean }): ReactElement {
	const color = useColorModeValue('gray.200', 'gray.700')
	const iconColor = useColorModeValue('teal.600', 'teal.200')
	const controls = useAnimation()
	const containerControls = useAnimation()
	const variants = {
		imgNormal: {
			opacity: 0.8,
			scale: 1.0,
		},
		imgExit: {
			x: 0,
			opacity: 0,
		},
		normal: {
			x: 0,
		},
		scaled: {
			scale: 1.2,
		},
		textHover: (i: boolean) => ({
			x: i ? 300 : -300,
		}),
	}
	function startControls() {
		containerControls.start('textHover')
		controls.start('scaled')
	}
	function stopControls() {
		containerControls.start('normal')
		controls.start('imgNormal')
	}
	return (
		<MotionFlex
			_odd={{ flexDirection: ['column', null, 'row-reverse'] }}
			_even={{ flexDirection: ['column', null, 'row'] }}
			borderRadius='30px'
			m={['0']}
			justify={'center'}
			_notLast={{ mb: { base: '2em', lg: '8em' } }}
			align='center'
		>
			<Box
				h={['auto', null, '50vh']}
				w={['auto', null, '50vw', null, '40vw']}
				className='project-content'
				p={['30px 25px 20px', null, '40px 40px 30px']}
				zIndex={[0, null, 5]}
			>
				<MotionContainer
					borderRadius='30px'
					bg={color}
					mt={['0', null, null, '30%', '20%']}
					mr={['0', null, !isEven ? '-200px' : 'auto']}
					ml={['0', null, isEven ? '-200px' : 'auto']}
					pb='2em'
					animate={containerControls}
					variants={variants}
					custom={isEven}
					initial='normal'
					onMouseOver={startControls}
					onMouseOut={stopControls}
				>
					<AnimatedDivider m={['0', '0 0 20px']}>
						<Heading align='center' fontSize='clamp(24px, 5vw, 50px)'>
							<Link href={`/projects/${project.id}`}>{project.name}</Link>
						</Heading>
					</AnimatedDivider>
					<Text noOfLines={3} align='center' mb={{ base: '0.5em', md: '2em' }}>
						{project.description}
					</Text>
					<Stack
						direction={{ base: 'column', lg: 'row' }}
						justify={{ base: 'center', lg: 'space-around' }}
						align='center'
						spacing='1em'
					>
						<Stack direction='row' spacing='0.5em' align='center'>
							{project.tags.map((tag, index) => (
								<>
									{tag.showIcon ? (
										<MotionIcon
											key={index}
											// @ts-ignore
											as={tag.icon}
											aria-label={tag.name}
											color={iconColor}
											size='1.5rem'
										/>
									) : (
										<Tag key={index} colorScheme='teal'>
											{tag.name}
										</Tag>
									)}
								</>
							))}
						</Stack>
						<Stack direction='row' align='center' spacing='0.5em'>
							<Link href={`/projects/${project.id}`}>
								<MotionIconButton
									icon={<InfoIcon />}
									color={iconColor}
									whileHover={{ scale: 1.2 }}
									variant='link'
									fontSize={{ base: '1rem', lg: '1.5rem' }}
									aria-label='more info'
								/>
							</Link>
							{project.demo && (
								<Link href={project.demo}>
									<MotionIconButton
										icon={<ExternalLinkIcon />}
										color={iconColor}
										whileHover={{ scale: 1.2 }}
										variant='link'
										aria-label='demo'
										fontSize={{ base: '1rem', lg: '1.5rem' }}
									/>
								</Link>
							)}
							{project.github && (
								<Link href={project.github}>
									<MotionIconButton
										icon={<RiGithubFill />}
										color={iconColor}
										whileHover={{ scale: 1.2 }}
										variant='link'
										fontSize={{ base: '1rem', lg: '1.5rem' }}
										aria-label='github'
									/>
								</Link>
							)}
						</Stack>
					</Stack>
				</MotionContainer>
			</Box>
			<Box h={['auto', '40vh']}>
				<Link href={project.demo ?? ''}>
					<MotionImage
						variants={variants}
						animate={controls}
						initial='imgNormal'
						exit='imgExit'
						onMouseOver={startControls}
						onMouseOut={stopControls}
						_hover={{ filter: 'none' }}
						filter={'sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg)'}
						h={['auto', '40vh']}
						objectFit='contain'
						cursor='pointer'
						whileHover={{ opacity: 1 }}
						src={project.image}
					/>
				</Link>
			</Box>
		</MotionFlex>
	)
}
