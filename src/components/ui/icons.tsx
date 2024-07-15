type variant = "main" | "primary" | "secondary" | "tertiary";

interface Logo {
    className?: string;
    variant?: variant;
}

const variants = {
    main: "#2c2c35",
    primary: "#E0D9C8",
    secondary: "#B79260",
    tertiary: "#793E39",
};

export const Icons = {
    logo: ({className, variant}: Logo) => {
        const cls1 = {fill: variants[variant || "main"], strokeWidth: "0px"};

        return (
            <svg
                className={`${className}`}
                data-name="Capa 1"
                height="90"
                id="Capa_1"
                viewBox="63 24 119 87"
                width="123"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m149.03,107.19h-17l-8.5-17h-47.23l-8.77,17h-3.49L103.05,31.26h6.97l39.01,75.93Zm-27.03-20.06l-21.73-43.33-22.29,43.33h44.03Z"
                    style={cls1}
                />
                <path
                    d="m146.5,43.8s-19,1.67-19.09,2.51c.36.07.63.11.63.11h18.34c16.08,0,21.08,9.65,21.08,19.65s-8.93,20.72-20.85,20.72h-18.58v2.62h10.72c3.87,0,19.5-.79,19.06-.95,15.96-3.1,23.34-12.87,23.34-22.51,0-11.2-10.01-22.16-34.66-22.16Z"
                    style={cls1}
                />
                <polygon points="114.03 43.67 147.19 43.8 147.19 46.43 107.26 46.43 114.03 43.67" style={cls1} />
                <polygon points="150.02 88.39 164.27 83.88 183.16 120.65 166.17 120.65 150.02 88.39" style={cls1} />
                <path
                    d="m133.35,25.26c3.57,0,6.05,2.48,6.05,6.05s-2.48,5.94-6.05,5.94-5.94-2.38-5.94-5.94,2.38-6.05,5.94-6.05Z"
                    style={cls1}
                />
            </svg>
        );
    },
    logoLetters: ({className, variant}: Logo) => {
        const cls1 = {fill: variants[variant || "main"], strokeWidth: "0px"};

        return (
            <svg
                className={`${className}`}
                data-name="Capa 1"
                height={21}
                id="Capa_1"
                viewBox="30 74 170 10"
                width={167}
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        d="m47.83,86.24h-2.62l-2.49-4.92h-8.46l-2.54,4.92h-.54l7.81-15.18h1.08l7.76,15.18Zm-5.36-5.4l-3.92-7.83-4.05,7.83h7.98Z"
                        style={cls1}
                    />
                    <path d="m60.84,86.24h-10.6v-15.18h2.43v14.7h8.17v.48Z" style={cls1} />
                    <path d="m59.87,71.06h2.65l6.63,13.23,6.83-13.23h.56l-7.85,15.18h-1.08l-7.74-15.18Z" style={cls1} />
                    <path
                        d="m91.22,86.24h-2.62l-2.49-4.92h-8.46l-2.54,4.92h-.54l7.81-15.18h1.08l7.76,15.18Zm-5.36-5.4l-3.92-7.83-4.05,7.83h7.98Z"
                        style={cls1}
                    />
                    <path
                        d="m93.64,71.06h5.79c4.49,0,6.31,2,6.31,4.03,0,1.76-1.34,3.53-4.25,4.1l7.59,7.05h-3.43l-6.83-6.87h-2.75v6.87h-2.43v-15.18Zm5.81,7.83c2.17,0,3.79-1.91,3.79-3.77s-.91-3.58-3.84-3.58h-3.34v7.35h3.38Z"
                        style={cls1}
                    />
                    <path
                        d="m121.7,78.82h-7.81v6.94h9.06v.48h-11.49v-15.18h11.49v.48h-9.06v6.77h7.81v.52Z"
                        style={cls1}
                    />
                    <path d="m125.69,71.06h11.73l-9.43,14.74h9.87v.43h-12.9l9.45-14.68h-8.72v-.5Z" style={cls1} />
                    <path
                        d="m153.71,71.06h5.79c4.49,0,6.31,2,6.31,4.03,0,1.76-1.34,3.53-4.25,4.1l7.59,7.05h-3.43l-6.83-6.87h-2.75v6.87h-2.43v-15.18Zm5.81,7.83c2.17,0,3.79-1.91,3.79-3.77s-.91-3.58-3.84-3.58h-3.34v7.35h3.38Z"
                        style={cls1}
                    />
                    <path
                        d="m181.77,78.82h-7.81v6.94h9.06v.48h-11.49v-15.18h11.49v.48h-9.06v6.77h7.81v.52Z"
                        style={cls1}
                    />
                    <path
                        d="m198.3,71.06l-5.46,9.19v5.98h-2.43v-5.75l-5.81-9.43h2.75l5.23,8.63,5.16-8.63h.56Z"
                        style={cls1}
                    />
                </g>
                <path
                    d="m144.69,74.93c2.35,0,3.99,1.64,3.99,3.99s-1.64,3.92-3.99,3.92-3.92-1.57-3.92-3.92,1.57-3.99,3.92-3.99Z"
                    style={cls1}
                />
            </svg>
        );
    },
};
