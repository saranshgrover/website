import React, { ReactElement } from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Featured from '../components/Featured'
import { Flex } from '@chakra-ui/react'

export default function index(): ReactElement {
	return (
		<>
			<Intro />
			<Featured />
		</>
	)
}
