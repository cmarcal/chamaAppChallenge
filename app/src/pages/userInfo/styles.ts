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
	border: 1px solid green;
`;

export const ReposInfo = styled.div`
	grid-area: reposInfo;
	border: 1px solid tomato;
`;
