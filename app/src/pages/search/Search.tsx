import React, { FormEvent, useEffect, useState } from "react";
import { InputSearch, Loading } from "../../components";
import { useDebounce, useGetUserInfo } from "../../hooks";
import { ErrorMessage, SeeHistory, SeeHistoryIcon, Wrapper } from "./styles";
import { useHistory } from "react-router-dom";
import { saveToLocalStorage } from "../../helpers/helpers";
import { VscHistory } from "react-icons/vsc";

export default function Search() {
	const history = useHistory();
	const [inputValue, setInputValue] = useState<string>("");
	const { user, error, isLoading, getUser } = useGetUserInfo();
	const debouncedValue = useDebounce(inputValue, 1000);

	useEffect(() => {
		if (user) {
			saveToLocalStorage(inputValue);
			history.push("/userInfo", user);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	useEffect(() => {
		if (debouncedValue) {
			getUser(debouncedValue);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		getUser(inputValue);
	};

	return (
		<Wrapper onSubmit={handleSubmit} data-testid="searchWrapper">
			<SeeHistory
				data-testid="searchHistoryButton"
				type="button"
				onClick={() => history.push("search-history")}
			>
				SEE PREVIOUS SEARCHS
				<SeeHistoryIcon>
					<VscHistory />
				</SeeHistoryIcon>
			</SeeHistory>
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
