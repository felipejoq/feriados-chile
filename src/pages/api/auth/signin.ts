import type { APIRoute } from "astro";
import { supabase } from "@lib/supabase.ts";
import type { Provider } from "@supabase/supabase-js";
export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const formData = await request.formData();
    const provider = formData.get("provider")?.toString();

    const validProviders = ["google", "github", "discord"];
    if (provider && validProviders.includes(provider)) {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider as Provider,
            options: {
                redirectTo: `${import.meta.env.PAGE_URL}/api/auth/callback`
            },
        });

        console.log({ data, error });

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        return redirect(data.url);
    }

    return redirect("/auth/signin");
};