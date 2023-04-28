import { Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { IoIosSchool } from 'react-icons/io'
import { FaTshirt } from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { BsCodeSlash } from 'react-icons/bs'
import { GiCube } from 'react-icons/gi'
import 'react-vertical-timeline-component/style.min.css'

type Props = {}

const timelines = [
	{
		title: 'M.S. in Huamn-Computer Interaction from University of Maryland',
		subheadline: '2021 - 2023',
		description:
			'Over my two years as a Masters student, I got to grow my skills in Interaction Design and UX Research, working with organizations such as the Association of Haitian Professionals, and the Computational Journalism Lab at UMD.',
		icon: <IoIosSchool />,
		img: '/images/thesis-umd.png	',
	},
	{
		title: 'Product Design Intern at Soliyarn',
		subheadline: 'May - August 2022',
		description:
			'In Summer 2022, I moved to the amazing city of Boston and worked at Soliyarn, a smart wearables startup where I led the project to design a web portal for the management and visualization of their smart garments like Impact Vests.',
		icon: <FaTshirt />,
		img: '/images/projects/soliyarn-top.jpg',
	},
	{
		title: 'Director and Vice Chair at the World Cube Association',
		subheadline: 'August 2020 - August 2022',
		description:
			'With motivation to contribute further to my long-time hobby of Speedcubing, I ran, and got elected, as a Board member in the midst of COVID - and shaped our recovery back from having zero competitions to surpassing our projections! I also spearheaded our partnership with Spin Master and shaped priorities and directions for Software in the organization.',
		img: '/images/cube.png',
		icon: <GiCube />,
	},
	{
		title: 'Front-End Engineer at Vyer',
		subheadline: '',
		description:
			'I was part of a small team of engineers at Vyer creating a digital twin for modern property management. I worked with designers to implement different pages, improve the design system, and reduced boilerplate by creating an open-sourced state management library',
		icon: <BsCodeSlash />,
		img: '/images/vyer.webp',
	},
	{
		title: 'B.S. in Computer Science at Stony Brook University',
		subheadline: 'May 2021',
		description: '',
		icon: <IoIosSchool />,
		img: '/images/grad-photo.png',
	},
]

export default function Timeline({}: Props) {
	const bgColor = useColorModeValue('white', '#1A202C')
	const fwColor = useColorModeValue('#1a202c', 'white')
	return (
		<Box mt='0' mx='2em'>
			<VerticalTimeline layout='2-columns' lineColor={fwColor}>
				{timelines.map((timeline) => (
					<VerticalTimelineElement
						icon={timeline.icon}
						contentStyle={{
							background: bgColor,
						}}
						iconStyle={{
							backgroundColor: bgColor,
						}}
					>
						<Heading mb='0.5em' as='h4' size='sm' className='vertical-timeline-element-subtitle'>
							{timeline.subheadline}
						</Heading>
						<Heading mb='0.5em' as='h1' size='md' className='vertical-timeline-element-subtitle'>
							{timeline.title}
						</Heading>

						<Box my='0.5em'>{timeline.description}</Box>
						{timeline.img && (
							<Box display={'block'}>
								<Image src={timeline.img} layout='responsive' />
							</Box>
						)}
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</Box>
	)
}
