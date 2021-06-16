import TodoList from "./views/TodoList";
import Header from "./component/Header";

function App() {
	return (
		<div className="container mx-auto text-center">
			<Header />
			<TodoList />
		</div>
	);
}

export default App;
