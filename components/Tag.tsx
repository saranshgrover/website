import { Tag as ChakraTag, TagLabel, TagLeftIcon, TagProps } from '@chakra-ui/react'
import { Tag as TagType } from 'content/tags'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'

interface Props extends TagProps {
	tag: TagType
	motion?: boolean
}
const MotionTag = motion(ChakraTag)

export default function Tag({ tag, motion = true, ...props }: Props): ReactElement {
	return (
		<MotionTag
			whileHover={{ scale: motion ? 1.2 : 1 }}
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
