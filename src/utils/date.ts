import { format } from "@formkit/tempo"


export const longDate = () =>{
    const date = format({
        date: new Date(),
        format: "dddd, DD MMMM YYYY",
        tz: "America/Santiago",
        locale: "es",
    });
    return date.charAt(0).toUpperCase() + date.slice(1);
}

export const clock = () => {
    return format({
        date: new Date(),
        format: "HH:mm:ss",
        tz: "America/Santiago",
        locale: "es",
    });
}