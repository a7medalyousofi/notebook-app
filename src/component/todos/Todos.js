import React from "react";
import Todo from "./Todo";
import { ExclamationIcon } from "@heroicons/react/solid";
const Todos = (props) => {
	return (
		<div className="mt-4 space-y-2">
			{props.todos.map((todo) => {
				return (
					<Todo
						todo={todo}
						key={todo.id}
						addHandler={props.addHandler}
						completionHandler={props.completionHandler}
						deleteHandler={props.deleteHandler}
					/>
				);
			})}
			{props.todos.length === 0 ? (
				<div className="flex flex-col items-center text-gray-500">
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
