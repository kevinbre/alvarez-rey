import {useScroll} from "@/hooks/useScroll";

export function Navbar() {
    //TODO: Agregar mobile
    const {isVisible} = useScroll({scrollSize: 80});

    const navStyle = "cursor-pointer hover:underline";

    return (
        <nav
            className="fixed top-0 flex items-center justify-between w-full h-20 px-20 text-white transition-all duration-500"
            style={{
                background: isVisible ? "white" : "linear-gradient(180deg, rgba(0,0,0, .4) 10%, transparent)",
                color: isVisible ? "black" : "white",
                boxShadow: isVisible ? "0 4px 6px rgba(0,0,0,.1)" : "",
            }}
        >
            <span className="text-xl font-extrabold cursor-pointer">LOGO</span>
            <ul className="flex items-center h-full gap-12">
                <li className={navStyle}>Inicio</li>
                <li className={navStyle}>¿Quiénes somos?</li>
                <li className={navStyle}>¿Qué hacémos?</li>
                <li className={navStyle}>Contacto</li>
            </ul>
            <div />
        </nav>
    );
}
