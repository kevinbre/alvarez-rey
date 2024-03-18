import {useEffect, useState} from "react";

export const useScroll = ({scrollSize}: {scrollSize: number}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        window.scrollY >= scrollSize ? setIsVisible(true) : setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return {isVisible};
};
