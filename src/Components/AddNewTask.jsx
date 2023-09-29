import { AiOutlineClose } from "react-icons/ai";

const AddNewTask = ({
	setShowModel,
	taskDes,
	setTaskDes,
	taskName,
	setTaskName,
	addToDo,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		addToDo();
		setTaskDes("");
		setTaskName("");
		setShowModel(false);
	};

	return (
		<div
			className='z-2 px-4 py-6 bg-gray-200 m-[6rem] rounded-lg flex flex-col max-w-3xl mx-auto'
			onSubmit={handleSubmit}
		>
			<div className='flex justify-between items-center'>
				<h2 className='text-xl text-blue-600'>Add a new task</h2>
				<p
					className='bg-gray-300 p-1 cursor-pointer hover:bg-gray-400'
					onClick={() => setShowModel((prev) => !prev)}
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
						placeholder='Enter Your Task Title'
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
						placeholder='Task Description'
						onChange={(e) => setTaskDes(e.target.value)}
					/>
				</div>
				<button className='mt-4 bg-blue-400 h-[3rem] w-[10rem] self-end'>
					Add Task
				</button>
			</form>
		</div>
	);
};

export default AddNewTask;
