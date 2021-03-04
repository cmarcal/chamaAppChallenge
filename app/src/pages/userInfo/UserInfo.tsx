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
	UserLocation,
	FollowInfo,
	GithubLink,
} from "./styles";
import { useLocation, useHistory } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
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
					<UserBio>
						<b>Bio:</b> {user.bio ?? "-"}
					</UserBio>
					<UserEmail>
						<b>Email:</b> {user.email ?? "-"}
					</UserEmail>
					<UserLocation>
						<b>Location:</b> {user.location ?? "-"}
					</UserLocation>
					<FollowInfo>
						{user.followers} followers - {user.following} following
					</FollowInfo>
					<GithubLink href={user.html_url} target="_blank">
						Send me to Github <GoLinkExternal />
					</GithubLink>
				</AdditionalProfileInfo>
			</PersonalInfo>
			<ReposInfo></ReposInfo>
		</Wrapper>
	);
};

export default UserInfo;
