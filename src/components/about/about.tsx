import {Variants, motion} from "framer-motion";

export function About() {
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
        <section className="h-screen max-w-screen">
            <div className="container flex flex-col items-center justify-center h-full gap-6 py-10 text-white">
                <motion.h2
                    className="text-2xl text-start w-full after:w-20 after:h-[2px] after:bg-white flex items-center gap-5"
                    initial="offscreen"
                    transition={{duration: 0.5}}
                    variants={titleVariant}
                    viewport={{once: true, amount: 0.3}}
                    whileInView="onscreen"
                >
                    ¿Quiénes somos?
                </motion.h2>
                <p className="text-lg md:text-3xl max-w-[1024px] text-center">
                    Alvarez Rey es un estudio jurídico de prestigio, especializado en ofrecer soluciones legales
                    integrales tanto a empresas como a particulares. Con un equipo altamente calificado y una sólida
                    experiencia en una variedad de áreas legales, nos comprometemos a brindar asesoramiento
                    personalizado y eficiente para satisfacer las necesidades de nuestros clientes en todo momento.
                </p>
            </div>
        </section>
    );
}
