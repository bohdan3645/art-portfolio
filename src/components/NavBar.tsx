import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Page {
    name: string
    link: string
}

interface IProps {
    pages: Page[];
}

const linkStyle = ({ isActive }: any) => {
    return isActive ? 'nav__link nav__link__active' : 'nav__link';
}

const NavBar: FC<IProps> = (props) => {
    
    return (
        <ul className='nav__container'>
            {props.pages.map((page, i) => {
                return (
                    <li key={page.name + i}>
                        <NavLink  
                            to={page.link} 
                            className={linkStyle}
                        >
                            {page.name}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    );
};

export default NavBar;