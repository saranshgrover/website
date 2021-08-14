import React, { ReactElement } from 'react'
import { RiTwitterLine, RiGithubFill, RiLinkedinBoxLine } from 'react-icons/ri'
import { IconType } from 'react-icons'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'
import { IconButton, Stack, useColorModeValue } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import socials from '../content/social'

interface SocialIcon {
	[k: string]: IconType
}

const socialIcons: SocialIcon = {
	twitter: RiTwitterLine,
	github: RiGithubFill,
	linkedin: RiLinkedinBoxLine,
	email: MdEmail,
	polywork: () => <Icon icon='simple-icons:polywork' />,
}

const MotionIcon = motion(IconButton)

export default function Social(): ReactElement {
	const color = useColorModeValue('teal.600', 'teal.200')
	return (
		<Stack direction='row' spacing={'1em'}>
			{Object.keys(socials)
				.map((social) => ({ social, Icon: socialIcons[social] }))
				.map(({ social, Icon }, key) => (
					// @ts-ignore
					<Link href={socials[social]} key={key}>
						<MotionIcon
							whileHover={{ scale: 1.2, opacity: 1.2 }}
							aria-label={social}
							variant='link'
							icon={<Icon color={color} />}
							fontSize={{ base: '2em', lg: '2em' }}
							color={color}
						/>
					</Link>
				))}
		</Stack>
	)
}
