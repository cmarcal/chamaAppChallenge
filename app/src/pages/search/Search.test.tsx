import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";

const renderComponent = () => render(<Search />);

it("should render component wrapper", () => {
	renderComponent();
	expect(screen.getByTestId("searchWrapper")).toBeInTheDocument();
});

it("should render search bar placeholder text", () => {
	renderComponent();
	expect(
		screen.getByPlaceholderText("Search a github username and hit Enter...")
	).toBeInTheDocument();
});

it("should render search bar element", () => {
	renderComponent();
	expect(screen.getByTestId("inputSearchWrapper")).toBeInTheDocument();
});

it("should render search history button", () => {
	renderComponent();
	expect(screen.getByTestId("searchHistoryButton")).toBeInTheDocument();
});

it("should change input value when user types", () => {
	renderComponent();
	const input = screen.getByTestId("inputElem");

	const term = "test term";
	userEvent.type(input, term);

	expect(screen.getByDisplayValue(term)).toBeInTheDocument();
});
