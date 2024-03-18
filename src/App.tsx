import {useRef} from "react";

import {Hero} from "./components/hero/hero";
import {Footer} from "./components/layout/footer/footer";
import {Navbar} from "./components/layout/navbar/navbar";
import {WspButton} from "./components/ui/wsp-button";

function App() {
    const heroRef = useRef(null);
    const footerRef = useRef(null);

    return (
        <div className="font-monserrat bg-neutral-950">
            <Hero heroRef={heroRef} />
            <Navbar footerRef={footerRef} heroRef={heroRef} />
            <Footer footerRef={footerRef} />
            <WspButton />
        </div>
    );
}

export default App;
