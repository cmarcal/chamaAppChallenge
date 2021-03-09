import React, { useEffect, useState } from "react";
import { HistoryCard } from "../../components";
import { getHistoryFromLocalStorage } from "../../helpers/helpers";
import { Title, Wrapper } from "./styles";

export default function SearchHistory() {
	const [historyList, setHistoryList] = useState<string[]>([]);
	useEffect(() => {
		setHistoryList(getHistoryFromLocalStorage());
	}, []);
	return (
		<Wrapper>
			<Title>PREVIOUSLY SEARCHED TERMS</Title>
			{historyList.map((item) => (
				<HistoryCard searchedTerm={item} />
			))}
		</Wrapper>
	);
}
