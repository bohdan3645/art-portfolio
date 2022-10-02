import { FC, useState, useEffect } from 'react';

interface IProps {
    alt: string
    url: string
    width: number
    height: number
    id: number
    openInModal?: (imgId: number) => void
}

const LazyImage: FC<IProps> = (props) => {

    const [isLoaded, setIsLoaded] = useState(false);

    const aspectRatio = {
        aspectRatio: `${props.width} / ${props.height}`,
    };

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setIsLoaded(true);
        };
        img.src = props.url;
    }, []);

    if(!isLoaded) {
       return <div className='lazy__image__placeholder' style={aspectRatio}></div>
    }

    return (
        <div onClick={() => { props.openInModal && props.openInModal(props.id)}} className='lazy__image'>
            <img src={props.url} loading='lazy' alt={props.alt} />
        </div>
    );
};

export default LazyImage;