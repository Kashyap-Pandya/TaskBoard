import ToDos from "./ToDos";

const ToDo = ({
	todos,
	deleteNote,
	showModel,
	setShowModel,
	taskDes,
	setTaskDes,
	taskName,
	setTaskName,
	setTodo,
}) => {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<ToDos
						key={todo.id}
						name={todo.name}
						description={todo.description}
						todos={todo}
						setTodo={setTodo}
						deleteNote={deleteNote}
						showModel={showModel}
						setShowModel={setShowModel}
						taskDes={taskDes}
						setTaskDes={setTaskDes}
						taskName={taskName}
						setTaskName={setTaskName}
						id={todo.id}
					/>
				);
			})}
		</div>
	);
};

export default ToDo;
