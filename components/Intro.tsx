import React, { ReactElement } from 'react'
import { Flex, Heading, Icon, Text, useColorModeValue, useBreakpointValue, Stack } from '@chakra-ui/react'
import { IntersectionObserver } from '../contexts/IntersectionObserver'
import About from './About'
import ScaleBox from '../components/ScaleBox'
import content from '../content/intro'
import { MdWork, MdLocationOn } from 'react-icons/md'
import Social from './Social'
// import { Image } from 'components/Image'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import profilePic from '../public/images/cartoon-me.jpg'

interface Props {
	md: string
}
export default function Intro({ md }: Props): ReactElement {
	const color = useColorModeValue('teal.600', 'teal.200')
	const size = useBreakpointValue({ base: 300, md: 300, lg: 500, default: 300 })
	const showLargeImage = useBreakpointValue({ base: false, md: false, lg: true, default: true })
	const router = useRouter()

	return (
		<IntersectionObserver boxProps={{ flexGrow: 1 }}>
			<ScaleBox delayOrder={0}>
				<Flex
					direction={['column-reverse', 'row']}
					// h='calc(100vh - 100px)'
					justify='space-around'
					align='center'
					p='4'
				>
					<Stack direction={'column'} spacing='0.5em'>
						<Heading size={'2xl'} letterSpacing={{ base: 'normal', md: '0.01em' }}>
							{content.name.toLocaleUpperCase()}
						</Heading>
						<Stack
							direction={['column']}
							spacing={{ sm: '0.5em', md: '2em' }}
							pt={{ base: '2em' }}
							pb={{ base: '2em' }}
						>
							<Stack
								direction={['column', 'row']}
								spacing={{ base: '0.5em', md: '1em' }}
								alignItems={'center'}
								// justify={'center'}
							>
								{content.titles.map((title) => (
									<Flex
										key={title}
										direction='row'
										justify={['flex-start', 'space-around']}
										align='center'
									>
										<Icon as={MdWork} color={color} boxSize={8} pr={['0.2em', '0.5em']} />
										<Text fontSize='xl' textDecoration='teal underline'>
											{title}
										</Text>
									</Flex>
								))}
								<Flex direction='row' align='center' justify='center'>
									<Icon as={MdLocationOn} color={color} boxSize={8} pr={['0.2em', '0.5em']} />
									<Text fontSize='xl' textDecoration='teal underline'>
										{content.location}
									</Text>
								</Flex>
							</Stack>
						</Stack>
						<About md={md} />
						<Social />
					</Stack>
					{showLargeImage ? (
						<figure style={{ perspective: '1500px' }}>
							<StyledImage
								src={profilePic}
								width={size ?? 300}
								height={size ?? 300}
								alt='Saransh Image'
								priority
							/>
						</figure>
					) : (
						<figure style={{ perspective: '750px' }}>
							<StyledImage
								src={profilePic}
								width={size ?? 150}
								height={size ?? 150}
								alt='Saransh Image'
								priority
							/>
						</figure>
					)}
				</Flex>
			</ScaleBox>
		</IntersectionObserver>
	)
}
const StyledImage = styled(Image)`
	border-radius: 100px;
	transform: rotateX(10deg) rotateY(-18deg) rotateZ(3deg);
	box-shadow: 2px 10px 30px hsla(0, 0%, 0%, 0.1);
	transition: 0.3s;
	&:hover {
		transform: rotate(0);
	}
`
