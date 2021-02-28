import React, { FormEvent, useEffect, useState } from "react";
import { Container, InputSearch } from "../../components";
import { useGetUserInfo } from "../../hooks";
import { ErrorMessage, Wrapper } from "./styles";

export default function Search() {
	const [inputValue, setInputValue] = useState<string>("");
	const { user, error, isLoading, getUser } = useGetUserInfo();

	useEffect(() => {
		if (user) console.log(user);
	}, [user]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		getUser(inputValue);
	};

	return (
		<Container>
			<Wrapper onSubmit={handleSubmit}>
				<InputSearch
					inputValue={inputValue}
					handleChange={(e) => setInputValue(e.target.value)}
					placeholderText="Search a github username and hit Enter..."
				/>
				{error && <ErrorMessage>Error: {error}</ErrorMessage>}
			</Wrapper>
		</Container>
	);
}
