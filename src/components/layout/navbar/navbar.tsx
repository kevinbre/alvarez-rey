import {Pivot} from "hamburger-react";
import {MutableRefObject, useEffect, useState} from "react";

import useBreakpoint from "@/hooks/useBreakPoint";
import useMenuRedirect from "@/hooks/useMenuRedirect";
import {useScroll} from "@/hooks/useScroll";

interface Props {
    heroRef: MutableRefObject<null>;
    footerRef: MutableRefObject<null>;
}

export function Navbar({heroRef, footerRef}: Props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {isVisible} = useScroll({scrollSize: 80});
    const breakpoint = useBreakpoint();
    //TODO: Look if the implementation of the burguer menu is the best solution

    const toggleMenu = () => {
        setIsMobileMenuOpen((prevMenuOpen) => !prevMenuOpen);
        document.body.style.overflowY = isMobileMenuOpen ? "auto" : "hidden";
    };
    const {menuRef, scrollToRef} = useMenuRedirect();

    const mobileResolution = breakpoint === "sm" || breakpoint === "xs";

    const navStyle = mobileResolution ? "text-lg cursor-pointer hover:underline" : "cursor-pointer hover:underline";

    useEffect(() => {
        !mobileResolution && setIsMobileMenuOpen(false);
    }, [mobileResolution]);

    return (
        <div
            className="fixed top-0 z-20 w-full transition-all duration-500"
            style={{
                background:
                    isVisible || isMobileMenuOpen
                        ? "#0a0a0a"
                        : "linear-gradient(180deg, rgba(0,0,0, .4) 10%, transparent)",
                boxShadow: isVisible || isMobileMenuOpen ? "0 4px 6px rgba(0,0,0,.1)" : "",
            }}
        >
            <nav
                ref={menuRef}
                className="container flex items-center justify-between h-16 text-white transition-all duration-500 text"
            >
                <span className="text-xl font-extrabold cursor-pointer">LOGO</span>

                {mobileResolution ? (
                    <Pivot toggled={isMobileMenuOpen} onToggle={toggleMenu} />
                ) : (
                    <ul className="flex items-center h-full gap-12">
                        <li className={navStyle}>Inicio</li>
                        <li className={navStyle}>¿Quiénes somos?</li>
                        <li className={navStyle}>¿Qué hacemos?</li>
                        <li className={navStyle}>Profesionales</li>
                        <li className={navStyle}>Contacto</li>
                    </ul>
                )}
            </nav>

            {mobileResolution && (
                <ul
                    className={` ${
                        isMobileMenuOpen ? "h-screen opacity-1 py-20" : "h-0 opacity-0"
                    } overflow-hidden transition-all flex flex-col w-screen left-0 duration-500 items-center bg-neutral-950 text-white absolute`}
                >
                    <li
                        className={navStyle}
                        onClick={() => {
                            scrollToRef(heroRef);
                            toggleMenu();
                        }}
                    >
                        Inicio
                    </li>
                    <li className={navStyle}>¿Quiénes somos?</li>
                    <li className={navStyle}>¿Qué hacemos?</li>
                    <li className={navStyle}>Profesionales</li>
                    <li
                        className={navStyle}
                        onClick={() => {
                            toggleMenu();
                            scrollToRef(footerRef);
                        }}
                    >
                        Contacto
                    </li>
                </ul>
            )}
        </div>
    );
}
