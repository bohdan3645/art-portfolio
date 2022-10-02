import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import React, { FC } from 'react';

const ArtworksSwiper: FC = () => {
	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={50}
			slidesPerView={1}
		>
			<SwiperSlide>Slide 1</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			...
		</Swiper>
	);
};

export default ArtworksSwiper;
