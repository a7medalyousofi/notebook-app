import TodoList from "./views/TodoList-fun";
import Header from "./component/Header";

function App() {
	return (
		<div className="container mx-auto">
			<Header />
			<TodoList />
		</div>
	);
}

export default App;
