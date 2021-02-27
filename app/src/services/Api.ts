import axios, { AxiosResponse } from "axios";

const baseURL = "https://api.github.com";

const httpGet = (route: string) => {
	const endpoint = baseURL + route;
	return axios.get(endpoint);
};

export const getUser = (username: string): Promise<AxiosResponse> =>
	httpGet(`/users/${username}`);
