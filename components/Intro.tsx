import React, { ReactElement } from 'react'
import { Flex, Box, Heading, Icon, Text, useColorModeValue, Wrap, WrapItem, useBreakpointValue } from '@chakra-ui/react'
import { IntersectionObserver } from '../contexts/IntersectionObserver'
import About from './About'
import ScaleBox from '../components/ScaleBox'
import content from '../content/intro'
import { MdWork, MdLocationOn } from 'react-icons/md'
import Social from './Social'
// import { Image } from 'components/Image'
import Image from 'next/image'
import styled from '@emotion/styled'

interface Props {
	md: string
}
export default function Intro({ md }: Props): ReactElement {
	const color = useColorModeValue('teal.600', 'teal.200')
	const size = useBreakpointValue({ base: 150, md: 150, lg: 300, default: 150 })

	return (
		<IntersectionObserver boxProps={{ flexGrow: 1 }}>
			<ScaleBox delayOrder={0}>
				<Flex
					direction={['column-reverse', 'row']}
					h='calc(100vh - 100px)'
					justify='space-around'
					align='center'
					p='4'
				>
					<Box>
						<Text color={color} align='left' fontSize='lg'>
							Hi! My name is
						</Text>
						<br />
						<Heading as='a' size={'2xl'} letterSpacing={{ base: 'normal', md: '0.2em' }}>
							{content.name.toLocaleUpperCase()}
						</Heading>
						<Wrap
							direction={['column', 'row']}
							spacing={{ sm: '0.5em', md: '2em' }}
							pt={{ base: '2em' }}
							pb={{ base: '2em' }}
						>
							{content.titles.map((title, key) => (
								<WrapItem key={key}>
									<Flex direction='row' justify='space-between' align='center'>
										<Icon as={MdWork} color={color} boxSize={8} />
										<Text fontSize='xl' textDecoration='teal double underline'>
											{title}
										</Text>
									</Flex>
								</WrapItem>
							))}
							<WrapItem>
								<Icon as={MdLocationOn} color={color} boxSize={8} />
								<Text fontSize='xl' textDecoration='teal double underline'>
									{content.location}
								</Text>
							</WrapItem>
						</Wrap>
						<Social />
						<About md={md} />
					</Box>
					<StyledImage
						src='/images/cartoon-me.jpg'
						priority={true}
						width={size ?? 300}
						height={size ?? 300}
						alt='Saransh Image'
					/>
				</Flex>
			</ScaleBox>
		</IntersectionObserver>
	)
}
const StyledImage = styled(Image)`
	border-radius: 100px;
`
