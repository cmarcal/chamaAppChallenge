import React from "react";
import { Icon, Input, Wrapper } from "./styles";
import { FaSearch } from "react-icons/fa";

interface ComponentProps {}

export const InputSearch = (props: ComponentProps) => {
	return (
		<Wrapper>
			<Icon>
				<FaSearch />
			</Icon>
			<Input placeholder="Search a github username..." />
		</Wrapper>
	);
};
