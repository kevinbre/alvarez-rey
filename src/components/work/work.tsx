import {Variants, motion} from "framer-motion";

import {BentoBox} from "../ui/bento-box";

export function Work() {
    const titleVariant: Variants = {
        offscreen: {
            x: -500,
        },
        onscreen: {
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <section className="max-w-screen bg-no-repeat bg-cover">
            <div className="container min-h-screen text-center text-white bg-neutral-950 py-10 flex flex-col gap-6">
                <motion.h2
                    className="text-2xl text-start after:w-20 after:h-[2px] after:bg-white flex items-center gap-5"
                    initial="offscreen"
                    transition={{duration: 0.5}}
                    variants={titleVariant}
                    viewport={{once: true, amount: 0.3}}
                    whileInView="onscreen"
                >
                    ¿Qué hacemos?
                </motion.h2>

                <div className="grid grid-cols-5 grid-rows-2 gap-6 max-h-[calc(100vh-200px)]">
                    <BentoBox
                        className="col-span-2 row-span-2"
                        image="/familia.jpg"
                        paragraph="El derecho de familia abarca normativas que regulan relaciones familiares, como matrimonio,
                            divorcio, custodia de hijos y pensiones alimenticias."
                        title="Familia"
                    />

                    <BentoBox
                        className="col-span-3 row-span-2 col-start-3"
                        image="/prejuicios.jpg"
                        paragraph=" El área de daños y prejuicios se refiere a las reclamaciones legales que involucran lesiones
                        personales, daños a la propiedad o pérdida financiera como resultado de la negligencia o
                        acciones indebidas de otra parte. Esto puede incluir accidentes automovilísticos, accidentes
                        laborales, negligencia médica y más."
                        title="Daños y prejuicios"
                    />

                    <BentoBox
                        className="row-span-2 row-start-3"
                        image="/laboral.jpg"
                        paragraph="El derecho laboral se centra en las relaciones entre empleadores y empleados, así como en
                        las normativas laborales que rigen los contratos de trabajo, los salarios, las condiciones
                        laborales, la seguridad en el trabajo y los conflictos laborales, entre otros aspectos
                        relacionados con el empleo."
                        title="Laboral"
                    />

                    <BentoBox
                        className="col-span-2 row-span-2 row-start-3"
                        image="/genero.jpg"
                        paragraph=" La violencia de género se refiere a cualquier acto de violencia o discriminación basado en
                        el género, que resulta en daño físico, psicológico o emocional para una persona. Esto puede
                        incluir violencia doméstica, agresión sexual, acoso en el lugar de trabajo y otras formas de
                        violencia de género."
                        title="Violencia de Género"
                    />

                    <BentoBox
                        className="col-span-2 row-span-2 col-start-4 row-start-3"
                        image="/jubilaciones.jpeg"
                        paragraph="El término intrafamiliar se refiere a los conflictos y disputas que ocurren dentro de una
                        misma familia. Esto puede incluir disputas de custodia, divorcios, abusos domésticos y otros
                        problemas que afectan las relaciones entre los miembros de la familia."
                        title="Jubilaciones"
                    />
                </div>
            </div>
        </section>
    );
}
