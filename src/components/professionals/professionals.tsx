import {MutableRefObject} from "react";

import {ProfessionalBox} from "../ui/professional-box";
import {Title} from "../ui/title";

interface Props {
    professionalsRef: MutableRefObject<null>;
}

export function Professionals({professionalsRef}: Props) {
    return (
        <section
            ref={professionalsRef}
            className="container flex flex-col items-center justify-center h-screen gap-6 py-10 "
        >
            <Title title="Profesionales" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <ProfessionalBox avatar="/avatar.jpg" name="Martu Rey" />
                <ProfessionalBox avatar="/avatar.jpg" name="Kevincho Brede" />
            </div>
        </section>
    );
}
