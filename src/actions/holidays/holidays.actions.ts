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

        const holidaysCollection = await getCollection('holidays_2024');

        const holidaysFound = holidaysCollection.filter(({data}) => {
            return data.date !== null && data.date !== undefined
                && isSameDay(data.date.toISOString(), today)
                && data.description !== "Todos los días Domingos";
        });

        const result = [];

        // Check if today is Sunday in Chile Continental
        if (isSundayInTimeZone()) {
            const sundayHoliday = await getEntry("holidays_2024", "todos-los-domingos");
            result.push(sundayHoliday.data);
        }

        return [
            ...holidaysFound,
            ...result,
        ] as Holiday[];
    }
});

export const SearchHolidays = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (search) => {
        const holidaysCollection = await getCollection('holidays_2024');
        return holidaysCollection.filter(({data}) => {
            const holidayToString = JSON.stringify(data);
            if(holidayToString.toLowerCase().includes(search.toLowerCase())) {
                return data;
            }
        }).map(({data}) => data) as Holiday[];
    }
});