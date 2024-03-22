export type Ref = "heroRef" | "aboutRef" | "workRef" | "professionalsRef" | "footerRef";

export interface MenuLinks {
    id: number;
    name: string;
    ref: Ref;
}

export interface MenuRef {
    heroRef: React.MutableRefObject<null>;
    aboutRef: React.MutableRefObject<null>;
    workRef: React.MutableRefObject<null>;
    professionalsRef: React.MutableRefObject<null>;
    footerRef: React.MutableRefObject<null>;
}
