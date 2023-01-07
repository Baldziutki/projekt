<script>
	import { supabase } from '../supabase.js';
    import { throwable } from "../throwable.js";

	let loading = false;
	let email;
	let password;
    let errorMessage = "";
	const handleLogin = async () => {
		try {
            errorMessage = "";
			loading = true;
		    await throwable( supabase.auth.signInWithPassword({ email, password }) );
		} catch (error) {
			console.error(error);
            errorMessage = error.message;
		} finally {
			loading = false;
		}
	};

</script>

<h1 class="text-2xl font-bold text-center text-gray-800- md:text-3xl">Log in</h1>

<form on:submit|preventDefault={handleLogin}>
    {#if errorMessage}
    <div>
        {errorMessage}
    </div>
    {/if}
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold mb-2 text-gray-800" for="email"> Email </label>
		<input
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
			name="email"
			placeholder="Your email"
			type="email"
			bind:value={email}
            required
		/>

		<label class="font-bold mb-2 text-gray-800" for="passwd"> Password </label>
		<input
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
			name="passwd"
			placeholder="Your password"
			type="password"
			bind:value={password}
			required
		/>
	</div>
	<button
        disabled={loading}
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
	>
		Log in
	</button>
</form>
