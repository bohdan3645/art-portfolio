import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: FC<any> = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return props.children;
}

export default ScrollToTop;