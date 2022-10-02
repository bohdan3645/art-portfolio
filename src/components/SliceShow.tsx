import React, { FC, useState, useEffect } from 'react';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import RoundButton from './RoundButton';

type SlidePosition = 'left' | 'right' | 'center';

interface Image {
	alt: string;
	url: string;
	width: number;
	height: number;
}

interface IProps {
	images: Image[];
	startAt: number;
}

const slide = (artwork: Image, position: SlidePosition) => {
	return (
		<div
			className='slide'
			style={{ width: '100%' }}
			data-position={position}
		>
			<img
				src={artwork.url}
				alt={artwork.alt}
			/>
		</div>
	);
};

const SliceShow: FC<IProps> = (props) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [viewportWidth, setViewportWidth] = useState(0);

	useEffect(() => {
		setCurrentSlide(props.startAt);
	}, [props.startAt]);

	useEffect(() => {
		const img = props.images[currentSlide];
		const width = (100 * img.width) / img.height;
		setViewportWidth(width);
	}, [currentSlide]);

	const handleNextSlide = () => {
		setCurrentSlide((prev) => prev + 1);
	};

	const handlePrevSlide = () => {
		setCurrentSlide((prev) => prev - 1);
	};

	return (
		<div className='slideshow'>
			<div
				className='slideshow__viewport'
				style={{ width: `${viewportWidth}vh` }}
			>
				{props.images.map((artwork, i) => {
					if (i < currentSlide) {
						return slide(artwork, 'left');
					} else if (i === currentSlide) {
						return slide(artwork, 'center');
					} else if (i > currentSlide) {
						return slide(artwork, 'right');
					}
				})}
			</div>
			<div className='slideshow__navigation'>
				<RoundButton
					onClick={handlePrevSlide}
					disabled={currentSlide === 0}
				>
					<BsFillArrowLeftCircleFill />
				</RoundButton>
				<RoundButton
					onClick={handleNextSlide}
					disabled={currentSlide === props.images.length - 1}
				>
					<BsFillArrowRightCircleFill />
				</RoundButton>
			</div>
		</div>
	);
};

export default SliceShow;
