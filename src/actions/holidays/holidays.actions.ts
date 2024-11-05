import {defineAction} from "astro:actions";
import {z} from "astro:schema";
import {holidays} from "@data/2024/holidays.ts";
import {isSameDay, isSundayInTimeZone} from "@utils/date.ts";

export const TodayIsHoliday = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (today) => {

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
            ...holidaysFound,
            ...result,
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

export const SearchHolidays = defineAction({
    accept: 'json',
    input: z.string(),
    handler: (search) => {
        return holidays.filter(holiday => {
            const holidayToString = JSON.stringify(holiday);
            return holidayToString.toLowerCase().includes(search.toLowerCase());
        });
    }
});