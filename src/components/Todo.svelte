<script>
	import { deleteTodo, toggleTodoCompleted, updateTodo } from "../stores/todoStore";


    export let todo;
</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
    <input
        name="completed"
        type="checkbox"
        bind:checked={todo.completed}
        on:change={() => toggleTodoCompleted(todo.id,todo.completed)}
        class="mr-2 form-checbkox h-5 w-5"
    />
    <input class={`p-1 flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`} bind:value={todo.text} on:change={() => updateTodo(todo.text,todo.id)}> 
    <button
        type="button"
        class="ml-1 text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        on:click={() => deleteTodo(todo.id)}>
        Delete
    </button>
</li>