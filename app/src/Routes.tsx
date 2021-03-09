import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Search from "./pages/search/Search";
import UserInfo from "./pages/userInfo/UserInfo";
import SearchHistory from "./pages/searchHistory/SearchHistory";

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={Search} exact path="/" />
			<Route component={UserInfo} path="/userInfo" />
			<Route component={SearchHistory} path="/search-history" />
		</BrowserRouter>
	);
};

export default Routes;
