// Con `output: 'hybrid'` configurado:
export const prerender = false;
import type { APIRoute } from "astro";
import {supabase} from "@lib/supabase.ts";


export const GET: APIRoute = async ({ cookies, redirect }) => {
    const { error } = await supabase.auth.signOut()

    cookies.delete("sb-access-token", { path: "/" });
    cookies.delete("sb-refresh-token", { path: "/" });
    return redirect("/auth/signin");
};