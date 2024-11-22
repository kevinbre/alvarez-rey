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
            className="container flex flex-col items-center justify-center min-h-screen gap-6 py-10 "
        >
            <Title title="Profesionales" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <ProfessionalBox avatar="/avatars/sandra.webp" name="Sandra A. Alvarez" />
                <ProfessionalBox avatar="/avatars/franco.webp" name="Franco A. Rey" />
                <ProfessionalBox avatar="/avatars/martina.jpg" name="Martina Rey" />
            </div>
        </section>
    );
}
