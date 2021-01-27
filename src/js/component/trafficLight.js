import React, { useState } from "react";

const trafficLight = () => {
	const [redLight, setRedLight] = useState("off");
	const [yellowLight, setYellowLight] = useState("off");
	const [greenLight, setGreenLight] = useState("off");

	const changeLight = color => {
		if (color === "red") {
			setRedLight("on");
			setYellowLight("off");
			setGreenLight("off");
		} else if (color === "yellow") {
			setYellowLight("on");
			setGreenLight("off");
			setRedLight("off");
		} else if (color === "green") {
			setGreenLight("on");
			setRedLight("off");
			setYellowLight("off");
		}
	};

	return (
		<>
			<div className="bg-dark" />
			<div className="container bg-dark">
				<div
					className={`light bg-danger ${redLight}`}
					onClick={() => changeLight("red")}
				/>
				<div
					className={`light bg-warning ${yellowLight}`}
					onClick={() => changeLight("yellow")}
				/>
				<div
					className={`light bg-success ${greenLight}`}
					onClick={() => changeLight("green")}
				/>
			</div>
		</>
	);
};
export default trafficLight;
