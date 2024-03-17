import {Button} from "../ui/button";

export function Hero() {
    return (
        <section className="relative h-screen">
            <div
                className="absolute w-full h-full bg-black"
                style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0 85%)"}}
            >
                <video autoPlay loop muted className="object-cover w-full h-full opacity-70" src="/hero1.mp4" />
            </div>
            <div className="absolute w-full h-full">
                <div className="container flex flex-col items-start mt-[25dvh] w-full h-full gap-1 text-white">
                    <span className="text-4xl font-extrabold">LOGOTIPO</span>
                    <h1>ESTUDIO JURÍDICO</h1>
                    <Button size={"sm"} variant="default">
                        Contacto
                    </Button>
                </div>
            </div>
        </section>
    );
}
