import {RefObject, useRef} from "react";

const useMenuRedirect = () => {
    const menuRef = useRef(null);

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
        if (ref && ref.current) {
            window.scrollTo(0, ref.current.offsetTop);
        }
    };

    return {menuRef, scrollToRef};
};

export default useMenuRedirect;
