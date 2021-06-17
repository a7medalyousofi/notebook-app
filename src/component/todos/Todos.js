import React from "react";
import Todo from "./Todo";
import { ExclamationIcon } from "@heroicons/react/solid";
const Todos = (props) => {
	return (
		<React.Fragment>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
			</div>
			{props.todos.length === 0 ? (
				<div className="flex flex-col justify-items-center items-center text-gray-500">
					<span className="flex items-center">
						<ExclamationIcon className="h-5 w-5" /> Opps
					</span>
					<h3 className="mb-1">There is no notes yet !</h3>
					<h3 className="text-sm bg-gray-200 py-2 px-4 rounded-lg">
						Create your own notes now 📝
					</h3>
				</div>
			) : null}
		</React.Fragment>
	);
};
export default Todos;
