import {useRef} from "react";

import {Hero} from "./components/hero/hero";
import {Footer} from "./components/layout/footer/footer";
import {Navbar} from "./components/layout/navbar/navbar";

function App() {
    const heroRef = useRef(null);
    const footerRef = useRef(null);

    return (
        <main className="font-monserrat bg-neutral-950">
            <Hero heroRef={heroRef} />
            <Navbar footerRef={footerRef} heroRef={heroRef} />
            <Footer footerRef={footerRef} />
        </main>
    );
}

export default App;
