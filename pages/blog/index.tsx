import React, { ReactElement } from 'react'
import BlogList from 'components/blog/BlogList'
import TagSelector from 'components/TagSelector'
import { useRouter } from 'next/router'
import * as contentTags from 'content/tags'
import type { Tag as TagType } from 'content/tags'

export default function index(): ReactElement {
	const router = useRouter()
	const tags = router.query.tags as string | undefined
	const allTags = React.useMemo(() => {
		if (tags) {
			let tagsArray = tags.split(',').map((t) => t.trim())
			// @ts-ignore
			const allTags: TagType[] = tagsArray.map((t) => contentTags[t]).filter(Boolean)
			return allTags.length > 0 ? [...allTags] : 'featured'
		} else return 'featured'
	}, [tags])
	React.useEffect(() => {
		setTags(allTags === 'featured' ? ['featured', 'coding', 'life'] : allTags.map((t) => t.id))
	}, [allTags])
	const [selectedTags, setTags] = React.useState(
		allTags === 'featured' ? ['featured', 'coding', 'life'] : [allTags[0].id]
	)
	return (
		<>
			<TagSelector all={allTags} tags={selectedTags} setTags={setTags} />
			<BlogList selectedTags={selectedTags} />
		</>
	)
}
