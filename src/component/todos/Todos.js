import React from "react";
import Todo from "./Todo";
import { ExclamationIcon } from "@heroicons/react/solid";
const Todos = (props) => {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
			{props.todos.map((todo) => {
				return (
					<Todo
						key={todo.id}
						todo={todo}
						addHandler={props.addHandler}
						editHandler={props.editHandler}
						deleteHandler={props.deleteHandler}
						completionHandler={props.completionHandler}
					/>
				);
			})}
			{props.todos.length === 0 ? (
				<div className="flex flex-col justify-items-center items-center text-gray-500">
					<span className="flex items-center">
						<ExclamationIcon className="h-5 w-5" /> Opps
					</span>
					<h3>There is no todos yet !</h3>
				</div>
			) : null}
		</div>
	);
};
export default Todos;
