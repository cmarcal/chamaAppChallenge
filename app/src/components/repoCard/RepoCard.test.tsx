import React from "react";
import { render, screen } from "@testing-library/react";
import { RepoCard, ComponentProps } from "./RepoCard";
import userEvent from "@testing-library/user-event";

let props: ComponentProps;

beforeEach(() => {
	props = {
		repo: {
			name: "Card name",
			description: "test description",
			html_url: "test_url",
			stargazers_count: 384,
			language: "test language",
			updated_at: "2021-01-12T00:17:21Z",
		},
	};
});
const renderComponent = () => render(<RepoCard {...props} />);

it("should render component wrapper", () => {
	renderComponent();
	expect(screen.getByTestId("repoCardWrapper")).toBeInTheDocument();
});

it("should display props elements", () => {
	renderComponent();

	expect(screen.getByText(props.repo.name)).toBeInTheDocument();
	expect(screen.getByText(props.repo.description)).toBeInTheDocument();
	expect(
		screen.getByText("Language: " + props.repo.language)
	).toBeInTheDocument();
	expect(screen.getByText(props.repo.stargazers_count)).toBeInTheDocument();
	expect(
		screen.getByText(new Date(props.repo.updated_at).toLocaleDateString())
	).toBeInTheDocument();
});

it("should call window.open when clicked", () => {
	global.open = jest.fn();
	renderComponent();
	const card = screen.getByTestId("repoCardWrapper");
	userEvent.click(card);
	expect(global.open).toHaveBeenCalledWith(props.repo.html_url, "_blank");
});
