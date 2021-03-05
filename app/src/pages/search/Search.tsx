import React, { FormEvent, useEffect, useState } from "react";
import { InputSearch, Loading } from "../../components";
import { useGetUserInfo } from "../../hooks";
import { ErrorMessage, Wrapper } from "./styles";
import { useHistory } from "react-router-dom";

export default function Search() {
	const history = useHistory();
	const [inputValue, setInputValue] = useState<string>("");
	const { user, error, isLoading, getUser } = useGetUserInfo();

	useEffect(() => {
		if (user) history.push("/userInfo", user);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		getUser(inputValue);
	};
	console.log(isLoading);

	return (
		<Wrapper onSubmit={handleSubmit}>
			<InputSearch
				inputValue={inputValue}
				handleChange={(e) => setInputValue(e.target.value)}
				placeholderText="Search a github username and hit Enter..."
			/>
			{isLoading && <Loading color="#f1f1f1" />}
			{error && <ErrorMessage>Error: {error}</ErrorMessage>}
		</Wrapper>
	);
}
