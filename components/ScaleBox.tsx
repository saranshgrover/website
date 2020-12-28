import React, { useMemo, useContext } from 'react'

import { IntersectionContext } from '../contexts/IntersectionObserver'
import MotionBox from './MotionBox'
import {BoxProps} from '@chakra-ui/react'

interface Props extends BoxProps {
	delayOrder?: number,
	duration?: number,
	easing?: any,
}


export default function ScaleBox({
	children,
	delayOrder, // order of appearance
	duration = 0.9,
	easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
	...boxProps
}: React.PropsWithChildren<Props>) {
	const { inView } = useContext(IntersectionContext)
	const transition = useMemo(
		() => ({
			duration,
			delay: delayOrder / 5,
			ease: easing,
			delayChildren: duration + (delayOrder /5 ) + 5
		}),
		[duration, delayOrder, easing]
	)

	const variants = {
		hidden: {
			scale: 0,
			opacity: 0,
			transition,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition,
		},
	}

	return (
		<MotionBox
			initial='hidden'
			animate={inView ? 'show' : 'hidden'}
			exit='hidden'
			variants={variants}
			{...boxProps}
			>
			{children}
		</MotionBox>
	)
}
