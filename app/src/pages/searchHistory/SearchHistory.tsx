import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HistoryCard, Loading } from "../../components";
import { getHistoryFromLocalStorage } from "../../helpers/helpers";
import { useGetUserInfo } from "../../hooks";
import { Title, Wrapper, BackButton, LoadingWrapper } from "./styles";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function SearchHistory() {
	const history = useHistory();

	const [historyList, setHistoryList] = useState<string[]>([]);

	const { user, isLoading, getUser } = useGetUserInfo();

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
		<Wrapper data-testid="searchHistoryWrapper">
			<BackButton data-testid="backBtn" onClick={() => history.goBack()}>
				<IoArrowBackCircleOutline />
			</BackButton>
			<Title>PREVIOUSLY SEARCHED TERMS</Title>
			{historyList.map((item, i) => (
				<HistoryCard
					key={i}
					searchedTerm={item}
					handleClick={() => {
						!isLoading && handleClick(item);
					}}
				/>
			))}
			{isLoading && (
				<LoadingWrapper>
					<Loading color="#f1f1f1" />
				</LoadingWrapper>
			)}
		</Wrapper>
	);
}
