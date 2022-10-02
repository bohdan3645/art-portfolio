import { FC } from 'react';

interface IProps {
    children: JSX.Element[]
}

const MasonryLayout: FC<IProps> = (props) => {
    return (
        <div className='masonry__container' >
            {props.children}
        </div>
    );
};

export default MasonryLayout;