import React, { useState } from "react";
import { FilterIcon } from "@heroicons/react/solid";
const TodosForm = (props) => {
	const [newtTitle, setNewTitle] = useState("");
	const [newtDesc, setNewDesc] = useState("");

	const [editRender, setEditRender] = useState(false);

	if (props.mode === "edit" && !editRender) {
		setNewTitle(props.todos[0].title);
		setNewDesc(props.todos[0].description);
		setEditRender(true);
	}

	const newTitleHandler = (e) => {
		setNewTitle(e.target.value);
	};

	const newDescHandler = (e) => {
		setNewDesc(e.target.value);
	};

	const addNewTodoHandler = () => {
		let nTitle = newtTitle;
		let nDesc = newtDesc;
		setNewTitle("");
		setNewDesc("");
		setEditRender(false);
		return props.addHandler(nTitle, nDesc);
	};
	// let addButtonIcon = <PlusCircleIcon className="h-4 w-4 mr-1" />;
	let noteActionButton = (
		<h3 className="font-bold tracking-wider">CREATE NOTE</h3>
	);
	if (props.mode === "edit") {
		noteActionButton = <h3 className="font-bold tracking-wider">EDIT NOTE</h3>;
	}

	return (
		<div className="flex flex-col items-start space-y-2 mx-auto rounded-md shadow-sm bg-white p-4">
			<button
				className="flex items-center hover:cursor-pointer text-gray-400 hover:text-blue-500"
				onClick={props.filterUncompletedTask}
			>
				<FilterIcon className="h-5 w-5 " />{" "}
				<p className="ml-2">
					Filter Notes <span>(Returns uncompleted Notes.)</span>
				</p>
			</button>
			<div className="w-full space-y-2">
				<input
					type="text"
					value={newtTitle}
					maxLength="30"
					className="px-4 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md"
					placeholder="Type note title..."
					onChange={newTitleHandler}
				/>
				<textarea
					rows="5"
					type="text"
					value={newtDesc}
					className="px-4 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md"
					placeholder="Type note description..."
					onChange={newDescHandler}
				/>
			</div>
			<div className="w-full">
				<button
					type="submit"
					className="inline-flex w-full items-center justify-center py-2 px-4 shadow-sm sm:text-sm font-medium rounded-md text-white border border-indigo-400  bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-indigo-700 focus:outline-none"
					onClick={addNewTodoHandler}
					disabled={newtTitle.trim() && newtDesc.trim() ? false : true}
				>
					{noteActionButton}
				</button>
			</div>
		</div>
	);
};

export default TodosForm;
