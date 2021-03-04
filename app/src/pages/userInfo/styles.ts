import styled from "styled-components";

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	background-color: #f1f1f1;
	display: grid;
	grid-template-columns: 2fr 3fr;
	grid-template-rows: 0.5fr 9.5fr;
	grid-template-areas:
		"topbar topbar"
		"personInfo reposInfo";

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: 0.5fr 3.5fr 6fr;
		grid-template-areas: "topbar" "personInfo" "reposInfo";
	}
`;

export const Topbar = styled.div`
	grid-area: topbar;
	display: flex;
`;

export const BackButton = styled.button`
	outline: none;
	border: none;
	cursor: pointer;
	font-size: 2rem;
`;

export const PersonalInfo = styled.div`
	grid-area: personInfo;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
	border: 1px solid green;
	@media (max-width: 768px) {
		flex-direction: row;
	}

	@media (max-width: 450px) {
		flex-direction: column;
	}
`;

export const MainProfileInfo = styled.div`
	@media (max-width: 768px) {
		width: 40%;
	}
	@media (max-width: 450px) {
		width: 100%;
		text-align: center;
	}
`;

export const ProfileImage = styled.img`
	max-width: 240px;
	border-radius: 120px;
	@media (max-width: 768px) {
		max-width: 180px;
		border-radius: 90px;
	}
`;

export const Username = styled.h2``;
export const Login = styled.span``;

export const AdditionalProfileInfo = styled.div`
	align-self: baseline;
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	@media (max-width: 450px) {
		align-self: center;
	}
`;

export const UserBio = styled.span``;
export const UserEmail = styled.span``;

export const ReposInfo = styled.div`
	grid-area: reposInfo;
	border: 1px solid tomato;
`;
