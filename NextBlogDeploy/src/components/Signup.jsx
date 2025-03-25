"use client";
import { useActionState } from "react";
import PropTypes from "prop-types";

export function Signup({ signupAction }) {
	const [state, formAction] = useActionState(signupAction, {});
	return (
		<form action={formAction}>
			<div>
				<label htmlFor="username">Username: </label>
				<input type="text" name="username" id="username" />
			</div>
			<br />
			<div>
				<label htmlFor="password">Password: </label>
				<input type="password" name="password" id="password" />
			</div>
			<br />
			<input type="submit" value="Sign Up" />
			{state.error ? <strong> Error signing up: {state.error}</strong> : null}
		</form>
	);
}

Signup.propTypes = {
	signupAction: PropTypes.func.isRequired
};
