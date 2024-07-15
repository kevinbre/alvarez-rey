import {MutableRefObject} from "react";

import {Title} from "../ui/title";

interface Props {
    aboutRef: MutableRefObject<null>;
}

export function About({aboutRef}: Props) {
    return (
        <section ref={aboutRef} className="h-screen max-w-screen">
            <div className="container flex flex-col items-center justify-center h-full gap-6 py-10">
                <Title title="¿Quienes somos?" />
                <p className="text-lg md:text-3xl max-w-[1024px] text-center">
                    Alvarez&Rey es un estudio jurídico de prestigio, especializado en ofrecer soluciones legales
                    integrales tanto a empresas como a particulares. Con un equipo altamente calificado y una sólida
                    experiencia de más de 25 años en el ejercicio de la profesión. Nos comprometemos a brindar
                    asesoramiento personalizado y eficiente para satisfacer las necesidades de nuestros clientes en todo
                    momento.
                </p>
            </div>
        </section>
    );
}
