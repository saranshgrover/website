import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import styles from '../styles/icon.module.css'
import {BoxProps} from '@chakra-ui/react'

const icon = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		fill: 'rgba(255, 255, 255, 0)',
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		fill: '#09f',
	},
}


export default function Icon({...props}: BoxProps) {
	return (
		<Box className={styles.container} {...props}>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 100 100'
				className={styles.item}
				whileHover={{ scale: 1.2 }}>
				<motion.path
					d='M70 30 A20 20 0 1 0 50 50 A20 20 0 1 1 30 70'
					variants={icon}
					initial='hidden'
					animate='visible'
					whileHover={{ opacity: 0.8 }}
					transition={{
						default: { duration: 2, ease: 'easeInOut' },
						fill: { duration: 2, ease: [1, 0, 0.8, 1] },
						opacity: { duration: 1} 
					}}
				/>
			</motion.svg>
		</Box>
	)
}
