import React, {useState} from "react";
import type {Holiday} from "@data/2024/holidays.ts";

interface Props {
    holidays: Holiday[];
}

export const SearchHolidays: React.FC<Props> = ({holidays}) => {

    const [filteredHolidays, setFilteredHolidays] = useState<Holiday[]>([]);

    const searchHoliday = (search:string) => {

        if (!search) return [];

        return holidays.filter((holiday) => {
            const holidayString = `${holiday.date} ${holiday.description} ${holiday.type} ${holiday.beneficiaries} ${holiday.legalSupport}`;
            return holidayString.toLowerCase().includes(search.toLowerCase());
        });
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value;
        const filteredHolidays = searchHoliday(search);
        setFilteredHolidays(filteredHolidays);
    }

    return (
        <>
            <search>
                <input
                    onChange={handleSearch}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    type="text" placeholder="Buscar feriado"/>
            </search>
            <ul>
                {filteredHolidays.map((item, index) => (
                    <li key={index}>
                        <span>{item.description}</span>
                    </li>
                ))}
            </ul>
        </>

    )
}