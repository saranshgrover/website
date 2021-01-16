import React, { ReactElement, useMemo } from 'react'
import { IntersectionObserver } from '../../contexts/IntersectionObserver'
import ScaleBox from '../../components/ScaleBox'
import { Flex, Heading } from '@chakra-ui/react'
import AnimatedDivider from '../../components/AnimatedDivider'
import { useRouter } from 'next/router'
import Portfolio from '../../components/Portfolio'
import ProjectsTable from '../../components/ProjectsTable'
import Head from '../../components/head'

export default function index(): ReactElement {
	const router = useRouter()
	const { mode } = router.query
	const Component = useMemo(() => {
		switch (mode) {
			case 'table':
				return ProjectsTable
			default:
				return Portfolio
		}
	}, [mode])

	return (
        <>
		<Head title='Saransh Grover - Projects'/>
			<IntersectionObserver>
				<ScaleBox delayOrder={0}>
					<Flex direction='column' m='4'>
						<AnimatedDivider>
							<Heading size='2xl' textAlign='center'>
								{' '}
								Projects{' '}
							</Heading>
						</AnimatedDivider>
						<Component />
					</Flex>
				</ScaleBox>
			</IntersectionObserver>
		</>
	)
}
