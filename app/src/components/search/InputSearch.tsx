import React, { ChangeEvent } from "react";
import { Icon, Input, Wrapper } from "./styles";
import { FcSearch } from "react-icons/fc";

interface ComponentProps {
	inputValue: string;
	handleChange(e: ChangeEvent<HTMLInputElement>): void;
	placeholderText?: string;
}

export const InputSearch = (props: ComponentProps) => {
	const { inputValue, handleChange, placeholderText } = props;
	return (
		<Wrapper>
			<Icon>
				<FcSearch />
			</Icon>
			<Input
				placeholder={placeholderText ?? "Search..."}
				value={inputValue}
				onChange={handleChange}
			/>
		</Wrapper>
	);
};
