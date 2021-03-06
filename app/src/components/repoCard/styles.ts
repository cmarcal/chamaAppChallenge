import styled from "styled-components";

export const Wrapper = styled.a`
	border: 1px solid #4786ff;
	width: 45%;
	height: 120px;
	text-decoration: none;
	color: inherit;
	&:hover {
		cursor: pointer;
		background-color: #4786ff;
		color: #fff;
	}
	text-overflow: ellipsis;
	overflow: hidden;
	border-radius: 4px;
`;

export const RepoName = styled.span`
	padding: 4px;
	font-size: 1.2rem;
`;

export const RepoDescription = styled.p`
	font-size: 0.7rem;
	padding: 4px;
`;
