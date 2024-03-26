import {useRef} from "react";

import {Hero} from "./components/hero/hero";
import {Footer} from "./components/layout/footer/footer";
import {Navbar} from "./components/layout/navbar/navbar";
import {WspButton} from "./components/ui/wsp-button";
import {About} from "./components/about/about";
import {Work} from "./components/work/work";
import {Professionals} from "./components/professionals/professionals";

function App() {
    const sectionRef = {
        heroRef: useRef(null),
        aboutRef: useRef(null),
        workRef: useRef(null),
        professionalsRef: useRef(null),
        footerRef: useRef(null),
    };

    return (
        <main className="text-white font-monserrat bg-neutral-950">
            <Hero heroRef={sectionRef.heroRef} />
            <Navbar sectionRef={sectionRef} />
            <About aboutRef={sectionRef.aboutRef} />
            <Work workRef={sectionRef.workRef} />
            <Professionals professionalsRef={sectionRef.professionalsRef} />
            <Footer sectionRef={sectionRef} />
            <WspButton />
        </main>
    );
}

export default App;
