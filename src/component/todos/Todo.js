import React from "react";
import {
	BadgeCheckIcon,
	PencilAltIcon,
	TrashIcon,
} from "@heroicons/react/solid";

const Todo = (props) => {
	let { isCompleted, title, id } = props.todo;
	return (
		<div className="flex items-center justify-between bg-white rounded-md shadow-sm p-2">
			<div className="flex items-center">
				<div
					className={`hover:cursor-pointer hover:text-green-300 ${
						isCompleted ? "text-green-500" : "text-yellow-300"
					}`}
				>
					<BadgeCheckIcon
						className="h-5 w-5"
						onClick={() => props.completionHandler(id)}
					/>
				</div>
				<h4
					className={` text-sm ml-2 ${
						isCompleted ? "line-through text-gray-300" : "text-gray-500"
					}`}
				>
					{title}
				</h4>
			</div>
			<div className="flex items-center">
				<div className="hover:cursor-pointer text-gray-200 hover:text-green-500">
					<PencilAltIcon className="h-5 w-5" />
				</div>
				<div className="hover:cursor-pointer text-gray-200 hover:text-red-500">
					<TrashIcon
						className="h-5 w-5"
						onClick={() => props.deleteHandler(id)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Todo;
