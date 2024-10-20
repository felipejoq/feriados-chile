import {defineAction} from "astro:actions";
import {z} from "astro:schema";
import {holidays} from "@data/2024/holidays.ts";
import {CHILE_AUSTRAL, CHILE_CONTINENTAL, CHILE_PENINSULAR} from "@utils/date.ts";

const isSundayInTimeZone = (timeZone: string): boolean => {
    const date = new Date();
    const day = new Intl.DateTimeFormat('es-CL', { weekday: 'long', timeZone }).format(date);
    return String(day).toLowerCase() === 'domingo';
};

export const TodayIsHoliday = defineAction({
    accept: 'json',
    input: z.string(),
    handler: (today) => {
        const holidaysFound = holidays.filter(holiday => {
            return holiday.date === today && holiday.day !== "Todos los Días Domingos";
        });

        const result = [];

        // Check if today is Sunday in Chile Continental
        if (isSundayInTimeZone(CHILE_CONTINENTAL)) {
            result.push(holidays[0]);
        }

        // Check if today is Sunday in Chile Austral
        if (isSundayInTimeZone(CHILE_AUSTRAL)) {
            result.push(holidays[0]);
        }

        // Check if today is Sunday in Chile Peninsular
        if (isSundayInTimeZone(CHILE_PENINSULAR)) {
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