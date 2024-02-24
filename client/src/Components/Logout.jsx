import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../App";

const Logout = () => {
	const url = config.endpoint;

	const history = useHistory();
	useEffect(() => {
		fetch(`${url}/logout`, {
			method: "GET",
			headers: {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			},
		})
			.then((res) => {
				history.push("/login", { replace: true });
				if (res.status != 200) {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch((err) => {
				window.alert(err);
			});
	}, []);

	return (
		<>
			<div>logout</div>
		</>
	);
};

export default Logout;
