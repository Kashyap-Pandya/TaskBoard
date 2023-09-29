import ToDos from "./ToDos";

const ToDo = ({ todos, deleteNote }) => {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<ToDos
						key={todo.id}
						{...todo}
						deleteNote={deleteNote}
						id={todo.id}
					/>
				);
			})}
		</div>
	);
};

export default ToDo;
