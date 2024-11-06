import {defineAction} from "astro:actions";
import {z} from "astro:schema";
import {isSameDay, isSundayInTimeZone} from "@utils/date.ts";
import {getCollection} from "astro:content";
import {getEntry} from "astro:content";
import type {Holiday} from "../../types/holidays.ts";

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
        ];
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