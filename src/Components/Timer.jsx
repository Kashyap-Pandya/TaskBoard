// import { useState } from "react";

// const Timer = () => {
// 	const [time, setTime] = useState("");
// 	const [isItRunning, setIsItRunning] = useState(false);
// 	return <div></div>;
// };
// export default Timer;

import { useEffect, useState } from "react";

const Timer = () => {
	const [timer, setTimer] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTimer((prev) => prev + 1000);
			}, 1000);
		} else if (!isRunning) {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isRunning]);

	const hours = Math.floor(timer / 3600000);
	const minutes = Math.floor((timer % 3600000) / 60000);
	const seconds = Math.floor((timer % 60000) / 1000);

	return (
		<div className='h-full mx-auto text-center'>
			<h2 className='p-2 bg-gray-300 w-[130px] mx-auto m-8 rounded-md text-xl font-medium'>
				{hours < 10 ? `0${hours}` : hours}:
				{minutes < 10 ? `0${minutes}` : minutes}:
				{seconds < 10 ? `0${seconds}` : seconds}
			</h2>

			<div>
				{isRunning ? (
					<button
						className='py-2 px-4 bg-gray-600 rounded-md text-white m-4 '
						onClick={() => setIsRunning(false)}
					>
						Stop
					</button>
				) : (
					<button
						className='py-2 px-4 bg-gray-600 rounded-md text-white m-4'
						onClick={() => setIsRunning(true)}
					>
						Start
					</button>
				)}

				<button
					className='py-2 px-4 bg-gray-600 rounded-md text-white m-4'
					onClick={() => {
						setTimer(0); // Reset the timer
						setIsRunning(false); // Stop the timer
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Timer;
