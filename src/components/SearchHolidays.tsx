import React, {useState, useEffect} from "react";
import type {Holiday} from "../types/holidays.ts";
import {actions} from "astro:actions";

interface Props {
    holidays: Holiday[];
}

export const SearchHolidays: React.FC<Props> = ({holidays}) => {

    const [filteredHolidays, setFilteredHolidays] = useState<Holiday[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const searchHoliday = async (search: string) => {
        if (!search) return [];
        const {data, error} = await actions.SearchHolidays(search);
        if (error) return [];
        return data;
    }

    useEffect(() => {
        const handler = setTimeout(async () => {
            const filteredHolidays = await searchHoliday(searchTerm);
            setFilteredHolidays(filteredHolidays);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <search className="my-5"
            >
                <input
                    onChange={handleSearch}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    type="text" placeholder="Buscar feriado"
                />
            </search>
            <ul className="absolute bg-white rounded-lg shadow-lg z-10 truncate whitespace-nowrap">
                {filteredHolidays.map((item, index) => (
                    <li key={index} className="p-2 hover:bg-gray-100">
                        <span>{item.description}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}