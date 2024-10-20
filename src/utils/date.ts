export const CHILE_CONTINENTAL = 'America/Santiago';
export const CHILE_AUSTRAL = 'America/Punta_Arenas';
export const CHILE_PENINSULAR = 'Pacific/Easter';

const getCurrentYearInTimeZone = (timeZone: string): number => {
    return Number(new Date().toLocaleString('es-CL', { timeZone, year: 'numeric' }));
};

export const currentYear = getCurrentYearInTimeZone(CHILE_CONTINENTAL);