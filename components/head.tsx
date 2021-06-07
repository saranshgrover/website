import NextHead from 'next/head'
import * as React from 'react'

interface Props {
	title: string
	description?: string
	image?: string
	url?: string
}

const Head = ({ children, title, description, image, url }: React.PropsWithChildren<Props>) => (
	<React.Fragment>
		<NextHead>
			<meta charSet='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			<meta httpEquiv='x-ua-compatible' content='ie=edge' />
			<meta property='og:title' content={title} />
			<meta property='twitter:title' content={title} />
			{description && (
				<>
					<meta property='og:description' content={description} />
					<meta property='twitter:description' content={description} />
				</>
			)}
			{image && (
				<>
					<meta property='og:image' content={image} />
					<meta property='twitter:image' content={image} />
				</>
			)}
			{url && (
				<>
					<meta property='og:url' content={url} />
					<meta property='twitter:url' content={url} />
				</>
			)}
			<title>{title}</title>

			{children}
		</NextHead>
	</React.Fragment>
)

export default Head
