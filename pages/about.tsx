import React, { ReactElement } from 'react'
import Head from '../components/head'
import { GetStaticProps } from 'next'
import { getMdFor } from '../logic/markdown'
import AboutMe from 'components/AboutMe'

interface Props {
	md: string
}

export default function index({ md }: Props): ReactElement {
	return (
		<>
			<Head title='Saransh Grover - About' />
			<AboutMe md={md} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const md = getMdFor('about', 'content')
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
