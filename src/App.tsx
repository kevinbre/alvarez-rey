import {Hero} from "./components/hero/hero";
import {Footer} from "./components/layout/footer/footer";
import {Navbar} from "./components/layout/navbar/navbar";

function App() {
    return (
        <div className="font-monserrat">
            <Hero />
            <Navbar />
            <Footer />
        </div>
    );
}

export default App;
