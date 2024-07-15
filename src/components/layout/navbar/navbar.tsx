import {Pivot} from "hamburger-react";
import {useEffect, useState} from "react";

import useBreakpoint from "@/hooks/useBreakPoint";
import useMenuRedirect from "@/hooks/useMenuRedirect";
import {useScroll} from "@/hooks/useScroll";
import {MenuRef} from "@/types/menu/types";
import {menuLinks} from "@/mock/nav-links";
import {Icons} from "@/components/ui/icons";
import {Button} from "@/components/ui/button";

interface Props {
    sectionRef: MenuRef;
}

export function Navbar({sectionRef}: Props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const {isVisible} = useScroll({scrollSize: 80});
    const breakpoint = useBreakpoint();
    const mobileResolution = breakpoint === "sm" || breakpoint === "xs";
    const {menuRef, scrollToRef} = useMenuRedirect();

    const toggleMenu = () => {
        setIsMobileMenuOpen((prevMenuOpen) => !prevMenuOpen);
        document.body.style.overflowY = isMobileMenuOpen ? "auto" : "hidden";
    };

    const navStyle = mobileResolution
        ? "text-lg cursor-pointer hover:underline"
        : "cursor-pointer relative flex flex-col max-w-fit grow-transition";

    useEffect(() => {
        !mobileResolution && setIsMobileMenuOpen(false);
    }, [mobileResolution]);

    return (
        <div
            className="fixed top-0 z-20 w-full transition-all duration-500"
            style={{
                background:
                    isVisible || isMobileMenuOpen
                        ? "#2c2c35"
                        : "linear-gradient(180deg, rgba(0,0,0, .4) 10%, transparent)",
                boxShadow: isVisible || isMobileMenuOpen ? "0 4px 6px rgba(0,0,0,.1)" : "",
            }}
        >
            <nav
                ref={menuRef}
                className="container flex items-center justify-between h-16 transition-all duration-500 text"
            >
                <button onClick={() => scrollToRef(sectionRef.heroRef)}>
                    <Icons.logoLetters
                        className="w-[200px]"
                        variant={isVisible || isMobileMenuOpen ? "secondary" : "main"}
                    />
                </button>

                {mobileResolution ? (
                    <Pivot
                        color={isVisible || isMobileMenuOpen ? "#B79260" : "#D8D2C0"}
                        toggled={isMobileMenuOpen}
                        onToggle={toggleMenu}
                    />
                ) : (
                    <ul className="flex items-center h-full gap-12">
                        {menuLinks.map((menuLink) => (
                            <li
                                key={menuLink.id}
                                className={navStyle}
                                onClick={() => {
                                    scrollToRef(sectionRef[menuLink.ref]);
                                }}
                            >
                                {menuLink.name}
                            </li>
                        ))}
                    </ul>
                )}
            </nav>

            {mobileResolution && (
                <ul
                    className={` ${
                        isMobileMenuOpen ? "h-screen opacity-1 py-20" : "h-0 opacity-0"
                    } overflow-hidden transition-all flex flex-col w-screen left-0 duration-500 items-center bg-background absolute`}
                >
                    {menuLinks.map((menuLink) => (
                        <li
                            key={menuLink.id}
                            className={navStyle}
                            onClick={() => {
                                scrollToRef(sectionRef[menuLink.ref]);
                                toggleMenu();
                            }}
                        >
                            {menuLink.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
