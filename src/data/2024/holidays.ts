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

export const holidays: Holiday[] = [
    {
        date: undefined,
        description: "Todos los días Domingos",
        type: HolidayType.Civil,
        irrenunciable: false,
        legalSupport: "Ley 2.977",
    },
    {
        description: "Año Nuevo",
        type: HolidayType.Civil,
        legalSupport: "Ley 2.977, Ley 19.973",
        irrenunciable: true,
        date: new Date("2024-01-01")
    },
    {
        description: "Viernes Santo",
        type: HolidayType.Religious,
        irrenunciable: false,
        legalSupport: "Ley 2.977",
        date: new Date("2024-03-29"),
    },
    {
        description: "Sábado Santo",
        type: HolidayType.Religious,
        irrenunciable: false,
        legalSupport: "Ley 2.977",
        date: new Date("2024-03-30"),
    },
    {
        description: "Día Nacional del Trabajo",
        type: HolidayType.Civil,
        legalSupport: "Código del Trabajo, Ley 19.973",
        irrenunciable: true,
        date: new Date("2024-05-01"),
    },
    {
        description: "Día de las Glorias Navales",
        type: HolidayType.Civil,
        irrenunciable: false,
        legalSupport: "Ley 2.977",
        date: new Date("2024-05-21"),
    },
    {
        description: "Elecciones Primarias Alcaldes y Gobernadores",
        type: HolidayType.Civil,
        legalSupport: "Ley 18.700, Ley 19.973",
        irrenunciable: true,
        date: new Date("2024-06-09"),
    },
    {
        description: "Día Nacional de los Pueblos Indígenas",
        type: HolidayType.Civil,
        irrenunciable: false,
        legalSupport: "Ley 21.357",
        date: new Date("2024-06-20"),
        slug: "/por-que-es-feriado-el-20-de-junio-en-chile",
    },
    {
        description: "San Pedro y San Pablo",
        type: HolidayType.Religious,
        irrenunciable: false,
        legalSupport: "Ley 2.977, Ley 18.432, Ley 19.668",
        date: new Date("2024-06-29"),
        slug: "/por-que-es-feriado-del-29-de-junio-en-chile"
    },
    {
        description: "Día de la Virgen del Carmen",
        type: HolidayType.Religious,
        irrenunciable: false,
        legalSupport: "Ley 20.148",
        date: new Date("2024-07-16"),
        slug: "/por-que-es-feriado-el-16-de-julio-en-chile",
    },
    {
        description: "Asunción de la Virgen",
        type: HolidayType.Religious,
        irrenunciable: false,
        legalSupport: "Ley 2.977",
        date: new Date("2024-08-15"),
        slug: "/por-que-es-feriado-el-15-de-agosto-en-chile",
    },
    {
        description: "Independencia Nacional",
        type: HolidayType.Civil,
        legalSupport: "Ley 2.977, Ley 19.973",
        irrenunciable: true,
        date: new Date("2024-09-18"),
        slug: "/por-que-es-feriado-el-18-de-septiembre-en-chile",
    },
    {
        description: "Día de las Glorias del Ejército",
        type: HolidayType.Civil,
        legalSupport: "Ley 2.977, Ley 20.629",
        irrenunciable: true,
        date: new Date("2024-09-19"),
        slug: "/por-que-es-feriado-el-19-de-septiembre-en-chile",
    },
    {
        description: "Feriado Adicional Fiestas Patrias",
        type: HolidayType.Civil,
        irrenunciable: false,
        legalSupport: "Ley 20.215",
        date: new Date("2024-09-20"),
        slug: "/por-que-es-feriado-el-20-de-septiembre-en-chile",
    },
    {
        description: "Encuentro de Dos Mundos",
        type: HolidayType.Civil,
        irrenunciable: false,
        legalSupport: "Ley 3.810, Ley 19.668",
        date: new Date("2024-10-12"),
        slug: "/por-que-es-feriado-el-12-de-octubre-en-chile",
    },
    {
        description: "Elecciones Municipales, Consejeros Regionales y Gobernadores Regionales",
        type: HolidayType.Civil,
        legalSupport: "Ley 18.700, Ley 19.973",
        irrenunciable: true,
        date: new Date("2024-10-26"),
    },
    {
        description: "Elecciones Municipales, Consejeros Regionales y Gobernadores Regionales",
        type: HolidayType.Civil,
        legalSupport: "Ley 18.700, Ley 19.973",
        irrenunciable: true,
        date: new Date("2024-10-27"),
        slug: "/feriado-27-de-octubre-en-chile-elecciones",
    },
    {
        description: "Día de las Iglesias Evangélicas y Protestantes",
        type: HolidayType.Religious,
        irrenunciable: false,
        legalSupport: "Ley 20.299",
        date: new Date("2024-10-31"),
        slug: "/por-que-es-feriado-el-31-octubre-en-chile",
    },
    {
        description: "Día de Todos los Santos",
        type: HolidayType.Religious,
        irrenunciable: false,
        legalSupport: "Ley 2.977",
        date: new Date("2024-11-01"),
        slug: "/feriado-el-01-de-noviembre-en-chile"
    },
    {
        description: "Segunda Vuelta Elección Gobernadores Regionales",
        type: HolidayType.Civil,
        legalSupport: "Ley 18.700, Ley 19.973",
        irrenunciable: true,
        date: new Date("2024-11-24"),
        slug: "/feriado-el-27-de-noviembre-chile",
    },
    {
        description: "Inmaculada Concepción",
        type: HolidayType.Religious,
        irrenunciable: false,
        legalSupport: "Ley 2.977",
        date: new Date("2024-12-08"),
        slug: "/feriado-domingo-08-diciembre-chile",
    },
    {
        description: "Navidad",
        type: HolidayType.Religious,
        legalSupport: "Ley 2.977, Ley 19.973",
        irrenunciable: true,
        date: new Date("2024-12-25"),
    },
    {
        description: "Asalto y Toma del Morro de Arica",
        type: HolidayType.Local,
        irrenunciable: false,
        beneficiaries: "Región de Arica y Parinacota",
        legalSupport: "Ley 20.663",
        date: new Date("2024-06-07"),
    },
    {
        description: "Nacimiento del Prócer de la Independencia",
        type: HolidayType.Local,
        irrenunciable: false,
        beneficiaries: "Comunas de Chillán y Chillán Viejo",
        legalSupport: "Ley 16.535, Ley 20.768",
        date: new Date("2024-08-20"),
    },
    {
        description: "Feriado Bancario",
        type: HolidayType.Special,
        irrenunciable: false,
        beneficiaries: "Trabajadores de Instituciones Bancarias",
        legalSupport: "Ley General de Bancos",
        date: new Date("2024-12-31"),
    }
];