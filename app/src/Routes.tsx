import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Search from "./pages/search/Search";

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={Search} exact path="/" />
			{/* <Route component={SearchHistory} path="/search-history" /> */}
		</BrowserRouter>
	);
};

export default Routes;
