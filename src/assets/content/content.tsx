import { BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import env from 'react-dotenv';

export const contactOptions = [
	{
		name: 'Whats-app',
		icon: <BsWhatsapp />,
		info: `(${env.PHONE_NUMBER.slice(0, 3)}) 
		${env.PHONE_NUMBER.slice(3, 6)} 
		${env.PHONE_NUMBER.slice(6)}`,
		link: `https://wa.me/${env.PHONE_NUMBER}`,
	},
	{
		name: 'Email',
		icon: <FiMail />,
		info: env.EMAIL,
		link: `mailto:${env.EMAIL}`,
	},
];

export const pages = [
	{
		name: 'All',
		link: '/',
	},
	{
		name: 'NFT',
		link: 'nft',
	},
	{
		name: 'Fan Art',
		link: 'fan-art',
	},
	{
		name: 'Simpsons',
		link: 'simpsons',
	},
	{
		name: 'Disney',
		link: 'disney',
	},
	{
		name: 'Star Wars',
		link: 'star-wars',
	},
];
