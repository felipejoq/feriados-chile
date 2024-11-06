export enum HolidayType {
    Civil = "Civil",
    Religious = "Religioso",
    Local = "Local",
    Special = "Especial",
}

export type Holiday = {
    legalSupport: string;
    description?: string;
    type: HolidayType;
    irrenunciable: boolean;
    beneficiaries?: string;
    slug?: string;
    date: Date | undefined;
};