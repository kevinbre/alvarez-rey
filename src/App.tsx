import {useRef} from "react";

import {Hero} from "./components/hero/hero";
import {Footer} from "./components/layout/footer/footer";
import {Navbar} from "./components/layout/navbar/navbar";
import {WspButton} from "./components/ui/wsp-button";
import {About} from "./components/about/about";
import {Work} from "./components/work/work";

function App() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const professionalsRef = useRef(null);
    const footerRef = useRef(null);

    const menuLinks = [
        {
            id: 0,
            name: "Inicio",
            ref: heroRef,
        },
        {
            id: 1,
            name: "¿Quiénes somos?",
            ref: aboutRef,
        },
        {
            id: 2,
            name: "¿Qué hacemos?",
            ref: workRef,
        },
        {
            id: 3,
            name: "Profesionales",
            ref: professionalsRef,
        },
        {
            id: 4,
            name: "Contacto",
            ref: footerRef,
        },
    ];

    return (
        <main className="text-white font-monserrat bg-neutral-950">
            <Hero heroRef={heroRef} />
            <Navbar menuLinks={menuLinks} />
            <About aboutRef={aboutRef} />
            <Work workRef={workRef} />
            <Professionals professionalsRef={professionalsRef} />
            <WspButton />
            <Footer footerRef={footerRef} />
            <WspButton />
        </div>
    );
}

export default App;
