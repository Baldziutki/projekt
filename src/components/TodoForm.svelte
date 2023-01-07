<script>

    import {addTodo} from "../stores/todoStore.js";
    let todo = '';
    export let session; 
    const handleSubmit = () => {
        addTodo(todo,session.user.id)
        todo = '';
        console.log(session)
    }
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb2">
    <label class="font-bold mb-2 text-gray-800" for="todo">
        Todo
    </label>
    <input type="text" 
    bind:value={todo} 
    name="todo" 
    placeholder="Wpisz co potrzebujesz zrobic" 
    class="appearance-none shadow-sm border-2 border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
    />
    </div>
    <button type="submit" class="mt-1 w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
        Submit
    </button>

</form>