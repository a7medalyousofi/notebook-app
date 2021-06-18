import React, { useState } from "react";
import {
	BadgeCheckIcon,
	PencilAltIcon,
	TrashIcon,
} from "@heroicons/react/solid";
import Modal from "./Model";

const Todo = (props) => {
	const { title, description, isCompleted, id } = props.todo;
	const [show, setShow] = useState(false);

	const closeModal = () => {
		setShow(false);
	};
	const openModal = () => {
		setShow(true);
	};

	return (
		<React.Fragment>
			{show ? (
				<Modal closeModal={closeModal} deleteHandler={props.deleteHandler} />
			) : null}
			<div className="flex gap-3 justify-between bg-white rounded-md shadow-sm p-4">
				<div>
					<BadgeCheckIcon
						className={`h-5 w-5 hover:cursor-pointer hover:text-green-300 ${
							isCompleted ? "text-green-500" : "text-yellow-300"
						}`}
						onClick={() => props.completionHandler(id)}
					/>
				</div>
				<div className="flex-grow">
					<h4
						className={`text-md font-bold mb-2 ${
							isCompleted ? "line-through text-gray-300" : "text-gray-500"
						}`}
					>
						{title}
					</h4>
					<p
						className={`text-sm leading-6 ${
							isCompleted ? "line-through text-gray-300" : "text-gray-500"
						}`}
					>
						{description}
					</p>
				</div>
				<div className="flex flex-col justify-evenly">
					<button
						className="transition duration-300 hover:cursor-pointer focus:outline-none p-2 h-full hover:text-white bg-green-50 text-green-500 hover:bg-green-500 rounded-t-lg"
						onClick={() => props.editHandler(props.todo)}
					>
						<PencilAltIcon className="h-5 w-5" />
					</button>
					<button
						className="transition duration-300 hover:cursor-pointer focus:outline-none p-2 h-full hover:text-white bg-red-50 text-red-500 hover:bg-red-500 rounded-b-lg"
						// onClick={() => props.deleteHandler(id)}
						onClick={openModal}
					>
						<TrashIcon className="h-5 w-5" />
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Todo;
