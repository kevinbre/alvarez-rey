import {Variants, motion} from "framer-motion";

import {ProfessionalBox} from "../ui/professional-box";

export function Professionals() {
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
        <section className="container flex flex-col items-center justify-center h-screen gap-6 py-10 text-white">
            <motion.h2
                className="text-2xl w-full text-start after:w-20 after:h-[2px] after:bg-white flex items-center gap-5"
                initial="offscreen"
                transition={{duration: 0.5}}
                variants={titleVariant}
                viewport={{once: true, amount: 0.3}}
                whileInView="onscreen"
            >
                Profesionales
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <ProfessionalBox avatar="/avatar.jpg" name="Martu Rey" />
                <ProfessionalBox avatar="/avatar.jpg" name="Kevincho Brede" />
            </div>
        </section>
    );
}
