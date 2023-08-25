import { useState, useEffect } from 'react';

const getScrollHeight = () => {
    const [height, setHeight] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', scrollNavigation, true);
        return () => {
            window.removeEventListener('scroll', scrollNavigation, true);
        }
    }, [])

    const scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        setHeight(top);
    };

    return height;
};

export default getScrollHeight;
