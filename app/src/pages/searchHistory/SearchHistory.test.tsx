import React from "react";
import { act, render, screen } from "@testing-library/react";
import SearchHistory from "./SearchHistory";
import * as helpers from "../../helpers/helpers";

const mockHistory = () => ["test1", "test2"];

const fetchLocalStorage = () =>
	jest
		.spyOn(helpers, "getHistoryFromLocalStorage")
		.mockImplementationOnce(mockHistory);

const renderComponent = () => render(<SearchHistory />);

it("should render component wrapper", () => {
	renderComponent();
	expect(screen.getByTestId("searchHistoryWrapper")).toBeInTheDocument();
});

it("should render back button", () => {
	renderComponent();
	expect(screen.getByTestId("backBtn")).toBeInTheDocument();
});

it("should render page title", () => {
	renderComponent();
	expect(screen.getByText("PREVIOUSLY SEARCHED TERMS")).toBeInTheDocument();
});

it("should render history cards correctly", async () => {
	fetchLocalStorage();
	await act(async () => {
		renderComponent();
	});

	const cards = screen.getAllByTestId("historyCardWrapper");
	expect(cards.length).toBe(2);
});
