// @ts-nocheck
import * as React from 'react'
import {
	Text,
	Code,
	Divider,
	Link,
	Checkbox,
	ListItem,
	Heading,
	Image,
	OrderedList,
	UnorderedList,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from '@chakra-ui/react'
import deepmerge from 'deepmerge'
import { Components } from 'react-markdown/src/ast-to-react'

type GetCoreProps = {
	children?: React.ReactNode
	'data-sourcepos'?: any
}

function getCoreProps(props: GetCoreProps): any {
	return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {}
}

interface Defaults extends Components {
	heading?: Components['h1']
}

export const defaults: Defaults = {
	p: (props) => {
		const { children } = props
		return (
			<Text fontSize='md' mb={10}>
				{children}
			</Text>
		)
	},
	em: (props) => {
		const { children } = props
		return (
			<Text fontSize='md' as='em'>
				{children}
			</Text>
		)
	},
	blockquote: (props) => {
		const { children } = props
		return (
			<Code as='blockquote' p={2}>
				{children}
			</Code>
		)
	},
	code: (props) => {
		const { inline, children, className } = props

		if (inline) {
			return <Code p={2} children={children} />
		}

		return <Code className={className} whiteSpace='break-spaces' d='block' w='full' p={2} children={children} />
	},
	del: (props) => {
		const { children } = props
		return (
			<Text fontSize='md' as='del'>
				{children}
			</Text>
		)
	},
	hr: (props) => {
		return <Divider />
	},
	a: Link,
	img: Image,
	text: (props) => {
		const { children } = props
		return (
			<Text fontSize='md' mb={10}>
				{children}
			</Text>
		)
	},
	ul: (props) => {
		const { ordered, children, depth } = props
		const attrs = getCoreProps(props)
		let Element = UnorderedList
		let styleType = 'disc'
		if (ordered) {
			Element = OrderedList
			styleType = 'decimal'
		}
		if (depth === 1) styleType = 'circle'
		return (
			<Element fontSize='md' spacing={2} as={ordered ? 'ol' : 'ul'} styleType={styleType} pl={4} {...attrs}>
				{children}
			</Element>
		)
	},
	ol: (props) => {
		const { ordered, children, depth } = props
		const attrs = getCoreProps(props)
		let Element = UnorderedList
		let styleType = 'disc'
		if (ordered) {
			Element = OrderedList
			styleType = 'decimal'
		}
		if (depth === 1) styleType = 'circle'
		return (
			<Element spacing={2} as={ordered ? 'ol' : 'ul'} styleType={styleType} pl={4} {...attrs}>
				{children}
			</Element>
		)
	},
	li: (props) => {
		const { children, checked } = props
		let checkbox = null
		if (checked !== null && checked !== undefined) {
			checkbox = (
				<Checkbox isChecked={checked} isReadOnly>
					{children}
				</Checkbox>
			)
		}
		return (
			<ListItem {...getCoreProps(props)} listStyleType={checked !== null ? 'none' : 'inherit'}>
				{checkbox || children}
			</ListItem>
		)
	},
	heading: (props) => {
		const { level, children } = props
		const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs']
		return (
			<Heading mt={4} mb={12} as={`h${level}`} size={sizes[`${level - 1}`]} {...getCoreProps(props)}>
				{children}
			</Heading>
		)
	},
	pre: (props) => {
		const { children } = props
		return <Code {...getCoreProps(props)}>{children}</Code>
	},
	table: Table,
	thead: Thead,
	tbody: Tbody,
	tr: Tr,
	td: Td,
	th: Th,
}

function ChakraUIRenderer(theme?: Defaults, merge = true): Components {
	const elements = {
		p: defaults.p,
		em: defaults.em,
		blockquote: defaults.blockquote,
		code: defaults.code,
		del: defaults.del,
		hr: defaults.hr,
		a: defaults.a,
		img: defaults.img,
		text: defaults.text,
		ul: defaults.ul,
		ol: defaults.ol,
		li: defaults.li,
		h1: defaults.heading,
		h2: defaults.heading,
		h3: defaults.heading,
		h4: defaults.heading,
		h5: defaults.heading,
		h6: defaults.heading,
		pre: defaults.pre,
		table: defaults.table,
		thead: defaults.thead,
		tbody: defaults.tbody,
		tr: defaults.tr,
		td: defaults.td,
		th: defaults.th,
	}

	if (theme && merge) {
		return deepmerge(elements, theme)
	}

	return elements
}

export default ChakraUIRenderer
