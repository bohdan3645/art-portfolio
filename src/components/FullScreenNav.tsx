import { FC, useEffect, useRef } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

interface Page {
    name: string
    link: string
}

interface IProps {
    pages: Page[]
    isOpen: boolean
    closeMenu: () => void
}

const FullScreenNav: FC<IProps> = (props) => {
    const modal: React.LegacyRef<HTMLDivElement> = useRef(null);

    useEffect(() => {
        if(!modal.current) return;

        if(props.isOpen) {
            modal.current.setAttribute('open', '');
        };
    }, [props.isOpen, modal]);

    const handleCloseMenu = () => {
        if(!modal.current) return;

        props.closeMenu();
        modal.current.setAttribute('closing', '');
        modal.current.addEventListener('animationend', () => {
            if(!modal.current) return;
    
            modal.current.removeAttribute('open');
            modal.current.removeAttribute('closing');
        }, { once: true });
    };

    return (
        <div ref={modal} className='full__screen__nav__container'>
            <div className='full__screen__nav__close__button' onClick={handleCloseMenu}>
                <VscChromeClose />
            </div>
            
            <ul className='full__screen__nav__links'>
                {props.pages.map((page, i) => {
                    return (
                        <li key={page.name + i} onClick={handleCloseMenu}>
                            <Link  to={page.link} className='full__screen__nav__link'>
                                {page.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default FullScreenNav;