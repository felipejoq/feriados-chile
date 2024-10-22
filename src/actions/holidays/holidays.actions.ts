import {defineAction} from "astro:actions";
import {z} from "astro:schema";
import {holidays} from "@data/2024/holidays.ts";
import {format} from "@formkit/tempo";

const isSundayInTimeZone = (): boolean => {
    const date = new Date();
    const day = format(date, "dddd", "cl");
    return day === "Sunday";
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
            return holiday.date === today && holiday.day !== "Todos los Días Domingos";
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