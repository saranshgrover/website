import { GrStakeholder } from "react-icons/gr";
import { GiOfficeChair } from "react-icons/gi";
import { MdLoop } from "react-icons/md";
import {AiOutlineCalendar} from "react-icons/ai";
import {VscTools} from 'react-icons/vsc'
export function createUxrFeaturedInfo(client: string,when: string, role: string, process: string, tools: string): FeaturedInfo[] {
	return [{
		title: 'Client',
		content: client,
		icon: GrStakeholder
	},
	{
		title: 'When',
		content: when,
		icon: AiOutlineCalendar
	},
	{
		title: 'Role',
		content: role,
		icon: GiOfficeChair
	},
	{
		title: 'Process',
		content: process,
		icon: MdLoop
	},
	{
		title: 'Tools',
		content: tools,
		icon: VscTools
	},
];
}