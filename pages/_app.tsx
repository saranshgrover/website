import type { AppProps } from 'next/app'
import ContextWrapper from '../contexts/ContextWrapper'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Layout from '../components/layout/Layout'
import * as gtag from '../config/gtag'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<ContextWrapper>
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</AnimatePresence>
			</AnimateSharedLayout>
		</ContextWrapper>
	)
}

export default MyApp
