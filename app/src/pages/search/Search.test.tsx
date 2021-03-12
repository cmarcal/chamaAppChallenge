import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";
import * as api from "../../services/Api";

const mockUser = (): any =>
	Promise.resolve({
		data: {
			login: "test",
			avatar_url: "",
			html_url: "test_url",
			repos_url: "test_repo_url",
			name: "test name",
			location: "",
			email: "email@test",
			bio: "",
			followers: 12,
			following: 20,
		},
	});

const fetchUser = () =>
	jest.spyOn(api, "getUser").mockImplementationOnce(mockUser);

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

it("should call fetch function when submit", async () => {
	fetchUser();
	await act(async () => {
		renderComponent();
	});

	const wrapper = screen.getByTestId("searchWrapper");

	const input = screen.getByTestId("inputElem");

	const term = "test term";
	userEvent.type(input, term);

	await act(async () => {
		fireEvent.submit(wrapper);
	});

	expect(api.getUser).toBeCalled();
});
