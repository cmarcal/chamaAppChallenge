import axios, { AxiosResponse } from "axios";
import { Repo, User } from "./types";

const baseURL = "https://api.github.com";

const httpGet = (route: string) => {
	const endpoint = baseURL + route;
	return axios.get(endpoint);
};

export const getUser = (username: string): Promise<AxiosResponse<User>> =>
	httpGet(`/users/${username}`);

export const getUserRepos = (
	reposUrl: string
): Promise<AxiosResponse<Repo[]>> => axios.get(reposUrl);
