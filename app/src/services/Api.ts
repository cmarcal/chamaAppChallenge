import axios, { AxiosResponse } from "axios";
import { User } from "./types";

const baseURL = "https://api.github.com";

const httpGet = (route: string) => {
	const endpoint = baseURL + route;
	return axios.get(endpoint);
};

export const getUser = (username: string): Promise<AxiosResponse<User>> =>
	httpGet(`/users/${username}`);
