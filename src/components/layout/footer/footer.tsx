import {MutableRefObject} from "react";

interface Props {
    footerRef: MutableRefObject<null>;
}

export function Footer({footerRef}: Props) {
    const hovStyle = "hover:underline hover:text-gray-100";
    const thisYear = new Date().getFullYear();

    return (
        <footer ref={footerRef} className="flex flex-col w-full gap-6 pt-10 border-t border-gray-700 bg-neutral-950">
            <div className="container">
                <div className="flex flex-col justify-between gap-6 sm:flex-row">
                    <div className="flex flex-col items-center justify-start gap-2 sm:items-start">
                        <h2 className="text-sm font-semibold uppercase">Compañía</h2>
                        <ul className="flex flex-col items-center gap-2 font-medium text-gray-300 dark:text-gray-400 sm:items-start">
                            <li className={`${hovStyle}`}>
                                <a href="#">Inicio</a>
                            </li>
                            <li className={`${hovStyle}`}>
                                <a href="#">¿Quiénes somos?</a>
                            </li>
                            <li className={`${hovStyle}`}>
                                <a href="#">¿Qué hacemos?</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-2 sm:items-start">
                        <h2 className="text-sm font-semibold uppercase">Centro de ayuda</h2>
                        <ul className="flex flex-col items-center gap-2 font-medium text-gray-300 dark:text-gray-400 sm:items-start">
                            <li className={`${hovStyle}`}>
                                <a href="#">Whatsapp</a>
                            </li>
                            <li className={`${hovStyle}`}>
                                <a href="#">Email</a>
                            </li>
                            <li className={`${hovStyle}`}>
                                <a href="#">Instagram</a>
                            </li>
                            <li className={`${hovStyle}`}>
                                <a href="#">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-2 sm:items-start">
                        <h2 className="text-sm font-semibold uppercase">Legal</h2>
                        <ul className="flex flex-col items-center gap-2 font-medium text-gray-300 dark:text-gray-400 sm:items-start">
                            <li className={`${hovStyle}`}>
                                <a href="#">Política</a>
                            </li>
                            <li className={`${hovStyle}`}>
                                <a href="#">Licencia</a>
                            </li>

                            <li className={`${hovStyle}`}>
                                <a href="#">Términos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <span className="w-full h-[1px] flex bg-gray-700/50" />
            <span className="flex justify-center pb-6 text-xs text-gray-500 bg-neutral-950 sm:text-sm">
                © {thisYear} Estudio jurídico Alvarez&Rey.
            </span>
        </footer>
    );
}
