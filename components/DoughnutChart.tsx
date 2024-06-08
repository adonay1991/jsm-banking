"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
	const accountName = accounts.map((a) => a.name);
	const balances = accounts.map((a) => a.currentBalance);

	const data = {
		datasets: [
			{
				label: "bank",
				data: balances,
				backgroundColor: ["#0747B6", "#2265D8", "#2F91FA"],
			},
		],
		labels: accountName,
	};
	return (
		<Doughnut
			options={{
				cutout: "60%",
				plugins: {
					legend: {
						display: false,
					},
				},
			}}
			data={data}
		/>
	);
};
