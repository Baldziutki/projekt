import { writable } from "svelte/store";
import { supabase } from "../supabase.js";

export const todos = writable([]);

export const loadTodos = async (filter, isCompleted) => {
	let select = supabase.from('todos').select('*')
	if(filter.length !== 0){
		select = select.in('importance', filter);
	}
	const { data, error } = await select.eq('completed', isCompleted).order('id');
	if (error) {
		return console.error(error);
	}
	todos.set(data);
}

export const resetTodos = () => {
	todos.set([]);
}

export const addTodo = async (text, user_id, date, importance) => {
	console.log(user_id);
	const { data, error } = await supabase.from('todos').insert([{ text, user_id, completed: false, date, importance}]).select();

	if (error) {
		return console.error(error);
	}

	todos.update(cur => [...cur, data[0]]);
};

export const updateTodo = async (text, id) => {
	const { error } = await supabase.from('todos').update([{ text }]).eq('id', id);
	if (error) {
		return console.error(error);
	}
}

export const updateDateTodo = async (date, id) => {
	const { error } = await supabase.from('todos').update([{ date }]).eq('id', id);
	if (error) {
		return console.error(error);
	}
}

export const updateImportanceTodo = async (importanceValue, id) => {
	const { error } = await supabase.from('todos').update([{ importance: importanceValue }]).eq('id', id);
	if (error) {
		return console.error(error);
	}
}

export const deleteTodo = async (id) => {
	const { error } = await supabase.from('todos').delete().match({ id });

	if (error) {
		return console.error(error);
	}

	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = async (id, currentState) => {
	const { error } = await supabase.from('todos').update({ completed: currentState }).match({ id })
	if (error) {
		return console.error(error);
	}

};
