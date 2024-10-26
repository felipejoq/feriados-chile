import React, {useEffect, useState} from "react";
import {actions} from "astro:actions";
import {type Holiday} from "@data/2024/holidays.ts";
import {HolidayCard} from "@components/cards/HolidayCard.tsx";

export const TodayIsHoliday: React.FC = () => {
    const [todayIsHoliday, setTodayIsHoliday] = useState<Holiday[]>([]);
    useEffect(() => {
        (async () => {
            const {data, error} = await actions.TodayIsHoliday((new Date()).toISOString());
            if (!error) setTodayIsHoliday(data);
        })();
    }, [])

    return (
        <section className="my-6">
            {todayIsHoliday.length > 0 ? (
                <>
                    <p className="text-2xl font-semibold mb-2">🎉 Hoy es feriado</p>
                    {todayIsHoliday.map((holiday, index) => (
                        <div key={index} className="mb-2">
                            <HolidayCard holiday={holiday}/>
                        </div>
                    ))}
                </>
            ) : (
                <p className="bg-white p-4 rounded-lg shadow-md my-6 text-lg font-semibold">
                    😟 Hoy no es feriado
                </p>
            )}
        </section>
    )
}