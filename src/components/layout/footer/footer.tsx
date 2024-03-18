import {MutableRefObject} from "react";

interface Props {
    footerRef: MutableRefObject<null>;
}

export function Footer({footerRef}: Props) {
    return (
        <div ref={footerRef} className="container w-full h-screen">
            <h1>footer</h1>
        </div>
    );
}
