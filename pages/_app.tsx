import type { AppProps } from 'next/app'
import ContextWrapper from '../contexts/ContextWrapper'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

// The handler to smoothly scroll to the element into view
const handExitComplete = (): void => {
	if (typeof window !== 'undefined') {
		const hashId = window.location.hash

		console.log({ location: window.location, hashId })

		if (hashId) {
			const element = document.querySelector(hashId)
			console.log({ element })

			if (element) {
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
					inline: 'nearest',
				})
			}
		}
	}
}
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContextWrapper>
			<AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
				<Layout>
				<Component {...pageProps} />
				</Layout>
			</AnimatePresence>
		</ContextWrapper>
	)
}

export default MyApp
