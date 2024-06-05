import React from "react";
import { HeaderBox } from "../../components/HeaderBox";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar";

const Home = () => {
	const loggedIn = {
		firstName: "Adonay",
		lastName: "Rodriguez",
		email: "alambrito@jakajaka.com",
	};

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
				RECENT TRANSACTIONS
			</div>
			<RightSideBar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 300 }, { currentBalance: 400 }]}
			/>
		</section>
	);
};

export default Home;
