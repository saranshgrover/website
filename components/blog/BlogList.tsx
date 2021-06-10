import React, { ReactElement, useMemo } from 'react'
import content, { Post } from 'content/posts'
import PostHeader from './PostHeader'

export default function BlogList(): ReactElement {
	const posts = useMemo(
		() => content.posts.filter((p) => p.published).sort((a, b) => Date.parse(a.date) - Date.parse(b.date)),
		[content.posts]
	)
	return (
		<>
			{posts.map((post) => (
				<PostHeader linkButton minHeight={'80vh'} post={post} key={post.id} />
			))}
		</>
	)
}
