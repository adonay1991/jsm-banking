import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePlaidLink } from "react-plaid-link";
import type { PlaidLinkOnSuccess, PlaidLinkOptions } from "react-plaid-link";
import { useRouter } from "next/navigation";
import { createLinkToken } from "@/lib/actions/user.actions";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
	const router = useRouter();
	const [token, setToken] = useState("");

	useEffect(() => {
		const getLinkToken = async () => {
			const data = await createLinkToken(user);
			setToken(data?.linkToken);
		};

		getLinkToken();
	}, [user]);

	const onSuccess = useCallback<PlaidLinkOnSuccess>(
		async (public_token: string) => {
			// await exchangePublicToken({
			// 	publicToken: public_token,
			// 	user,
			// });

			router.push("/");
		},
		[user],
	);

	const config: PlaidLinkOptions = {
		token,
		onSuccess,
	};

	const { open, ready } = usePlaidLink(config);

	return (
		<>
			{variant === "primary" ? (
				<Button
					className="plaidlink-primary"
					onClick={() => open}
					disabled={!ready}
				>
					Connect bank
				</Button>
			) : variant === "ghost" ? (
				<Button className="plaidlink-ghost"> Connect bank</Button>
			) : (
				<Button className="plaidlink-ghost"> Connect bank</Button>
			)}
		</>
	);
};

export default PlaidLink;
