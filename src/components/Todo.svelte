<script>
	import { deleteTodo, toggleTodoCompleted, updateTodo } from '../stores/todoStore';

	export let todo;
</script>

<li
	class="bg-slate-600 flex items-center shadow-sm border border-slate-400 rounded-lg my-2 py-2 px-4"
>
	<input
		name="completed"
		type="checkbox"
		bind:checked={todo.completed}
		on:change={() => toggleTodoCompleted(todo.id, todo.completed)}
		class="mr-2 form-checbkox h-5 w-5 bg-slate-600"
	/>
	<input
		required
		class="p-1 flex-1 bg-slate-600 text-gray-200 {todo.completed ? 'line-through' : ''}"
		bind:value={todo.text}
		on:change={() => updateTodo(todo.text, todo.id)}
	/>
	<button
		type="button"
		class="ml-1 text-sm bg-slate-900 hover:bg-red-800 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
		on:click={() => deleteTodo(todo.id)}
	>
		<img class="w-5" src="/1f5d1.svg" alt="Delete" />
	</button>
</li>
