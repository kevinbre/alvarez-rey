interface Props {
    name: string;
    avatar: string;
}

export function ProfessionalBox({name, avatar}: Props) {
    return (
        <div className="flex flex-col border border-gray-700 rounded-lg w-52 bg-zinc-900 md:w-80">
            <img alt="" className="object-cover rounded-t-lg" src={avatar} />
            <span className="px-4 py-2 text-lg">{name}</span>
        </div>
    );
}
