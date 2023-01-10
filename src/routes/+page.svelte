<script>
	import TodoForm from '../components/TodoForm.svelte';
	import Todo from '../components/Todo.svelte';
	import { fade } from 'svelte/transition';
	import { todos } from '../stores/todoStore.js';
	import { page } from '$app/stores';
	import Auth from '../components/Auth.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Register from '../components/Register.svelte';

	const view = [Auth, Register];
	const text = ['Register here!', 'Log in!'];

	let viewportComponent = null;
	let currentView = 0;

	let textComponent = null;
	let currentText = 0;

	function toggleText() {
		currentText = currentText == 0 ? 1 : 0;
	}

	function updateTextComponent() {
		textComponent = text[currentText];
	}

	function toggleView() {
		currentView = currentView == 0 ? 1 : 0;
	}
	function updateViewportComponent() {
		viewportComponent = view[currentView];
	}
	updateTextComponent();
	updateViewportComponent();
</script>

<main class="p-4">
	<h1
		class="
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
    "
	>
		My todos
	</h1>
	{#if !$page.data.session}
		{#if viewportComponent == view[currentView]}
			<div
				id="viewport"
				on:outroend={updateViewportComponent}
				on:outroend={updateTextComponent}
				transition:fade
			>
				<svelte:component this={viewportComponent} />
			</div>
			<button
				class="text-purple-300 hover:text-purple-500"
				on:click={toggleView}
				on:click={toggleText}
			>
				{textComponent}
			</button>
		{/if}
	{:else}
		<Navbar />
		<TodoForm session={$page.data.session} />
		<ul>
			{#each $todos as todo (todo.id)}
				<Todo {todo} />
			{/each}
		</ul>
	{/if}
</main>
