import {Variants, motion} from "framer-motion";

interface Props {
    className: string;
    image: string;
    title: string;
    paragraph: string;
}

export function BentoBox({className, image, title}: Props) {
    const cardVariants: Variants = {
        offscreen: {
            y: 120,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                opacity: 1,
            },
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
            <div className="overflow-hidden h-full">
                <img
                    alt={title}
                    className={`hover:scale-110 w-full transition-all hover:rotate-3 duration-500 h-full object-cover`}
                    src={image}
                />
            </div>
            <div className="py-2 absolute bottom-0 bg-neutral-900/50 backdrop-blur-sm w-full text-start">
                <h2 className="text-gray-200 bold px-4">{title}</h2>
            </div>
        </motion.div>
    );
}
