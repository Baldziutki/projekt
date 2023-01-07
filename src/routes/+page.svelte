<script>
	import TodoForm from '../components/TodoForm.svelte';
	import Todo from '../components/Todo.svelte';
	import { todos } from '../stores/todoStore.js';
	import { page } from '$app/stores';
	import Auth  from '../components/Auth.svelte';
    import Navbar from "../components/Navbar.svelte";
</script>

<main class="p-4">
	<h1 class="
        text-6xl 
        font-black 
        text-center 
        md:text-6xl 
        bg-gradient-to-r 
        from-indigo-500 
        via-purple-500 
        to-pink-500 
        bg-clip-text 
        text-transparent 
        mb-2 
        md:leading-[normal]
        leading-[normal] 
    ">
        My todos
    </h1>
	{#if !$page.data.session}
		<Auth />
	{:else}
        <Navbar />
		<TodoForm session={$page.data.session}/>
		{#each $todos as todo (todo.id)}
			<Todo {todo} />
		{/each}
	{/if}
</main>
