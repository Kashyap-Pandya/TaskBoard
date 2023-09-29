import ToDos from "./ToDos";

const ToDo = ({ todos }) => {
	return (
		<div>
			{todos.map((todo) => {
				return <ToDos key={todo.id} {...todo} />;
			})}
		</div>
	);
};

export default ToDo;
