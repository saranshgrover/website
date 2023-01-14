import React, { ReactElement } from 'react'
import content, { Project } from '../content/projects'
import { Box, Heading, Image, Text, Grid, useColorMode } from '@chakra-ui/react'
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
					Featured Projects{' '}
				</Heading>
			</AnimatedDivider>

			<Box my='1em' mx={['0.5em', null, '6em']}>
				<Grid templateColumns='repeat(auto-fill, minmax(500px, 1fr));' gap={6}>
					{featured.map((project, index) => (
						<MyCard project={project} />
					))}
				</Grid>
			</Box>
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
		<Link href={`/projects/${project.id}`}>
			<Box
				borderRadius={'lg'}
				as='button'
				position='relative'
				width='100%'
				height='100%'
				// maxH='50vh'
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<Image
					src={colorMode === 'dark' && project.darkImage ? project.darkImage : project.image}
					opacity={hover ? 0.5 : 1}
					alt={project.name}
					height='100%'
					width='100%'
					objectFit='fill'
					borderRadius={'lg'}
				/>
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
	)
}
