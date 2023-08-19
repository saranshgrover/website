import React, { ReactElement } from 'react'
import content, { Project } from '../content/projects'
import { Box, Heading, Image, Text, Grid, useColorMode, Center, Skeleton } from '@chakra-ui/react'
import { ProjectCover, ProjectCoverBasic } from './Portfolio'
import AnimatedDivider from './AnimatedDivider'
import Link from 'next/link'

export default function Featured(): ReactElement {
	// @ts-ignore
	const featured = React.useMemo(() => content.projects.filter((p) => p.isFeatured), [content])
	return (
		<Box id='featured' maxW='100vw' m={['0.5em', null, '2em']} mt={{ base: '5em', lg: '0' }}>
			<AnimatedDivider>
				<Heading size='xl' textAlign='center'>
					{' '}
					Featured Work{' '}
				</Heading>
			</AnimatedDivider>

			<Center my='1em' mx={['0.5em', null, '6em']}>
				<Grid templateColumns='1fr' gap={6}>
					<ComingSoonCard project={featured[0]} />
					<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={6}>
						{featured.slice(1).map((project, index) => (
							<MyCard project={project} />
						))}
					</Grid>
				</Grid>
			</Center>
		</Box>
	)
}

interface MyCardProps {
	project: Project
}
const MyCard = ({ project }: MyCardProps) => {
	const [hover, setHover] = React.useState(false)
	const { colorMode } = useColorMode()
	return (
		<Center>
			<Link href={project.mdFile ? `/projects/${project.id}` : ''}>
				<Box
					borderRadius={'lg'}
					overflow={'hidden'}
					as='button'
					position='relative'
					width='100%'
					maxW={'80vw'}
					height='100%'
					maxH='50vh'
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					{project.image.includes('mp4') ? (
						<Box borderRadius={'lg'} overflow={'hidden'}>
							<video
								style={{
									objectFit: 'cover',
									maxHeight: '50vh',
									width: '100%',
									maxWidth: '80vw',
								}}
								autoPlay
								loop
								muted
							>
								<source src={project.image} type='video/mp4' />
							</video>
						</Box>
					) : (
						<Image
							fallback={<Skeleton height={'30vh'} />}
							src={colorMode === 'dark' && project.darkImage ? project.darkImage : project.image}
							opacity={hover ? 0.5 : 1}
							alt={project.name}
							height='100%'
							width='100%'
							objectFit='fill'
							borderRadius={'lg'}
						/>
					)}
					<Box
						borderRadius={'lg'}
						height='100%'
						width={'100%'}
						maxWidth={'100%'}
						maxHeight={'100%'}
						position='absolute'
						bottom={0}
						left={0}
						right={0}
						p={4}
						bg='rgba(0, 0, 0, 0.8)'
						color='white'
						textAlign='center'
						visibility={hover ? 'visible' : 'hidden'}
					>
						<ProjectCoverBasic project={project} />
					</Box>
				</Box>
			</Link>
		</Center>
	)
}

const ComingSoonCard = ({ project }: MyCardProps) => {
	const [hover, setHover] = React.useState(false)
	const { colorMode } = useColorMode()
	return (
		<Center>
			<Box
				borderRadius={'lg'}
				position='relative'
				width='100%'
				maxW={'80vw'}
				height='100%'
				maxH='50vh'
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				{project.image.includes('mp4') ? (
					<Box borderRadius={'lg'} width='100%' maxWidth={'80vw'} overflow={'hidden'}>
						<video
							style={{ objectFit: 'cover', maxHeight: '50vh', width: '100%', maxWidth: '80vw' }}
							autoPlay
							loop
							muted
						>
							<source src={project.image} type='video/mp4' />
						</video>
					</Box>
				) : (
					<Image
						fallback={<Skeleton height={'30vh'} />}
						src={colorMode === 'dark' && project.darkImage ? project.darkImage : project.image}
						opacity={hover ? 0.5 : 1}
						alt={project.name}
						height='100%'
						width='100%'
						objectFit='fill'
						borderRadius={'lg'}
					/>
				)}
				<Box
					borderRadius={'lg'}
					height='100%'
					width={'100%'}
					maxWidth={'100%'}
					maxHeight={'100%'}
					position='absolute'
					bottom={0}
					left={0}
					right={0}
					p={4}
					bg='rgba(0, 0, 0, 0.8)'
					color='white'
					textAlign='center'
					// visibility={hover ? 'visible' : 'hidden'}
				>
					<ProjectCoverBasic project={project} />
				</Box>
			</Box>
		</Center>
	)
}
