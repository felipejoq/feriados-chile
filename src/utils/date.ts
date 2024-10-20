import { format } from "@formkit/tempo"

export const CHILE_CONTINENTAL = 'America/Santiago';
export const CHILE_AUSTRAL = 'America/Punta_Arenas';
export const CHILE_PENINSULAR = 'Pacific/Easter';

const getCurrentYearInTimeZone = (): number => {
    return Number(format(new Date(), "YYYY", "cl"));
};

export const currentYear = getCurrentYearInTimeZone();