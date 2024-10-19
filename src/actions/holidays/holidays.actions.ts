import {defineAction} from "astro:actions";
import {z} from "astro:schema";
import {holidays} from "@data/2024/holidays.ts";

export const TodayIsHoliday = defineAction({
    accept: 'json',
    input: z.string(),
    handler: (today) => {
        const holidaysFound = holidays.filter(holiday => {
            return holiday.date === today && holiday.day !== "Todos los Días Domingos";
        });

        // check if today is sunday
        const date = new Date();
        const result = [];
        if (date.getDay() === 0) {
            result.push(holidays[0])
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