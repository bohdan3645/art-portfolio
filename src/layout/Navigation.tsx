import { FC, useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MenuButton from '../components/MenuButton';
import { pages } from '../assets/content/content';
import FullScreenNav from '../components/FullScreenNav';
import { useLocation } from 'react-router-dom';

const Navigation: FC = () => {
    const { pathname } = useLocation();

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('All');

    useEffect(() => {
        // remove slash sign from pathname if length > 1
        const newPathname = (pathname.length <= 1) ? '/' : pathname.split('').slice(1).join(''); 

        const page = pages.filter(page => {
            return page.link === newPathname;
        })
        setCurrentPage(page[0].name);
    }, [pathname, pages])

    const openMenu = () => {
        setMenuIsOpen(true);
    };

    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    return (
        <nav className='navigation__container'>
            <NavBar pages={pages}/>
            <MenuButton openMenu={openMenu} currentPage={currentPage}/>
            <FullScreenNav pages={pages} isOpen={menuIsOpen} closeMenu={closeMenu} />
        </nav>
    );
};

export default Navigation;