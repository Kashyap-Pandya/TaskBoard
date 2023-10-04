import { useState } from "react";
import { nanoid } from "nanoid";
import AddNewTask from "./Components/AddNewTask";
import Header from "./Components/Header";
import Title from "./Components/Title";
import NewToDoBtn from "./Components/NewToDoBtn";
import ToDo from "./Components/ToDo";

export default function App() {
	const [taskName, setTaskName] = useState("");
	const [taskDes, setTaskDes] = useState("");
	const [showModel, setShowModel] = useState(false);
	const [todo, setTodo] = useState([]);

	const addToDo = (taskName, taskDes) => {
		const newToDo = {
			name: taskName,
			description: taskDes,
			id: nanoid(),
		};
		setTodo((prevTodos) => [...prevTodos, newToDo]);
	};
	const handleToggle = () => {
		setShowModel((prev) => !prev);
	};

	const deleteNote = (id) => {
		const deletedNotes = todo.filter((todos) => todos.id !== id);
		setTodo(deletedNotes);
	};
	return (
		<main className='m-4'>
			<div className={showModel ? "dim-background" : ""}>
				<Header />
				<NewToDoBtn handleToggle={handleToggle} />
				<Title />
			</div>
			{showModel && (
				<AddNewTask
					handleClick={handleToggle}
					showModel={showModel}
					setShowModel={setShowModel}
					taskDes={taskDes}
					setTaskDes={setTaskDes}
					taskName={taskName}
					setTaskName={setTaskName}
					addToDo={() => addToDo(taskName, taskDes)}
				/>
			)}
			<ToDo
				todos={todo}
				setTodo={setTodo}
				deleteNote={deleteNote}
				showModel={showModel}
				setShowModel={setShowModel}
				taskDes={taskDes}
				setTaskDes={setTaskDes}
				taskName={taskName}
				setTaskName={setTaskName}
			/>
		</main>
	);
}
