export const CHILE_CONTINENTAL = 'America/Santiago';
export const CHILE_AUSTRAL = 'America/Punta_Arenas';
export const CHILE_PENINSULAR = 'Pacific/Easter';

const getCurrentYearInTimeZone = (timeZone: string): number => {
    const date = new Date();
    const year = new Intl.DateTimeFormat('en-US', { year: 'numeric', timeZone }).format(date);
    return parseInt(year, 10);
};

export const currentYear = getCurrentYearInTimeZone(CHILE_CONTINENTAL);