import { FC } from 'react';
import { IoIosMenu } from 'react-icons/io';

interface IProps {
    openMenu: () => void
    currentPage: string
}

const MenuButton: FC<IProps> = (props) => {

    const handleMenuClick = () => {
        props.openMenu();
    }

    return (
        <div onClick={handleMenuClick} className='menu__button__container'>
            <IoIosMenu />
            <h2>{props.currentPage}</h2>
        </div>
    );
};

export default MenuButton;