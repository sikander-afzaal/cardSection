import React, { useEffect, useState } from "react";

const Countdown = ({ countDownDate }) => {
	const [expired, setExpired] = useState(false);
	const [date, setDate] = useState([]);

	function convertTZ(date, tzString) {
		return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
	}


	useEffect(() => {
		const intervalFunc = setInterval(() => {
			let now = new Date();
			now = convertTZ(now, "Asia/singapore").getTime()

			var distance = countDownDate - now;

			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setDate([days, hours, minutes, seconds]);

			if (distance < 0) {
				clearInterval(intervalFunc);
				setExpired(true);
			}
		}, 1000);
		return () => {
			clearInterval(intervalFunc);
		};
	}, [countDownDate]);

	return (
		<>
			{expired ? (
				<h2 className="ms-sm-4">Oopps! Date Expired</h2>
			) : (
				<ul className="countdown">
					<li>
						<div className="item">
							<span>DAYS</span>
							<h3 className="title">{date[0]}</h3>
						</div>
					</li>
					<li>
						<div className="item">
							<span>HOURS</span>
							<h3 className="title">{date[1]}</h3>
						</div>
					</li>
					<li>
						<div className="item">
							<span>MINUTES</span>
							<h3 className="title">{date[2]}</h3>
						</div>
					</li>
					<li>
						<div className="item">
							<span>SECONDS</span>
							<h3 className="title">{date[3]}</h3>
						</div>
					</li>
				</ul>
			)}
		</>
	);
};

export default Countdown;
