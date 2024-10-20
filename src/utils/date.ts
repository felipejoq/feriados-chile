import { format } from "@formkit/tempo"


export const longDate = () =>{
    const date = new Date();
    const day = format(date, "dddd", "cl");
    const month = format(date, "MMMM", "cl");
    const dayNumber = format(date, "DD", "cl");
    const year = format(date, "YYYY", "cl");
    return `${day.charAt(0).toUpperCase() + day.slice(1)}, ${dayNumber} de ${month} de ${year}`;
}

export const clock = () => {
    const date = new Date();
    const hours = format(date, "HH", "cl");
    const minutes = format(date, "mm", "cl");
    const seconds = format(date, "ss", "cl");
    return `${hours}:${minutes}:${seconds}`;
}