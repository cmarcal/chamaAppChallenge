import React, { useState } from "react";
import { Wrapper } from "./styles";
import { FcSearch } from "react-icons/fc";

export interface ComponentProps {
	searchedTerm: string;
}

export const HistoryCard = (props: ComponentProps) => {
	const { searchedTerm } = props;
	const [onHover, setOnHover] = useState(false);

	return (
		<Wrapper
			onMouseEnter={() => setOnHover(true)}
			onMouseLeave={() => setOnHover(false)}
		>
			{searchedTerm}
			{onHover && <FcSearch />}
		</Wrapper>
	);
};
