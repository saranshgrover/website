import React, { ReactElement } from 'react'
import * as tags from 'content/tags'
import type { Tag as TagType } from 'content/tags'
import { Center, Wrap } from '@chakra-ui/react'
import Tag from './Tag'
interface Props {
	tags: string[]
	setTags: (tags: string[]) => void
	all: 'featured' | TagType[]
}

export default function TagSelector({ tags: selectedTags, setTags, all }: Props): ReactElement {
	const allTags: TagType[] = React.useMemo(
		() => (all === 'featured' ? Object.values(tags).filter((tag) => tag.featured) : all),
		[tags, all]
	)

	return (
		<Center mb='2em'>
			<Wrap>
				{allTags
					.sort((a) => (a.id === 'featured' ? -1 : a.featured ? 0 : 1))
					.map((tag) => (
						<Tag
							as='button'
							key={tag.id}
							tag={tag}
							motion={false}
							size='lg'
							colorScheme='teal'
							variant={selectedTags.includes(tag.id) ? 'solid' : 'outline'}
							onClick={() =>
								selectedTags.includes(tag.id)
									? setTags(selectedTags.filter((id) => id !== tag.id))
									: setTags(selectedTags.concat(tag.id))
							}
						/>
					))}
			</Wrap>
		</Center>
	)
}
