import React, { useState } from "react";
import { Wrapper } from "./styles";
import { FcSearch } from "react-icons/fc";

export interface ComponentProps {
	searchedTerm: string;
	handleClick(): void;
}

export const HistoryCard = (props: ComponentProps) => {
	const { searchedTerm, handleClick } = props;
	const [onHover, setOnHover] = useState(false);

	return (
		<Wrapper
			data-testid="historyCardWrapper"
			onMouseEnter={() => setOnHover(true)}
			onMouseLeave={() => setOnHover(false)}
			onClick={handleClick}
		>
			{searchedTerm}
			{onHover && <FcSearch data-testid="searchIcon" />}
		</Wrapper>
	);
};
