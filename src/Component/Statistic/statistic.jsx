import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Statistic = () => {
	const data = [
		{ name: "Assignment 1 ", value: 58 },
		{ name: "Assignment 2 ", value: 50 },
		{ name: "Assignment 3 ", value: 60 },
		{ name: "Assignment 4", value: 53 },
		{ name: "Assignment 5 ", value: 56 },
		{ name: "Assignment 6 ", value: 60 },
		{ name: "Assignment 7 ", value: 60 },
		{ name: "Assignment 8 ", value: 60 },
	];

	return (
		<div className="flex justify-center items-center">
			<PieChart width={730} height={250}>
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={60}
					fill="#8884d8"
				/>

				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					innerRadius={70}
					outerRadius={80}
					fill="#82ca9d"
					label
				/>
				<Tooltip />
			</PieChart>
		</div>
	);
};

export default Statistic;
