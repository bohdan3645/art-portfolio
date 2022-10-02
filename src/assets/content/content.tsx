import { BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import env from 'react-dotenv';

export const contactOptions = [
	{
		name: 'Whats-app',
		icon: <BsWhatsapp />,
		info: env.PHONE_NUMBER,
		link: `https://wa.me/${env.PHONE_NUMBER.split('')
			.filter((char: string) => !Number.isNaN(+char))
			.join('')
			.split(' ')
			.join('')}`,
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
