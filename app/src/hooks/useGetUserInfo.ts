import { useState } from "react";
import { getUser as getUserApi } from "../services/Api";
import { User } from "../services/types";

interface HookReturn {
	isLoading: boolean;
	error: string;
	user?: User;
	getUser(username: string): void;
}

export const useGetUserInfo = (): HookReturn => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [user, setUser] = useState<User>();

	const getUser = (username: string) => {
		setIsLoading(true);
		getUserApi(username)
			.then(({ data }) => setUser(data))
			.catch((err) => setError(err.response.data.message))
			.finally(() => setIsLoading(false));
	};

	return { user, isLoading, error, getUser };
};
