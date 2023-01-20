<script>
	import { addTodo } from '../stores/todoStore.js';
	import dayjs from 'dayjs';
	import { loadTodos } from '../stores/todoStore.js';

	let filters = [];
	let filterTable = ['Not Important', 'Important', 'Very important'];
	let isCompleted = false;

	let format = 'YYYY-MM-DD';
	let date = new Date();

	let internal;

	const input = (x) => (internal = dayjs(x).format(format));
	const output = (x) => (date = dayjs(x, format).toDate());

	$: input(date);
	$: output(internal);

	let importance = ['Not Important', 'Important', 'Very important'];
	let counter = 0;

	let todo = '';
	let errorMessage = '';
	export let session;
	const handleSubmit = () => {
		if (todo === '') {
			errorMessage = 'Wrong value';
		} else {
			addTodo(todo, session.user.id, internal, importance[counter]);
			todo = '';
			errorMessage = '';
			counter = 0;
		}
	};

	const changeImportance = async () => {
		let localCounter = (counter + 1) % 3;
		counter = localCounter;
	};

	const changeCompleted = async () => {
		isCompleted = !isCompleted;
	};

	loadTodos(filterTable, isCompleted);
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb2">
		<label class="font-bold mb-2 text-purple-500" for="todo"> Todo </label>
		<input
			type="text"
			bind:value={todo}
			name="todo"
			required
			placeholder="Type your Todo"
			class="appearance-none shadow-sm border-2 border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-t-lg"
		/>
	</div>
	<div class="my-4 flex justify-end">
		<input type="date" bind:value={internal} class="mr-2 px-6"/>
		<button
			type="button"
			class="w-2/5 shadow-sm rounded-b-lg bg-purple-900 hover:bg-purple-600 text-white py-2 px-4 mr-2"
			on:click={changeImportance}
		>
			{importance[counter]}
		</button>

		<button
			type="submit"
			class="w-1/5 shadow-sm rounded-b-lg bg-purple-900 hover:bg-purple-600 text-white py-2 px-4"
		>
			Submit
		</button>
	</div>
	<div class="flex flex-row px-8">
		{#each filterTable as filter}
			<label class="text-white mr-1">
				<input
					class="mr-1"
					type="checkbox"
					bind:group={filters}
					value={filter}
					on:change={loadTodos(filters, isCompleted)}
				/>
				{filter}
			</label>
		{/each}
		<label class="text-white">
			<input
				type="checkbox"
				on:change={changeCompleted}
				on:change={loadTodos(filters, isCompleted)}
			/>
			Done
		</label>
	</div>

	{#if errorMessage}
		<p class="text-red-600">{errorMessage}!</p>
	{/if}
</form>
