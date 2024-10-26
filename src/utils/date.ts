import {format, isEqual, parse} from "@formkit/tempo"


export const longDate = () =>{
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
    const date = new Date().toISOString();
    const day = format({
        date: parse(date, "YYYY-MM-DD", "es-CL"),
        format: "dddd",
        tz: "America/Santiago",
        locale: "es",
    });
    return day === "domingo";
};

export const getDate = () => {
    return format({
        date: new Date(),
        format: "dddd, DD MMMM YYYY HH:mm:ss",
        tz: "America/Santiago",
        locale: "es",
    });
};