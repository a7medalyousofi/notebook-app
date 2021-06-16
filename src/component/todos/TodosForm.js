import React, { useState } from "react";
import { BadgeCheckIcon, PlusCircleIcon } from "@heroicons/react/solid";
const TodosForm = (props) => {
	const [newtTitle, setNewTitle] = useState("");

	const newTitleHandler = (e) => {
		setNewTitle(e.target.value);
	};

	const addNewTodoHandler = () => {
		let nTitle = newtTitle;
		setNewTitle("");
		return props.addHandler(nTitle);
	};

	return (
		<div className="todos__form flex items-center space-x-2 mx-auto rounded-md shadow-sm bg-white p-2">
			<div className="todos__form-icon hover:cursor-pointer  text-gray-200 hover:text-blue-500">
				<BadgeCheckIcon className="h-5 w-5 " />
			</div>
			<div className="todos__form-form w-full">
				<input
					type="text"
					value={newtTitle}
					className="px-4 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md"
					placeholder="Add new task..."
					onChange={newTitleHandler}
				/>
			</div>
			<div className="todos__form-submit">
				<button
					type="submit"
					className="inline-flex items-center justify-center py-2 px-4 shadow-sm sm:text-sm font-medium rounded-md text-white border border-indigo-400  bg-indigo-600 disabled:cursor-not-allowed hover:bg-indigo-700 focus:outline-none"
					onClick={addNewTodoHandler}
					disabled={newtTitle.trim() ? false : true}
				>
					<PlusCircleIcon className="h-4 w-4 mr-1" /> ADD
				</button>
			</div>
		</div>
	);
};

export default TodosForm;
