const NewToDoBtn = ({ handleToggle }) => {
	return (
		<div className='text-center mt-4'>
			<button
				className='text-lg bg-blue-400 px-2 py-1 rounded-md m-1 text-white '
				onClick={handleToggle}
			>
				+ NEW TODO
			</button>
		</div>
	);
};
export default NewToDoBtn;
