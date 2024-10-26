import React from "react";
import {format, parse} from "@formkit/tempo";
import {type Holiday, HolidayType} from "@data/2024/holidays.ts";
import {GeneralButton} from "@components/shared/buttons/GeneralButton.tsx";

interface Props {
    holiday: Holiday;
}

export const HolidayCard: React.FC<Props> = ({holiday}) => {

    let date;
    let capitalizeDate;

    if (holiday.date) {
        date = format({
            date: parse(holiday.date.toISOString(), "YYYY-MM-DD", "es-CL"),
            format: "full",
            locale: "es",
            tz: "America/Santiago",
        });
        capitalizeDate = date.charAt(0).toUpperCase() + date.slice(1);
    } else {
        capitalizeDate = holiday.description;
    }

    const isDifferent = holiday.type === HolidayType.Special || holiday.type === HolidayType.Local;

    return (
        <div className={`p-4 rounded-lg shadow-md flex flex-col ${isDifferent ? 'bg-green-100' : 'bg-white'}`}>
            <div className="flex-grow prose prose-neutral prose-p:text-black">
                <h3 className="text-lg font-semibold">{capitalizeDate}</h3>
                <p className="">{holiday.description}</p>
            </div>
            <hr className="bg-gray-300 h-[1px] my-4"/>
            <div className="flex-grow">
                <p><strong>Tipo:</strong> {holiday.type}</p>
                <p><strong>Irrenunciable:</strong> {holiday.irrenunciable ? "Sí" : "No"}</p>
                {holiday.beneficiaries && <p><strong>Beneficiarios:</strong> {holiday.beneficiaries}</p>}
                <p><strong>Respaldo Legal:</strong> {holiday.legalSupport}</p>
                {
                    holiday.slug &&
                  <div className='my-3 w-full flex justify-end'>
                    <GeneralButton
                      href={holiday.slug}
                      text='Ver más'
                    />
                  </div>
                }
            </div>
        </div>
    );
};