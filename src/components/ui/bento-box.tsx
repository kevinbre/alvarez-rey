import {Variants, motion} from "framer-motion";

import useBreakpoint from "@/hooks/useBreakPoint";

interface Props {
    className: string;
    image: string;
    title: string;
    paragraph: string;
}

export function BentoBox({className, image, title}: Props) {
    const viewport = useBreakpoint();

    const cardVariants: Variants = {
        offscreen: {
            y: viewport === "sm" ? 40 : 120,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
            opacity: 1,
        },
    };

    return (
        <motion.div
            className={`${className} bg-neutral-900 rounded-md overflow-hidden relative`}
            initial="offscreen"
            transition={{duration: 0.6}}
            variants={cardVariants}
            viewport={{once: true, amount: 0.3}}
            whileInView="onscreen"
        >
            <div className="h-full overflow-hidden">
                <img
                    alt={title}
                    className={`hover:scale-110 w-full transition-all hover:rotate-3 duration-500 h-full object-cover`}
                    src={image}
                />
            </div>
            <div className="absolute bottom-0 w-full py-2 bg-neutral-900/50 backdrop-blur-sm text-start">
                <h2 className="px-4 text-gray-200 bold">{title}</h2>
            </div>
        </motion.div>
    );
}
