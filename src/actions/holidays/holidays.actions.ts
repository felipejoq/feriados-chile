import {defineAction} from "astro:actions";
import {z} from "astro:schema";
import {holidays} from "@data/2024/holidays.ts";
import {format, isEqual, parse} from "@formkit/tempo";

const isSameDay = (dateStr1: string, dateStr2: string) => {
    return isEqual(
        parse({
            date: dateStr1,
            format: "YYYY-MM-DD",
            locale: "es-CL"
        }),
        parse({
            date: dateStr2,
            format: "YYYY-MM-DD",
            locale: "es-CL"
        })
    );
}

const isSundayInTimeZone = (): boolean => {
    const date = new Date().toISOString();
    const day = format({
        date: parse(date, "YYYY-MM-DD", "es-CL"),
        format: "dddd",
        tz: "America/Santiago",
        locale: "es",
    });
    return day === "domingo";
};

const getDate = () => {
    return format({
        date: new Date(),
        format: "dddd, DD MMMM YYYY HH:mm:ss",
        tz: "America/Santiago",
        locale: "es",
    });
};

export const GetDate = defineAction({
    accept: 'json',
    input: z.any().optional(),
    handler: getDate
})

export const TodayIsHoliday = defineAction({
    accept: 'json',
    input: z.string(),
    handler: (today) => {

        const holidaysFound = holidays.filter(holiday => {
            return holiday.date !== undefined
                && isSameDay(holiday.date.toISOString(), today)
                && holiday.description !== "Todos los días Domingos";
        });

        const result = [];

        // Check if today is Sunday in Chile Continental
        if (isSundayInTimeZone()) {
            result.push(holidays[0]);
        }

        return [
            ...result,
            ...holidaysFound,
        ];
    }
});

export const GetAllHolidays = defineAction({
    accept: 'json',
    input: z.any().optional(),
    handler: () => {
        return holidays;
    }
});