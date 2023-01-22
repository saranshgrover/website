import React, { ReactElement } from 'react'
import BlogList from 'components/blog/BlogList'
import TagSelector from 'components/TagSelector'
import { useRouter } from 'next/router'
import * as contentTags from 'content/tags'
import type { Tag as TagType } from 'content/tags'
import { GetStaticProps } from 'next'

interface Props {
	articles: {
		author: string
		categories: string[]
		content: string
		description: string
		link: string
		pubDate: string
		thumbnail: string
		title: string
	}[]
	tags: string[]
}

export default function index({ articles, tags: mediumTags }: Props): ReactElement {
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
			<BlogList selectedTags={selectedTags} mediumTags={mediumTags} mediumArticles={articles} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sgrover3')
	const data = await response.json()
	const tags: {
		[key: string]: boolean
	} = {}
	for (const item of data.items) {
		for (const category of item.categories) {
			if (!tags[category]) tags[category] = true
		}
	}
	return {
		props: {
			articles: data.items,
			tags: Object.keys(tags),
		},
	}
}
