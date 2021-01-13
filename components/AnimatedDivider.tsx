import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import {Divider, Box, BoxProps} from '@chakra-ui/react'

const MotionDivider = motion.custom(Divider)

interface Props extends BoxProps {
    widths?: string[],
    times?: number[]
}

export default function UnderlinedHeading({children,widths=['0%','100%'], times=[0,1], ...boxProps }: React.PropsWithChildren<Props>): ReactElement {
	return (
        <Box {...boxProps}>
            {children}
            <MotionDivider h='10px' transition={{duration: 3, times: times}} animate={{width: widths}} />
        </Box>
	)
}
