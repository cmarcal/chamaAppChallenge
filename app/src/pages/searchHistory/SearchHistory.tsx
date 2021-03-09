import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HistoryCard } from "../../components";
import { getHistoryFromLocalStorage } from "../../helpers/helpers";
import { useGetUserInfo } from "../../hooks";
import { Title, Wrapper } from "./styles";

export default function SearchHistory() {
	const history = useHistory();

	const [historyList, setHistoryList] = useState<string[]>([]);

	const { user, error, isLoading, getUser } = useGetUserInfo();

	useEffect(() => {
		setHistoryList(getHistoryFromLocalStorage());
	}, []);

	useEffect(() => {
		if (user) {
			history.push("/userInfo", user);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const handleClick = (term: string) => {
		getUser(term);
	};

	return (
		<Wrapper>
			<Title>PREVIOUSLY SEARCHED TERMS</Title>
			{historyList.map((item) => (
				<HistoryCard
					searchedTerm={item}
					handleClick={() => handleClick(item)}
				/>
			))}
		</Wrapper>
	);
}
