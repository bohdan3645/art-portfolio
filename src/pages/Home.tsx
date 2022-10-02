import { FC, useState } from 'react';
import MasonryLayout from '../components/MasonryLayout';
import { characters } from '../assets/content/artworks';
import LazyImage from '../components/LazyImage';
import Modal from '../components/Modal';
import SlideShow from '../components/SliceShow';
import ArtworksSwiper from '../components/ArtworksSwiper';

const Home: FC = () => {
	const [modalIsOpened, setModalIsOpened] = useState({
		open: false,
		openAt: 0,
	});

	const openModal = (imgId: number) => {
		setModalIsOpened({ open: true, openAt: imgId });
	};

	const closeModal = () => {
		setModalIsOpened({ open: false, openAt: 0 });
	};

	return (
		<main>
			<MasonryLayout>
				{characters.map((artwork, i) => {
					return (
						<LazyImage
							key={artwork.alt + i}
							alt={artwork.alt}
							url={artwork.url}
							width={artwork.width}
							height={artwork.height}
							id={i}
							openInModal={openModal}
						/>
					);
				})}
			</MasonryLayout>
			<Modal
				open={modalIsOpened.open}
				onClose={closeModal}
			>
				<ArtworksSwiper />
				{/* <SlideShow startAt={modalIsOpened.openAt} images={characters} /> */}
			</Modal>
		</main>
	);
};

export default Home;
