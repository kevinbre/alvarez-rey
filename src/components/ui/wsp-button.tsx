export function WspButton() {
    return (
        <a
            className="fixed right-6 bottom-6 bg-[#57F06D] rounded-full w-11 h-11 flex items-center justify-center"
            href="https://api.whatsapp.com/send?phone="
            rel="noreferrer"
            target="_blank"
        >
            <i className="text-3xl fa-brands fa-whatsapp mb-[1px] ml-[1px]" />
        </a>
    );
}
