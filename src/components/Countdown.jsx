import React, { useState, useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2025-11-13T23:59:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="">
			<div className="flex justify-center gap-[clamp(0.25rem,1vw,2rem)] flex-nowrap">
				{Object.entries(timeLeft).map(([label, value]) => (
					<div
						key={label}
						// Updated styling to match the image with gold accents
						className="bg-n-8/10 p-[clamp(0.5rem,2vw,2rem)] rounded-lg shadow-[0_0_15px_rgba(232,197,145,0.2)] border border-stroke-1 min-w-[clamp(50px,10vw,150px)] backdrop-blur-[10px] flex flex-col items-center justify-center"
					>
						{/* Updated text color and shadow to gold */}
						<div className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-color-3 font-sans [text-shadow:0_0_10px_rgba(232,197,145,0.5)] m-1">
							{value.toString().padStart(2, '0')}
						</div>
						{/* Updated label text color to white */}
						<span className="uppercase text-[clamp(0.5rem,1vw,1rem)] text-n-1 opacity-70 tracking-wider">
							{label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Countdown;