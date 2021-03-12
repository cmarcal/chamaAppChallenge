import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState("");

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(handler);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return debouncedValue;
};
