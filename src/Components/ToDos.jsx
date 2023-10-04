import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import Timer from "./Timer";
import { useState } from "react";

const ToDos = ({
	name,
	description,
	deleteNote,
	id,
	todos,
	showModel,
	setShowModel,
	taskDes,
	setTaskDes,
	taskName,
	setTaskName,
	setTodo,
}) => {
	const [isEdit, setIsEdit] = useState(false);

	const editToggle = () => {
		setIsEdit(!isEdit);
	};

	const closeEditModel = () => {
		setIsEdit(false);
		setShowModel(false);
	};

	return (
		<div className=' relative border border-gray-600 rounded-md shadow-lg grid grid-cols-1 my-8 w-[300px] p-4'>
			<div className='flex justify-between items-center'>
				<h2 className='py-4 text-xl font-bold'>{name}</h2>
				<div>
					<button
						className='bg-gray-200 py-1 px-3 justify-end items-start hover:bg-gray-400 cursor-pointer rounded-md'
						onClick={editToggle}
					>
						Edit
					</button>
				</div>
			</div>
			<h2> {description}</h2>
			<Timer />
			{isEdit && (
				<div className=' absolute mt-[-1rem] z-2 px-4 py-6  bg-gray-200 rounded-lg flex flex-col max-w-3xl mx-auto'>
					<div className='flex justify-between items-center'>
						<h2 className='text-xl text-blue-600'>
							Update your task
						</h2>
						<p
							className='bg-gray-300 p-1 cursor-pointer hover:bg-gray-400'
							onClick={closeEditModel}
						>
							<AiOutlineClose size={25} />
						</p>
					</div>
					<form className='flex flex-col justify-center items-start'>
						<div className='my-4 flex flex-col w-[100%]'>
							<label htmlFor='taskName' className='text-lg '>
								Task Title:
							</label>
							<input
								className='mt-1 rounded-lg p-2'
								type='text'
								id='taskName'
								value={taskName}
								required
								placeholder='Update Your Task Title'
								onChange={(e) => setTaskName(e.target.value)}
							/>
						</div>
						<div className='my-4 flex flex-col w-[100%]'>
							<label htmlFor='taskDes' className='text-lg '>
								Task Description:
							</label>
							<textarea
								className='mt-1 p-2 rounded-lg'
								id='taskDes'
								value={taskDes}
								placeholder='Updated Task Description'
								onChange={(e) => setTaskDes(e.target.value)}
							/>
						</div>
						<div className='mt-4 cursor-pointer bg-blue-400 p-3 self-end text-center'>
							Update Task
						</div>
					</form>
				</div>
			)}
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
