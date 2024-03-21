import {MutableRefObject} from "react";

import {BentoBox} from "../ui/bento-box";
import {Title} from "../ui/title";

interface Props {
    workRef: MutableRefObject<null>;
}

export function Work({workRef}: Props) {
    return (
        <section ref={workRef} className="bg-no-repeat bg-cover max-w-screen">
            <div className="container flex flex-col justify-center min-h-screen gap-6 py-10 text-center   bg-neutral-950">
                <Title title="¿Qué hacemos?" />
                <div className="grid grid-cols-2 gap-4 grid-rows-12 md:grid-cols-12 md:gap-6 md:grid-rows-8">
                    <BentoBox
                        className="row-span-5 md:col-span-5 md:row-span-4"
                        image="/familia.jpg"
                        paragraph=""
                        title="Familia"
                    />
                    <BentoBox
                        className="row-span-4 md:col-span-4 md:col-start-1 md:row-start-5"
                        image="/laboral.jpg"
                        paragraph=""
                        title="Laboral"
                    />
                    <BentoBox
                        className="col-start-1 row-span-4 row-start-6 md:col-span-4 md:col-start-6 md:row-start-1"
                        image="/prejuicios.jpg"
                        paragraph=""
                        title="Daños y prejuicios"
                    />
                    <BentoBox
                        className="col-start-2 row-span-4 row-start-5 md:col-span-3 md:col-start-10 md:row-start-1"
                        image="/genero.jpg"
                        paragraph=""
                        title="Violencia de Género"
                    />
                    <BentoBox
                        className="col-start-2 row-span-4 row-start-9 md:col-span-4 md:col-start-5 md:row-start-5"
                        image="/jubilaciones.jpeg"
                        paragraph=""
                        title="Sucesiones"
                    />
                    <BentoBox
                        className="row-span-3 row-start-10 md:col-span-4 md:col-start-9 md:row-span-4 md:row-start-5"
                        image="/jubilaciones.jpeg"
                        paragraph=""
                        title="Derecho del consumidor"
                    />
                </div>
            </div>
        </section>
    );
}
