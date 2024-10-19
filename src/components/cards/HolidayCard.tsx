import React from "react";
import type {Holiday} from "@data/2024/holidays.ts";

interface Props {
    holiday: Holiday;
}

export const HolidayCard: React.FC<Props> = ({holiday}) => {
    return (
        <div className={`p-4 rounded-lg shadow-md ${holiday.reason ? 'bg-yellow-100' : 'bg-white'}`}>
            <h3 className="text-lg font-semibold">{holiday.day}</h3>
            {holiday.holiday && <p><strong>Feriado:</strong> {holiday.holiday}</p>}
            {holiday.type && <p><strong>Tipo:</strong> {holiday.type}</p>}
            {holiday.irrenunciable !== undefined && (
                <p><strong>Irrenunciable:</strong> {holiday.irrenunciable ? "Sí" : "No"}</p>
            )}
            {holiday.reason && <p><strong>Motivo:</strong> {holiday.reason}</p>}
            {holiday.beneficiaries && <p><strong>Beneficiarios:</strong> {holiday.beneficiaries}</p>}
            <p><strong>Respaldo Legal:</strong> {holiday.legalSupport}</p>
        </div>
    );
};