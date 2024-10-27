import React, {useEffect, useState} from "react";
import {actions} from "astro:actions";
import {type Holiday} from "@data/2024/holidays.ts";
import {HolidayCard} from "@components/cards/HolidayCard.tsx";
import {getDate} from "@utils/date.ts";

export const TodayIsHoliday: React.FC = () => {
    const [todayIsHoliday, setTodayIsHoliday] = useState<Holiday[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const {data, error} = await actions.TodayIsHoliday((new Date(getDate())).toISOString());
            if (!error) setTodayIsHoliday(data);
            setLoading(false);
        })();
    }, [])

    return (
        <section className="my-6">
            <h2 className="text-2xl font-semibold mb-4">🤔 ¿Hoy es feriado?</h2>
            {
                loading ? (
                    <p className="mb-2">🤞 Buscando en el calendario...</p>
                ) : (
                    todayIsHoliday.length > 0 ? (
                        <>
                            <p className="font-semibold mb-2">🎉 Sí, Hoy es feriado!</p>
                            {todayIsHoliday.map((holiday, index) => (
                                <div key={index} className="mb-2">
                                    <HolidayCard holiday={holiday}/>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p className="bg-white p-4 rounded-lg shadow-md my-6 text-lg font-semibold">
                            😟 No, hoy no es feriado
                        </p>
                    )
                )
            }
        </section>
    )
}