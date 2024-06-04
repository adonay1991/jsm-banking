import React from "react";

export const TotalBalanceBox = ({
	accounts = [],
	totalBanks,
	totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
	return (
		<section className="total-balance">
			<div className="total-balance-chart"></div>
		</section>
	);
};
