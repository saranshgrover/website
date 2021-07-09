import React, { ReactElement, useMemo } from 'react'
import content, { Post } from 'content/posts'
import PostHeader from './PostHeader'

interface Props {
	selectedTags: string[]
}
export default function BlogList({ selectedTags }: Props): ReactElement {
	const posts = useMemo(
		() =>
			content.posts
				.filter(
					(p) =>
						p.published &&
						(selectedTags.length === 0 || selectedTags.some((id) => p.tags.some((tag) => tag.id === id)))
				)
				.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
		[content.posts, selectedTags]
	)
	return (
		<>
			{posts.map((post) => (
				<PostHeader linkButton minHeight={'80vh'} post={post} key={post.id} />
			))}
		</>
	)
}
