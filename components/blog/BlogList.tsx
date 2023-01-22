import React, { ReactElement, useMemo } from 'react'
import content, { Post } from 'content/posts'
import PostHeader from './PostHeader'
import { featured } from 'content/tags'

interface Props {
	selectedTags: string[]
	mediumTags: string[]
	mediumArticles: {
		author: string
		categories: string[]
		content: string
		description: string
		link: string
		pubDate: string
		thumbnail: string
		title: string
	}[]
}
export default function BlogList({ selectedTags, mediumArticles }: Props): ReactElement {
	const mediumPosts: Post[] = useMemo(
		() =>
			mediumArticles.map((article) => ({
				id: article.link,
				title: article.title,
				date: article.pubDate,
				isFeatured: true,
				description: '',
				tags: [featured],
				image: article.thumbnail,
				mdFile: 'medium',
				published: true,
			})),
		[mediumArticles]
	)
	const posts = useMemo(() => {
		const allPosts = [...content.posts, ...mediumPosts]
		return [...content.posts, ...mediumPosts]
			.filter(
				(p) =>
					p.published &&
					(selectedTags.length === 0 || selectedTags.some((id) => p.tags.some((tag) => tag.id === id)))
			)
			.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
	}, [content.posts, selectedTags, mediumPosts])
	return (
		<>
			{posts.map((post) => (
				<PostHeader linkButton minHeight={'80vh'} post={post} key={post.id} />
			))}
		</>
	)
}
