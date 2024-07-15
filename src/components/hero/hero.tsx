import {MutableRefObject} from "react";

import {Button} from "../ui/button";
import {Icons} from "../ui/icons";

import useMenuRedirect from "@/hooks/useMenuRedirect";

interface Props {
    heroRef: MutableRefObject<null>;
    contactRef: MutableRefObject<null>;
}

export function Hero({heroRef, contactRef}: Props) {
    const {scrollToRef} = useMenuRedirect();

    return (
        <section ref={heroRef} className="relative h-screen">
            <div
                className="absolute w-full h-full bg-black"
                style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0 85%)"}}
            >
                <video autoPlay loop muted className="object-cover w-full h-full opacity-70" src="/hero.mp4" />
            </div>
            <div className="absolute w-full">
                <div className="container flex flex-col items-start mt-[25dvh] w-full h-full gap-1">
                    <span className="text-4xl font-extrabold">
                        <Icons.logo className="w-[300px] h-auto" />
                    </span>
                    <h1 className="text-primary font-marierose">ESTUDIO JURÍDICO</h1>

                    <Button
                        className="bg-background text-primary font-medium hover:text-primary-foreground"
                        size={"sm"}
                        variant="default"
                        onClick={() => scrollToRef(contactRef)}
                    >
                        Contacto
                    </Button>
                </div>
            </div>
        </section>
    );
}
