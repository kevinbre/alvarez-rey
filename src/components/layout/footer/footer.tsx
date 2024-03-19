import {MutableRefObject} from "react";

interface Props {
    footerRef: MutableRefObject<null>;
}

export function Footer({footerRef}: Props) {
    const hovStyle = "hover:underline hover:text-gray-100";
    const thisYear = new Date().getFullYear();

    return (
        <footer ref={footerRef} className=" w-full bg-neutral-950 pt-10 flex flex-col gap-6 border-t border-gray-700">
            <div className="container">
                <div className="flex gap-6 justify-between flex-col sm:flex-row">
                    <div className="flex justify-start gap-2 flex-col items-center sm:items-start">
                        <h2 className="text-sm font-semibold text-white uppercase">Compañía</h2>
                        <ul className="text-gray-300 dark:text-gray-400 font-medium flex flex-col items-center sm:items-start gap-2">
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
                    <div className="flex justify-start gap-2 flex-col items-center sm:items-start">
                        <h2 className="text-sm font-semibold text-white uppercase">Centro de ayuda</h2>
                        <ul className="text-gray-300 dark:text-gray-400 font-medium flex flex-col items-center sm:items-start gap-2">
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
                    <div className="flex justify-start gap-2 flex-col items-center sm:items-start">
                        <h2 className="text-sm font-semibold text-white uppercase">Legal</h2>
                        <ul className="text-gray-300 dark:text-gray-400 font-medium flex flex-col items-center sm:items-start gap-2">
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
            <span className="pb-6 bg-neutral-950 flex justify-center text-xs sm:text-sm text-gray-500">
                © {thisYear} Estudio jurídico Alvarez Rey.
            </span>
        </footer>
    );
}
