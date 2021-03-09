export type User = {
	login: string;
	avatar_url: string;
	html_url: string;
	repos_url: string;
	name: string;
	location: string;
	email: string;
	bio: string;
	public_repos: string;
	followers: number;
	following: number;
};

export type Repo = {
	name: string;
	html_url: string;
	description: string;
};
