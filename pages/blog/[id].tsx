import { GetStaticProps } from 'next'
import React, { ReactElement } from 'react'
import { getMdFor } from '../../logic/markdown'
import matter from 'gray-matter'
import { getPaths } from '../../logic/staticPaths'
import * as tags from '../../content/tags'
import { Post } from '../../content/posts'
import PostComponent from '../../components/PostComponent'
import Head from '../../components/head'
interface Props {
	md: string
	post: Omit<Post, 'tags'> & { tags: string[] }
}

export default function PostContent({ md, post: postWithoutTag }: Props): ReactElement {
	const post: Post = React.useMemo(
		// @ts-ignore
		() => ({ ...postWithoutTag, tags: postWithoutTag.tags.map((t) => tags[t] as tags.Tag) }),
		[postWithoutTag]
	)
	return (
		<>
			<Head title={`${post.title} - Saransh Grover`} description={post.description} image={post.image} />
			<PostComponent md={md} post={post} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const md = getMdFor(context!.params!.id as string, 'content/posts/markdown')
	if (!md)
		return {
			props: {},
			notFound: true,
		}
	const markdown = matter(md)
	const content = markdown.content
	// @ts-ignore
	let post = markdown.data
	return {
		props: {
			md: content,
			post,
		},
	}
}

export async function getStaticPaths() {
	const paths = getPaths('content/posts')
	return {
		paths: paths,
		fallback: false,
	}
}
