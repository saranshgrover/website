import React, { useEffect, useState } from 'react'
import { useIntersection } from 'react-use'
import {BoxProps, Box} from '@chakra-ui/react'
export const IntersectionContext = React.createContext({ inView: true })

interface Props {
	boxProps?: BoxProps,
	reset?: boolean
}

export const IntersectionObserver = ({
	children,
	boxProps,
	reset = false, // if value set to true - observed element will reappear every time it shows up on the screen
}: React.PropsWithChildren<Props>) => {
	const [inView, setInView] = useState(false)
	const intersectionRef = React.useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0,
	})

	useEffect(() => {
		const inViewNow = intersection && intersection.intersectionRatio > 0
		if (inViewNow) {
			return setInView(inViewNow)
		} else if (reset) {
			return setInView(false)
		}
	}, [intersection, reset])

	return (
		<IntersectionContext.Provider value={{ inView }}>
			<Box {...boxProps} ref={intersectionRef}>{children}</Box>
		</IntersectionContext.Provider>
	)
}
