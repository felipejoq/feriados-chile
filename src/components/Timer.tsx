import React, {useState, useEffect} from "react";
import {clock} from "@utils/date.ts";

export const Timer: React.FC = () => {
    const [time, setTime] = useState<string>(clock());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(clock());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span>{time}</span>
    );
};