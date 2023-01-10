<script>
	import { supabase } from '../supabase.js';
	import { resetTodos } from '../stores/todoStore.js';

	const logout = () => {
		console.log('logging out');
		supabase.auth.signOut();
		resetTodos();
	};
</script>

<div class="my-4 flex justify-end">
	<button
		type="submit"
		class="shadow-sm rounded bg-purple-900 hover:bg-purple-600 text-white py-2 px-4"
		on:click={logout}
	>
		Log Out
	</button>
</div>
