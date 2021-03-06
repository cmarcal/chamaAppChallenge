export const saveToLocalStorage = (searchTerm: string): void => {
	const searchHistory = JSON.parse(
		localStorage.getItem("searchedTerms") || "[]"
	);
	searchHistory.unshift(searchTerm);
	localStorage.setItem("searchedTerms", JSON.stringify(searchHistory));
};
