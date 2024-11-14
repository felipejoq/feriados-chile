import {defineAction} from "astro:actions";
import {z} from "astro:schema";
import {longDate} from "@utils/date.ts";

export const GetLongDate = defineAction({
    accept: 'json',
    handler: async () => {
        return {
            longDate: longDate()
        };
    }
});