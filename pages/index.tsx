import React, { ReactElement } from 'react'
import Intro from '../components/Intro'
import Featured from '../components/Featured'
import Head from '../components/head'
export default function index(): ReactElement {
	return (
		<>
			<Head title='Saransh Grover' />
			<Intro />
			<Featured />
		</>
	)
}
