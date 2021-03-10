import React from "react";
import { Repo } from "../../services/types";
import { RepoDescription, RepoName, Wrapper } from "./styles";

export interface ComponentProps {
	repo: Repo;
}

export const RepoCard = (props: ComponentProps) => {
	const { name, description, html_url } = props.repo;
	return (
		<Wrapper
			onClick={() => window.open(html_url, "_blank")}
			title="visit repository"
		>
			<RepoName>{name}</RepoName>
			<RepoDescription>{description}</RepoDescription>
		</Wrapper>
	);
};
