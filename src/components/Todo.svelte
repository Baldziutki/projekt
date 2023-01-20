<script>
	import {
		deleteTodo,
		toggleTodoCompleted,
		updateTodo,
		updateDateTodo,
		updateImportanceTodo
	} from '../stores/todoStore';

	export let todo;
	let importance = ['Not Important', 'Important', 'Very important'];
	let counter = 0;
	let importanceUser = todo.importance;
	for (const i in importance) {
		if (importanceUser === importance[i]) {
			counter = i;
		}
	}

	const changeImportance = async (imp) => {
		let localCounter = (counter + 1) % 3;
		counter = localCounter;
	};
</script>

<div class="flex px-4">
	<li
		class="bg-slate-600 flex items-center shadow-sm border border-slate-400 rounded-lg my-2 py-2 px-12 w-full"
	>
		<div class="grow flex flex-col px-4">
			<div class="w-full">
				<input
					name="completed"
					type="checkbox"
					bind:checked={todo.completed}
					on:change={() => toggleTodoCompleted(todo.id, todo.completed)}
					class="mr-2 form-checbkox h-5 w-5 bg-slate-600 "
				/>
				<input
					required
					class="p-1 my-1 px-1 flex-1 bg-slate-600 text-gray-200 text-lg {todo.completed ? 'line-through' : ''}"
					bind:value={todo.text}
					on:change={() => updateTodo(todo.text, todo.id)}
				/>
			</div>
			<div class="w-full">
				<input
					type="date"
					class="w-full px-2"
					bind:value={todo.date}
					on:change={() => updateDateTodo(todo.date, todo.id)}
				/>
				<button
					type="button"
					class="w-full shadow-sm rounded-b-lg bg-purple-900 hover:bg-purple-600 text-white px-2"
					on:click={changeImportance(todo.importance)}
					on:click={() => updateImportanceTodo(importance[counter], todo.id)}
				>
					{importance[counter]}
				</button>
			</div>
		</div>
		<div class="">
			<button
				type="button"
				class=" text-sm bg-slate-900 hover:bg-red-800 text-white py-2 px-2 rounded focus:outline-none focus:shadow-outline"
				on:click={() => deleteTodo(todo.id)}
			>
				<img class="w-5" src="/1f5d1.svg" alt="Delete" />
			</button>
		</div>
	</li>
</div>
