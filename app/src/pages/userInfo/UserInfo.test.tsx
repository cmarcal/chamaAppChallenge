import React from "react";
import { act, render, screen } from "@testing-library/react";
import UserInfo from "./UserInfo";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import * as api from "../../services/Api";

const mockRepoList = (): any =>
	Promise.resolve({
		data: [
			{
				name: "repo1",
				html_url: "repo1_url",
				description: "repo1 description",
				stargazers_count: 1,
				language: "repo1 language",
				updated_at: "2021-01-12T00:17:21Z",
			},
			{
				name: "repo2",
				html_url: "repo2_url",
				description: "repo2 description",
				stargazers_count: 2,
				language: "repo2 language",
				updated_at: "2021-01-22T00:17:21Z",
			},
		],
	});

const mockEmptyRepoList = (): any =>
	Promise.resolve({
		data: [],
	});
const fetchRepos = () =>
	jest.spyOn(api, "getUserRepos").mockImplementationOnce(mockRepoList);

const fetchEmptyRepos = () =>
	jest.spyOn(api, "getUserRepos").mockImplementationOnce(mockEmptyRepoList);

const mockUser = {
	login: "test",
	avatar_url: "",
	html_url: "test_url",
	repos_url: "test_repo_url",
	name: "test name",
	location: "test location",
	email: "email@test",
	bio: "test bio",
	followers: 12,
	following: 20,
};
const renderWithRouter = () => {
	const history = createMemoryHistory();
	history.push("/userInfo", mockUser);

	render(
		<Router history={history}>
			<UserInfo />
		</Router>
	);
};

it("should render component wrapper", async () => {
	fetchRepos();
	await act(async () => {
		renderWithRouter();
	});
	expect(screen.getByTestId("userInfoWrapper")).toBeInTheDocument();
});

it("should render back button", async () => {
	fetchRepos();
	await act(async () => {
		renderWithRouter();
	});
	expect(screen.getByTestId("backBtn")).toBeInTheDocument();
});

it("should render user info correctly", async () => {
	fetchRepos();

	await act(async () => {
		renderWithRouter();
	});

	expect(screen.getByText(mockUser.login)).toBeInTheDocument();
	expect(screen.getByText(mockUser.name)).toBeInTheDocument();
	expect(screen.getByText(mockUser.location)).toBeInTheDocument();
	expect(screen.getByText(mockUser.bio)).toBeInTheDocument();
	expect(screen.getByText(mockUser.email)).toBeInTheDocument();
	expect(screen.getByText(/12 followers/i)).toBeInTheDocument();
	expect(screen.getByText(/20 following/i)).toBeInTheDocument();
	expect(screen.getByTestId("githubLink")).toHaveAttribute(
		"href",
		mockUser.html_url
	);
});

it("should render repo cards correctly", async () => {
	fetchRepos();

	await act(async () => {
		renderWithRouter();
	});

	const cards = screen.getAllByTestId("repoCardWrapper");
	expect(cards.length).toBe(2);
});

it("should render repo list empty message", async () => {
	fetchEmptyRepos();

	await act(async () => {
		renderWithRouter();
	});

	expect(
		screen.getByText("There are no public repos for this user yet")
	).toBeInTheDocument();
});
