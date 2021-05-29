import React, { ReactElement } from 'react'
import Intro from '../components/Intro'
import Featured from '../components/Featured'
import Head from '../components/head'
import { GetStaticProps } from 'next'
import { getMdFor } from '../logic/markdown'

interface Props {
	md: string
}

export default function index({ md }: Props): ReactElement {
	return (
		<>
			<Head title='Saransh Grover' />
			<Intro md={md} />
			<Featured />
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const md = getMdFor('intro', 'content')
	if (!md)
		return {
			props: {},
			notFound: true,
		}
	return {
		props: {
			md,
		},
	}
}
