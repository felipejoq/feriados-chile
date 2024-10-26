import React from "react";

interface Props {
    text: string;
    href: string;
}

export const GeneralButton: React.FC<Props> = ({text, href}) => {
    return (
        <a
            href={href}
            className={`ml-auto no-underline text-sm text-white bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded w-full text-center`}
        >
            {text}
        </a>
    );
};