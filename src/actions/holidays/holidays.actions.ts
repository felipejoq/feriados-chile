import {z} from "astro:schema";
import {defineAction} from "astro:actions";
import {getCollection} from "astro:content";
import {getEntry} from "astro:content";
import {isSameDay, isSundayInTimeZone} from "@utils/date.ts";
import type {Holiday} from "@utils/def/holidays.ts";

export const TodayIsHoliday = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (today) => {

        const holidaysCollection = await getCollection('holidays_2024') as {data: Holiday}[];

        const holidaysFound = holidaysCollection.filter(({data}) => {
            return data.date !== null && data.date !== undefined
                && isSameDay(data.date.toISOString(), today)
                && data.description !== "Todos los días Domingos";
        }).map(({data}) => data) as Holiday[];

        const result = [];

        // Check if today is Sunday in Chile Continental
        if (isSundayInTimeZone()) {
            const sundayHoliday = await getEntry("holidays_2024", "todos-los-domingos");
            result.push(sundayHoliday.data);
        }
        const holidays = [
            ...holidaysFound,
            ...result,
        ] as Holiday[];

        return {
            isHoliday: holidays.length > 0,
            message: holidays.length > 0 ? "🎉 Hoy es feriado!" : "😟 Hoy no es feriado",
            holidays,
        };
    }
});

export const SearchHolidays = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (search) => {
        const holidaysCollection = await getCollection('holidays_2024') as {data: Holiday}[];
        return holidaysCollection.filter(({data}) => {
            const holidayToString = JSON.stringify(data);
            if(holidayToString.toLowerCase().includes(search.toLowerCase())) {
                return data;
            }
        }).map(({data}) => data) as Holiday[];
    }
});