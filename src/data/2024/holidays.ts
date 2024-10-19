export type Holiday = {
    day: string;
    date: string;
    legalSupport: string;
    holiday?: string;
    type?: string;
    irrenunciable?: boolean;
    reason?: string;
    beneficiaries?: string;
};

export const holidays: Holiday[] = [
    {
        day: "Todos los Días Domingos",
        date: "", // Sin fecha exacta
        holiday: "Día Domingo",
        type: "Civil",
        legalSupport: "Ley 2.977"
    },
    {
        day: "Lunes, 01 de Enero",
        date: "01-01-2024",
        holiday: "Año Nuevo",
        type: "Civil",
        legalSupport: "Ley 2.977, Ley 19.973",
        irrenunciable: true
    },
    {
        day: "Viernes, 29 de Marzo",
        date: "29-03-2024",
        holiday: "Viernes Santo",
        type: "Religioso",
        legalSupport: "Ley 2.977"
    },
    {
        day: "Sábado, 30 de Marzo",
        date: "30-03-2024",
        holiday: "Sábado Santo",
        type: "Religioso",
        legalSupport: "Ley 2.977"
    },
    {
        day: "Miércoles, 01 de Mayo",
        date: "01-05-2024",
        holiday: "Día Nacional del Trabajo",
        type: "Civil",
        legalSupport: "Código del Trabajo, Ley 19.973",
        irrenunciable: true
    },
    {
        day: "Martes, 21 de Mayo",
        date: "21-05-2024",
        holiday: "Día de las Glorias Navales",
        type: "Civil",
        legalSupport: "Ley 2.977"
    },
    {
        day: "Domingo, 09 de Junio",
        date: "09-06-2024",
        holiday: "Elecciones Primarias Alcaldes y Gobernadores",
        type: "Civil",
        legalSupport: "Ley 18.700, Ley 19.973",
        irrenunciable: true
    },
    {
        day: "Jueves, 20 de Junio",
        date: "20-06-2024",
        holiday: "Día Nacional de los Pueblos Indígenas",
        type: "Civil",
        legalSupport: "Ley 21.357"
    },
    {
        day: "Sábado, 29 de Junio",
        date: "29-06-2024",
        holiday: "San Pedro y San Pablo",
        type: "Religioso",
        legalSupport: "Ley 2.977, Ley 18.432, Ley 19.668"
    },
    {
        day: "Martes, 16 de Julio",
        date: "16-07-2024",
        holiday: "Día de la Virgen del Carmen",
        type: "Religioso",
        legalSupport: "Ley 20.148"
    },
    {
        day: "Jueves, 15 de Agosto",
        date: "15-08-2024",
        holiday: "Asunción de la Virgen",
        type: "Religioso",
        legalSupport: "Ley 2.977"
    },
    {
        day: "Miércoles, 18 de Septiembre",
        date: "18-09-2024",
        holiday: "Independencia Nacional",
        type: "Civil",
        legalSupport: "Ley 2.977, Ley 19.973",
        irrenunciable: true
    },
    {
        day: "Jueves, 19 de Septiembre",
        date: "19-09-2024",
        holiday: "Día de las Glorias del Ejército",
        type: "Civil",
        legalSupport: "Ley 2.977, Ley 20.629",
        irrenunciable: true
    },
    {
        day: "Viernes, 20 de Septiembre",
        date: "20-09-2024",
        holiday: "Feriado Adicional Fiestas Patrias",
        type: "Civil",
        legalSupport: "Ley 20.215"
    },
    {
        day: "Sábado, 12 de Octubre",
        date: "12-10-2024",
        holiday: "Encuentro de Dos Mundos",
        type: "Civil",
        legalSupport: "Ley 3.810, Ley 19.668"
    },
    {
        day: "Domingo, 27 de Octubre",
        date: "27-10-2024",
        holiday: "Elecciones Municipales, Consejeros Regionales y Gobernadores Regionales",
        type: "Civil",
        legalSupport: "Ley 18.700, Ley 19.973",
        irrenunciable: true
    },
    {
        day: "Jueves, 31 de Octubre",
        date: "31-10-2024",
        holiday: "Día de las Iglesias Evangélicas y Protestantes",
        type: "Religioso",
        legalSupport: "Ley 20.299"
    },
    {
        day: "Viernes, 01 de Noviembre",
        date: "01-11-2024",
        holiday: "Día de Todos los Santos",
        type: "Religioso",
        legalSupport: "Ley 2.977"
    },
    {
        day: "Domingo, 24 de Noviembre",
        date: "24-11-2024",
        holiday: "Segunda Vuelta Elección Gobernadores Regionales",
        type: "Civil",
        legalSupport: "Ley 18.700, Ley 19.973",
        irrenunciable: true
    },
    {
        day: "Domingo, 08 de Diciembre",
        date: "08-12-2024",
        holiday: "Inmaculada Concepción",
        type: "Religioso",
        legalSupport: "Ley 2.977"
    },
    {
        day: "Miércoles, 25 de Diciembre",
        date: "25-12-2024",
        holiday: "Navidad",
        type: "Religioso",
        legalSupport: "Ley 2.977, Ley 19.973",
        irrenunciable: true
    },
    {
        day: "Viernes, 07 de Junio",
        date: "07-06-2024",
        reason: "Asalto y Toma del Morro de Arica",
        beneficiaries: "Región de Arica y Parinacota",
        legalSupport: "Ley 20.663"
    },
    {
        day: "Martes, 20 de Agosto",
        date: "20-08-2024",
        reason: "Nacimiento del Prócer de la Independencia",
        beneficiaries: "Comunas de Chillán y Chillán Viejo",
        legalSupport: "Ley 16.535, Ley 20.768"
    },
    {
        day: "Martes, 31 de Diciembre",
        date: "31-12-2024",
        reason: "Feriado Bancario",
        beneficiaries: "Trabajadores de Instituciones Bancarias",
        legalSupport: "Ley General de Bancos"
    }
];