import React from "react";
import { User } from "../../services/types";
import { Wrapper } from "./styles";
import { useLocation } from "react-router-dom";

const UserInfo = () => {
	const { state: user } = useLocation<User>();
	console.log("User", user);

	return <Wrapper></Wrapper>;
};

export default UserInfo;
