import { z, defineCollection } from 'astro:content';
import {HolidayType } from '@data/2024/holidays.ts';

const articleCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        keywords: z.array(z.string()),
        date: z.string(),
        author: z.string(),
        image: z.string(),
        alt_text: z.string(),
    }),
});

const holidayCollection = defineCollection({
    type: 'data',
    schema: z.object({
        legalSupport: z.string(),
        description: z.string().optional(),
        type: z.nativeEnum(HolidayType),
        irrenunciable: z.boolean(),
        beneficiaries: z.string().optional(),
        slug: z.string().optional(),
        date: z.string()
            .transform((dateStr) => new Date(dateStr))
            .optional(),
    }),
});

export const collections = {
    'articles': articleCollection,
    'holidays': holidayCollection,
};