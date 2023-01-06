<script>
	import TodoForm from '../components/TodoForm.svelte';
	import Todo from '../components/Todo.svelte';
	import { todos } from '../stores/todoStore.js';
	import { page } from '$app/stores';
	import Auth  from '../components/Auth.svelte';
</script>

<main>
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Todos</h1>
	{#if !$page.data.session}
		<Auth />
	{:else}
		<TodoForm />
		{#each $todos as todo (todo.id)}
			<Todo {todo} />
		{/each}
	{/if}
</main>
