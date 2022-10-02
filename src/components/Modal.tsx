import { FC, useEffect, useState, ReactNode } from 'react';
import RoundButton from './RoundButton';
import { VscChromeClose } from 'react-icons/vsc';

type Modes = 'opened' | 'closing' | 'closed'

interface IProps {
    open: boolean
    onClose: () => void
    children: ReactNode
}

const Modal: FC<IProps> = (props) => {
    const [mode, setMode] = useState<Modes>('closed');
    
    useEffect(() => {
        if(props.open) {
            setMode('opened');
            document.body.style.overflow = 'hidden';
        };
    }, [props.open])
    
    const startFadeOutAnimation = () => {
            document.body.style.overflow = 'initial';
            setMode('closing');
    }

    const handleClose = () => {
        if(mode === 'closing') {
            setMode('closed');
            props.onClose();    
        }
    }

    return (
        <div className='modal' onAnimationEnd={handleClose} data-mode={mode}>
            {props.children}
            <div>
                <RoundButton onClick={startFadeOutAnimation}>
                    <VscChromeClose />
                </RoundButton>
            </div>
        </div>
    );
};

export default Modal;