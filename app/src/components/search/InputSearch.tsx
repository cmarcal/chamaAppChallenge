import React, { ChangeEvent } from "react";
import { Icon, Input, Wrapper } from "./styles";
import { FcSearch } from "react-icons/fc";

export interface ComponentProps {
	inputValue: string;
	handleChange(e: ChangeEvent<HTMLInputElement>): void;
	placeholderText?: string;
}

export const InputSearch = (props: ComponentProps) => {
	const { inputValue, handleChange, placeholderText } = props;
	return (
		<Wrapper data-testid="inputSearchWrapper">
			<Icon>
				<FcSearch />
			</Icon>
			<Input
				data-testid="inputElem"
				placeholder={placeholderText ?? "Search..."}
				value={inputValue}
				onChange={handleChange}
			/>
		</Wrapper>
	);
};
