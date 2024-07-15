import {RefObject, useRef} from "react";

const useMenuRedirect = () => {
    const menuRef = useRef(null);

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
        if (ref && ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return {menuRef, scrollToRef};
};

export default useMenuRedirect;
