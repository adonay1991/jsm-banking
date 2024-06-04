import React from "react";
import { HeaderBox } from "../../components/HeaderBox";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";

const Home = () => {
	const loggedIn = { firstName: "Adonay" };

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn.firstName || "Guest"}
						subtext="Access and manage your account and transactions effieciently"
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1240.9}
					/>
				</header>
			</div>
		</section>
	);
};

export default Home;
