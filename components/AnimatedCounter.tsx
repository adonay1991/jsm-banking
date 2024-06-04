"use client";

import React from "react";
import CountUp from "react-countup";

export const AnimatedCounter = ({ amount }: { amount: number }) => {
	return (
		<div className="w-full">
			<CountUp decimal="," prefix="$" duration={2} decimals={2} end={amount} />
		</div>
	);
};
