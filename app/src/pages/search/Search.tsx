import React, { FormEvent, useEffect, useState } from "react";
import { InputSearch } from "../../components";
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

	return (
		<Wrapper onSubmit={handleSubmit}>
			<InputSearch
				inputValue={inputValue}
				handleChange={(e) => setInputValue(e.target.value)}
				placeholderText="Search a github username and hit Enter..."
			/>
			{error && <ErrorMessage>Error: {error}</ErrorMessage>}
		</Wrapper>
	);
}
