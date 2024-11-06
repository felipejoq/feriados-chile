import {format, isBefore, isEqual, parse} from "@formkit/tempo"
import type {Holiday} from "../types/holidays.ts";

export const getDate = (date = new Date()) => {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Santiago",
    }).format(date);
};

export const longDate = () => {
    const date = format({
        date: new Date(),
        format: "dddd, DD MMMM YYYY",
        tz: "America/Santiago",
        locale: "es",
    });
    return date.charAt(0).toUpperCase() + date.slice(1);
}

export const clock = () => {
    return format({
        date: new Date(),
        format: "HH:mm:ss",
        tz: "America/Santiago",
        locale: "es",
    });
}

export const isSameDay = (dateISOString1: string, dateISOString2: string) => {
    return isEqual(
        parse({
            date: dateISOString1,
            format: "YYYY-MM-DD",
            locale: "es-CL"
        }),
        parse({
            date: dateISOString2,
            format: "YYYY-MM-DD",
            locale: "es-CL"
        })
    );
}

export const isSundayInTimeZone = (): boolean => {
    const date = new Date(getDate()).toISOString();
    const day = format({
        date: parse(date, "YYYY-MM-DD", "es-CL"),
        format: "dddd",
        tz: "America/Santiago",
        locale: "es",
    });
    return day === "domingo";
};

export const sortHolidays = (a: Holiday, b: Holiday) => {
    if (a.date === undefined || b.date === undefined) return 0;
    if (isBefore(a.date, b.date)) return -1;
    if (isBefore(b.date, a.date)) return 1;

    return 0;
}

