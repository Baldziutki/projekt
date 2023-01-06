import './supabase.js'
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const Handle = async ({event, resolve}) => {
    const { session, supabaseClient} = await getSupabase(event)

    event.locals.sb = supabaseClient
    event.locals.session = session

    return resolve(event)
}