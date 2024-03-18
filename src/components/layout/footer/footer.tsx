import {MutableRefObject} from "react";

interface Props {
    footerRef: MutableRefObject<null>;
}

export function Footer({footerRef}: Props) {
    const hovStyle = "hover:underline hover:text-gray-100";

    return (
        <footer ref={footerRef} className="container w-full bg-neutral-950">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Compañía</h2>
                        <ul className="text-gray-300 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a className={`${hovStyle}`} href="#">
                                    Inicio
                                </a>
                            </li>
                            <li className="mb-4 ">
                                <a className={`${hovStyle}`} href="#">
                                    ¿Quiénes somos?
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className={`${hovStyle}`} href="#">
                                    ¿Qué hacemos?
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Centro de ayuda</h2>
                        <ul className="text-gray-300  font-medium">
                            <li className="mb-4">
                                <a className={`${hovStyle}`} href="#">
                                    Whatsapp
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className={`${hovStyle}`} href="#">
                                    Email
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className={`${hovStyle}`} href="#">
                                    Instagram
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className={`${hovStyle}`} href="#">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
                        <ul className="text-gray-300  font-medium">
                            <li className="mb-4">
                                <a className={`${hovStyle}`} href="#">
                                    Política de privacidad
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className={`${hovStyle}`} href="#">
                                    Licencia
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className={`${hovStyle}`} href="#">
                                    Términos y condiciones
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 bg-neutral-950 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-300  sm:text-center">
                        © 2024 <a>Estudio jurídico Alvarez Rey.</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
