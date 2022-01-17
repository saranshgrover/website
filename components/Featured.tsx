import React, { ReactElement } from 'react'
import content from '../content/projects'
import { Box, Heading } from '@chakra-ui/react'
import { ProjectCover } from './Portfolio'
import AnimatedDivider from './AnimatedDivider'

export default function Featured(): ReactElement {
	const featured = React.useMemo(() => content.projects.filter((p) => p.isFeatured), [content])
	return (
		<Box id='featured' maxW='100vw' m={['0.5em', null, '2em']} mt={{ base: '5em', lg: '0' }}>
			<AnimatedDivider>
				<Heading size='xl' textAlign='center'>
					{' '}
					Featured Projects{' '}
				</Heading>
			</AnimatedDivider>

			<Box m={['0.5em', null, '2em']}>
				{featured.map((project, index) => (
					<ProjectCover key={index} project={project} isEven={index % 2 == 0} />
				))}
			</Box>
		</Box>
	)
}
