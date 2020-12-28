import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import {Divider} from '@chakra-ui/react'

const MotionDivider = motion.custom(Divider)

interface Props {
    widths?: string[],
    times?: number[]
}

export default function UnderlinedHeading({children,widths=['0%','100%'], times=[0,1] }: React.PropsWithChildren<Props>): ReactElement {
	return (
        <>
            {children}
            <MotionDivider h='10px' transition={{duration: 3, times: times}} animate={{width: widths}} />
        </>
	)
}
