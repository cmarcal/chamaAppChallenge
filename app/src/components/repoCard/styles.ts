import styled from "styled-components";

export const Wrapper = styled.li`
	border: 1px solid #4786ff;
	width: 100%;
	height: 120px;
	list-style-type: none;
	color: inherit;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
	border-radius: 4px;
`;

export const RepoName = styled.div`
	width: 100%;
	padding: 4px;
	font-size: 1.2rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	box-sizing: border-box;
`;

export const RepoDescription = styled.p`
	font-size: 0.7rem;
	padding: 4px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	box-sizing: border-box;
`;
