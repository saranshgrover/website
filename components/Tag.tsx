import { Tag as ChakraTag, TagLabel, TagLeftIcon, TagProps } from '@chakra-ui/react'
import { Tag as TagType } from 'content/tags'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'

interface Props extends TagProps {
	tag: TagType
}
const MotionTag = motion(ChakraTag)

export default function Tag({ tag, ...props }: Props): ReactElement {
	return (
		// @ts-ignore
		<MotionTag
			whileHover={{ scale: 1.2 }}
			variant='subtle'
			colorScheme='cyan'
			{...props}
			aria-label={tag.name}
			zIndex={2}
		>
			<TagLeftIcon boxSize='20px' as={tag.icon} />
			<TagLabel>{tag.name}</TagLabel>
		</MotionTag>
	)
}
