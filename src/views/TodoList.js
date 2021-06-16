import React, { useState } from "react";
import Todos from "../component/todos/Todos";
import TodosForm from "./../component/todos/TodosForm";
const TodoList = () => {
	const initialState = [
		{ id: 1, title: "Learn OOP", isCompleted: false },
		{ id: 2, title: "Learn OOP", isCompleted: true },
		{ id: 3, title: "Learn React", isCompleted: false },
		{ id: 4, title: "Practice", isCompleted: true },
	];
	const [todos, setTodos] = useState(initialState);

	const completionHandler = (id) => {
		const currentTodos = [...todos];
		const newTodos = currentTodos.map((ele) => {
			if (ele.id === id) {
				ele.isCompleted = !ele.isCompleted;
				return ele;
			}
			return ele;
		});
		setTodos(newTodos);
	};

	const deleteHandler = (id) => {
		const currentTodos = [...todos];
		const newTodos = currentTodos.filter((ele) => ele.id !== id);
		setTodos(newTodos);
	};

	const addHandler = (title) => {
		const newTodo = {
			id: Date.now(),
			title: title,
			isCompleted: false,
		};
		const newTodos = [...todos, newTodo];
		setTodos(newTodos);
	};

	return (
		<div className="container max-w-lg mx-auto bg-gray-100 p-4">
			<TodosForm addHandler={addHandler} />
			<Todos
				todos={todos}
				completionHandler={completionHandler}
				deleteHandler={deleteHandler}
			/>
		</div>
	);
};

export default TodoList;
