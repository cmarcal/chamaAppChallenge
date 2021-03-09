import { useState } from "react";
import { getUserRepos } from "../services/Api";
import { Repo } from "../services/types";

interface HookReturn {
	isLoading: boolean;
	error: string;
	repos: Repo[];
	getRepos(reposUrl: string): void;
}

export const useGetUserRepos = (): HookReturn => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [repos, setRepos] = useState<Repo[]>([]);

	const getRepos = (reposUrl: string) => {
		setIsLoading(true);
		getUserRepos(reposUrl)
			.then(({ data }) => setRepos(data))
			.catch((err) => setError(err.response.data.message))
			.finally(() => setIsLoading(false));
	};

	return { repos, isLoading, error, getRepos };
};
