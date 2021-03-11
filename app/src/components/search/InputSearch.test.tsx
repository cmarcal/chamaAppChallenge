import React from "react";
import { render, screen } from "@testing-library/react";
import { InputSearch, ComponentProps } from "./InputSearch";
import userEvent from "@testing-library/user-event";

let props: ComponentProps;

beforeEach(() => {
	props = {
		inputValue: "Test search",
		handleChange: () => {},
	};
});
const renderComponent = () => render(<InputSearch {...props} />);

it("should render component wrapper", () => {
	renderComponent();
	expect(screen.getByTestId("inputSearchWrapper")).toBeInTheDocument();
});

it("should contain searched term text", () => {
	renderComponent();
	expect(screen.getByDisplayValue(props.inputValue)).toBeInTheDocument();
});

it("should show placeholder default text", () => {
	renderComponent();
	expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
});

it("should show placeholder props text", () => {
	props.placeholderText = "Placeholder from props test";
	renderComponent();
	expect(
		screen.getByPlaceholderText(props.placeholderText)
	).toBeInTheDocument();
});

it("should call handler function when clicked", () => {
	const mockChangeFunction = jest.fn();
	props.handleChange = mockChangeFunction;
	renderComponent();
	const input = screen.getByTestId("inputElem");

	const term = "test term";
	userEvent.type(input, term);
	expect(mockChangeFunction).toHaveBeenCalledTimes(term.length);
});
