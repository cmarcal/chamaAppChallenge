import React from "react";
import { User } from "../../services/types";
import {
	Wrapper,
	PersonalInfo,
	ReposInfo,
	Topbar,
	BackButton,
	ProfileImage,
	Username,
	Login,
	MainProfileInfo,
	AdditionalProfileInfo,
	UserBio,
	UserEmail,
} from "./styles";
import { useLocation, useHistory } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const UserInfo = () => {
	const { state: user } = useLocation<User>();
	const history = useHistory();
	console.log("User", user);

	return (
		<Wrapper>
			<Topbar>
				<BackButton onClick={() => history.goBack()}>
					<IoArrowBackCircleOutline />
				</BackButton>
			</Topbar>
			<PersonalInfo>
				<MainProfileInfo>
					<ProfileImage src={user.avatar_url} />
					<Username>{user.name}</Username>
					<Login>{user.login}</Login>
				</MainProfileInfo>
				<AdditionalProfileInfo>
					<UserBio>Bio: {user.bio ?? "-"}</UserBio>
					<UserEmail>Email: {user.email ?? "-"}</UserEmail>
				</AdditionalProfileInfo>
			</PersonalInfo>
			<ReposInfo></ReposInfo>
		</Wrapper>
	);
};

export default UserInfo;
