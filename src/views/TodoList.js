import React, { useState } from "react";
import Todos from "../component/todos/Todos";
import TodosForm from "./../component/todos/TodosForm";
const TodoList = () => {
	const allNotes = localStorage.getItem("localStorageTodos")
		? JSON.parse(localStorage.getItem("localStorageTodos"))
		: [];

	const [todos, setTodos] = useState(allNotes);
	const [activeTodo, setActiveTodo] = useState({});
	const [mode, setMode] = useState("addMode");

	const setNoteToLocalStorage = (todos) => {
		localStorage.setItem("localStorageTodos", JSON.stringify(todos));
	};

	const addHandler = (title, description) => {
		if (mode !== "edit") {
			const newTodo = {
				id: Date.now(),
				title: title,
				description: description,
				isCompleted: false,
			};

			const newTodos = [...todos, newTodo];
			setNoteToLocalStorage(newTodos);
			setTodos(newTodos);
		} else {
			const currentTodos = [...todos];
			const newTodos = currentTodos.map((note) => {
				if (note.id === activeTodo.id) {
					note.title = title;
					note.description = description;
					return note;
				}
				return note;
			});

			setNoteToLocalStorage(newTodos);
			setTodos(newTodos);
			setActiveTodo({});
			setMode("addMode");
		}
	};

	const editHandler = (todo) => {
		setMode("edit");
		setActiveTodo(todo);
	};

	const deleteHandler = (id) => {
		const currentTodos = [...todos];
		const newTodos = currentTodos.filter((ele) => ele.id !== id);
		setNoteToLocalStorage(newTodos);
		setTodos(newTodos);
	};

	const completionHandler = (id) => {
		const currentTodos = [...todos];
		const newTodos = currentTodos.map((ele) => {
			if (ele.id === id) {
				ele.isCompleted = !ele.isCompleted;
				return ele;
			}
			return ele;
		});
		setNoteToLocalStorage(newTodos);
		setTodos(newTodos);
	};

	const filterUncompletedTask = () => {
		mode === "not_filltered" ? setMode("addMode") : setMode("not_filltered");
	};
	let currentTodos = [...todos];
	if (mode === "not_filltered") {
		currentTodos = currentTodos.filter((todo) => !todo.isCompleted);
	}

	return (
		<div className="container mx-auto space-y-4 p-4">
			<TodosForm
				addHandler={addHandler}
				filterUncompletedTask={filterUncompletedTask}
				todos={mode !== "edit" ? currentTodos : [activeTodo]}
				mode={mode}
			/>
			<Todos
				todos={mode !== "edit" ? currentTodos : [activeTodo]}
				editHandler={editHandler}
				deleteHandler={deleteHandler}
				completionHandler={completionHandler}
			/>
		</div>
	);
};

export default TodoList;
