import React from "react";
import { Icon, Input, Wrapper } from "./styles";
import { FcSearch } from "react-icons/fc";

interface ComponentProps {}

export const InputSearch = (props: ComponentProps) => {
	return (
		<Wrapper>
			<Icon>
				<FcSearch />
			</Icon>
			<Input placeholder="Search a github username..." />
		</Wrapper>
	);
};
