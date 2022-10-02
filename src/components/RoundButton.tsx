import { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode
    onClick: () => void
    disabled?: boolean
}

const RoundButton: FC<IProps> = (props) => {
    return (
        <button type='button' onClick={props.onClick} className='round__button' disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default RoundButton;