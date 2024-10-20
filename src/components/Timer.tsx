import React, {useEffect} from "react";
import {format} from "@formkit/tempo";

export const Timer: React.FC = () => {

    const longDate = (date: Date) =>{
        const day = format(date, "dddd", "cl");
        const month = format(date, "MMMM", "cl");
        const dayNumber = format(date, "DD", "cl");
        const year = format(date, "YYYY", "cl");
        return `${day.charAt(0).toUpperCase() + day.slice(1)}, ${dayNumber} de ${month} de ${year}`;
    }

    const clock = () => {
        const date = new Date();
        const longDateToday = longDate(date);
        const hours = format(date, "HH", "cl");
        const minutes = format(date, "mm", "cl");
        const seconds = format(date, "ss", "cl");
        return `${longDateToday} - ${hours}:${minutes}:${seconds}`;
    }

    const [time, setTime] = React.useState<string>(clock());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(clock());
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);


    return (
        <>
            {
                time
            }
        </>
    )
}