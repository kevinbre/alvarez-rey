import {MutableRefObject} from "react";

import {BentoBox} from "../ui/bento-box";
import {Title} from "../ui/title";

interface Props {
    workRef: MutableRefObject<null>;
}

export function Work({workRef}: Props) {
    return (
        <section ref={workRef} className="bg-no-repeat bg-cover max-w-screen bg-foreground text-foreground">
            <div className="container flex flex-col justify-center min-h-screen gap-6 py-10 text-center">
                <Title className="text-primary-foreground after:bg-primary-foreground" title="¿Que hacemos?" />
                <div className="grid grid-cols-2 gap-4 grid-rows-12 md:grid-cols-12 md:gap-6 md:grid-rows-8">
                    <BentoBox
                        className="row-span-5 md:col-span-5 md:row-span-4"
                        image="/works/familia.jpg"
                        paragraph="Somos un equipo de profesionales especializados en la problemática familiar, con abordaje interdisciplinario para lograr la solución de los conflictos en resguardo de los lazos familiares, las niñeces y el patrimonio. (Divorcio, alimentos, responsabilidad paternal. compensación económica, filiación y disolución de sociedad conyugal)"
                        title="Familia"
                    />
                    <BentoBox
                        className="row-span-4 md:col-span-4 md:col-start-1 md:row-start-5"
                        image="/works/laboral.jpg"
                        paragraph="Contamos con un amplio equipo, capacitado para abordar las problematicas emergentes de las relaciones laborales, como despidos, enfermedades y accidentes laborales. Nos enfocamos tanto en la prevención de los conflictos como en la resolución de los mismos."
                        title="Laboral"
                    />
                    <BentoBox
                        className="col-start-1 row-span-4 row-start-6 md:col-span-4 md:col-start-6 md:row-start-1"
                        image="/works/prejuicios.jpg"
                        paragraph="Brindamos asesoramiento y patrocinio sobre daños contractuales y extracontractuales. (Alquileres, accidentes, incumplimientos contracuales, etc.)"
                        title="Daños y prejuicios"
                    />
                    <BentoBox
                        className="col-start-2 row-span-4 row-start-5 md:col-span-3 md:col-start-10 md:row-start-1"
                        image="/works/genero.jpg"
                        paragraph="Somos un equipo que borda de manera interdisciplinaria el asesoramiento y acompañamiento de las victimado, con formación y perspectiva de género."
                        title="Violencia de Género"
                    />
                    <BentoBox
                        className="col-start-2 row-span-4 row-start-9 md:col-span-4 md:col-start-5 md:row-start-5"
                        image="/works/defensa-del-consumidor.png"
                        paragraph="Asesoramos en los conflictos que se presentan en las relaciones de consumo. (Conflictos con tarjetas de crédito, prepagas, garantías, servicios públicos, telefonía, etc.)"
                        title="Derecho del consumidor"
                    />
                    <BentoBox
                        className="row-span-3 row-start-10 md:col-span-4 md:col-start-9 md:row-span-4 md:row-start-5"
                        image="/works/derecho-sucesorio.webp"
                        paragraph="Asesoramos en la planificación sucesoría, declaratorias de herederos y procesos sucesorios."
                        title="Sucesiones"
                    />
                </div>
            </div>
        </section>
    );
}
