import React from "react";
import { render, screen } from "@testing-library/react";
import { HistoryCard, ComponentProps } from "./HistoryCard";
import userEvent from "@testing-library/user-event";

let props: ComponentProps;

beforeEach(() => {
	props = {
		searchedTerm: "Test term",
		handleClick: () => {},
	};
});
const renderComponent = () => render(<HistoryCard {...props} />);

it("should render component wrapper", () => {
	renderComponent();
	expect(screen.getByTestId("historyCardWrapper")).toBeInTheDocument();
});

it("should contain searched term text", () => {
	renderComponent();

	expect(screen.queryByText(props.searchedTerm)).toBeInTheDocument();
});

it("should hover the card and show search icon", () => {
	renderComponent();

	const card = screen.getByTestId("historyCardWrapper");
	userEvent.hover(card);

	const icon = screen.getByTestId("searchIcon");

	expect(icon).toBeInTheDocument();
});

it("should call handler function when clicked", () => {
	const mockClickFunction = jest.fn();
	props.handleClick = mockClickFunction;
	renderComponent();
	const card = screen.getByTestId("historyCardWrapper");

	userEvent.click(card);
	expect(mockClickFunction).toHaveBeenCalledTimes(1);
});
