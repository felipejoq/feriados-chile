import { format } from "@formkit/tempo"


export const longDate = () =>{
    return format({
        date: new Date(),
        format: "dddd, DD MMMM YYYY",
        tz: "America/Santiago",
        locale: "es",
    });
}

export const clock = () => {
    return format({
        date: new Date(),
        format: "HH:mm:ss",
        tz: "America/Santiago",
        locale: "es",
    });
}