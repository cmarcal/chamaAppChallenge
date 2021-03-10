import styled from "styled-components";

export const Wrapper = styled.li`
	border: 1px solid #808080;
	box-shadow: 0px 0px 10px -5px rgb(0 0 0);
	width: 100%;
	height: 120px;
	list-style-type: none;
	color: inherit;
	position: relative;
	padding: 4px 8px;
	box-sizing: border-box;
	&:hover {
		cursor: pointer;
		border-left: 4px solid #406ae0;
	}
	border-radius: 4px;
`;

export const RepoName = styled.p`
	width: 100%;
	margin: 0;
	font-size: 1.2rem;
	font-weight: 800;
	color: #2c2c2c;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	box-sizing: border-box;
`;

export const RepoDescription = styled.p`
	font-size: 0.8rem;
	margin: 0;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	box-sizing: border-box;
`;

export const RepoLanguage = styled.span`
	position: absolute;
	bottom: 4px;
	font-size: 0.7rem;
`;

export const RepoStars = styled.div`
	position: absolute;
	right: 8px;
	bottom: 4px;
	font-size: 0.7rem;
	display: flex;
	gap: 2px;

	& svg {
		align-self: center;
	}
`;

export const RepoLastUpdate = styled.div`
	position: absolute;
	right: 8px;
	top: 4px;
	font-size: 0.7rem;
	display: flex;
	gap: 2px;
	& svg {
		align-self: center;
	}
`;
