import { AiFillDelete } from "react-icons/ai";
import Timer from "./Timer";
const ToDos = ({ name, description, deleteNote, id }) => {
	return (
		<div className='border border-gray-600 rounded-md shadow-lg grid grid-cols-1 my-8 w-[300px] p-4'>
			<div className='flex justify-between items-center'>
				<h2 className='py-4 text-xl font-bold'>{name}</h2>
				<div className='bg-gray-200 py-1 px-3 justify-end items-start hover:bg-gray-400 cursor-pointer rounded-md'>
					Edit
				</div>
			</div>
			<h2> {description}</h2>
			<Timer />
			<button
				className='mt-4 flex justify-end'
				onClick={() => deleteNote(id)}
			>
				<AiFillDelete
					size={35}
					className='text-red-400 hover:text-red-600'
				/>
			</button>
		</div>
	);
};
export default ToDos;
