import {useRef} from "react";

import {Hero} from "./components/hero/hero";
import {Footer} from "./components/layout/footer/footer";
import {Navbar} from "./components/layout/navbar/navbar";
import {WspButton} from "./components/ui/wsp-button";
import {About} from "./components/about/about";
import {Work} from "./components/work/work";
import {Professionals} from "./components/professionals/professionals";

function App() {
    const heroRef = useRef(null);
    const footerRef = useRef(null);

    return (
        <main className="font-monserrat bg-neutral-950">
            <Hero heroRef={heroRef} />
            <Navbar footerRef={footerRef} heroRef={heroRef} />
            <About />
            <Work />
            <Professionals />
            <WspButton />
            <Footer footerRef={footerRef} />
        </main>
    );
}

export default App;
