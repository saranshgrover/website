import React, { ReactElement } from 'react'
import { useColorMode, Flex, Box, Text, useColorModeValue, IconButton } from '@chakra-ui/react'
import Icon from '../Icon'
import Link from 'next/link'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

interface MenuItemProps {
	title: string
	href: string
	icon?: ReactElement
}

const MotionText = motion(Text)

function MenuItem({ title, href, icon }: MenuItemProps) {
	return (
		<motion.div
			initial={{ y: '-300%' }}
			animate={{
				y: 0,
				transition: {
					duration: 0.8,
					delay: 1,
				},
			}}
		>
			<MotionText
				whileHover={{
					scale: 1.2,
				}}
				mt={{ base: 4, md: 0 }}
				fontSize='lg'
				mr={6}
				display='block'
				cursor='pointer'
			>
				<Link href={href}>{title}</Link>
			</MotionText>
		</motion.div>
	)
}

export default function Header(): ReactElement {
	const [show, setShow] = React.useState(false)
	const handleToggle = () => setShow(!show)
	const { toggleColorMode } = useColorMode()
	const val = useColorModeValue('black', 'white')
	const toggleTheme = useColorModeValue({ title: 'Dark', Icon: MoonIcon }, { title: 'Light', Icon: SunIcon })

	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			padding='1rem'
			w='100vw'
			justify-content='center'
		>
			<Box left='0' w='10%'>
				<Link href='/'>
					<Icon />
				</Link>
			</Box>
			<Box
				as='ol'
				display={{ base: show ? 'block' : 'none', md: 'flex' }}
				width={{ sm: 'full', md: 'auto' }}
				alignItems='center'
				flexGrow={1}
			>
				<MenuItem href='/projects' title='Projects' />
				<MenuItem href='/blog' title='Blog' />
				{/* <MenuItem href='/about' title='About' /> */}
				<MenuItem href='https://srn.sh/resume' title='Resume' />
			</Box>
			<IconButton
				display={{ base: show ? 'block' : 'none', md: 'block' }}
				mr='1em'
				size='lg'
				aria-label={`Toggle ${toggleTheme.title}`}
				icon={<toggleTheme.Icon />}
				variant='ghost'
				onClick={toggleColorMode}
			/>
			<Box cursor='pointer' display={{ base: 'block', md: 'none' }} onClick={handleToggle} mr='1rem'>
				<svg fill={val} width='1.5em' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
					<title>Menu</title>
					<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
				</svg>
			</Box>
		</Flex>
	)
}
