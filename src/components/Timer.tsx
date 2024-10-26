import React, { useState, useEffect } from "react";
import { clock, longDate } from "@utils/date.ts";

export const Timer: React.FC = () => {
    const [date, setDate] = useState<string>(longDate());
    const [time, setTime] = useState<string>(clock());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(longDate());
            setTime(clock());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <span>{date}</span>
            <span className="ml-3 text-center">-</span>
            <span className="w-20 text-center inline-block">{time}</span>
        </div>
    );
};