import {Variants, motion} from "framer-motion";

import useBreakpoint from "@/hooks/useBreakPoint";

interface Props {
    title: string;
}

export function Title({title}: Props) {
    const breakpoint = useBreakpoint();

    const mobileResolution = breakpoint === "sm" || breakpoint === "xs";

    const titleVariant: Variants = {
        offscreen: {
            x: mobileResolution ? -500 : -200,
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
        <motion.h2
            className="text-3xl font-semibold w-full text-start after:w-20 after:h-[2px] after:bg-white flex items-center gap-5"
            initial="offscreen"
            transition={{duration: 0.5}}
            variants={titleVariant}
            viewport={{once: true, amount: 0.3}}
            whileInView="onscreen"
        >
            {title}
        </motion.h2>
    );
}
