import React from "react";
import { Repo } from "../../services/types";
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";

import {
	RepoDescription,
	RepoLanguage,
	RepoLastUpdate,
	RepoName,
	RepoStars,
	Wrapper,
} from "./styles";

export interface ComponentProps {
	repo: Repo;
}

export const RepoCard = (props: ComponentProps) => {
	const {
		name,
		description,
		html_url,
		language,
		stargazers_count,
		updated_at,
	} = props.repo;
	return (
		<Wrapper
			data-testid="repoCardWrapper"
			onClick={() => window.open(html_url, "_blank")}
			title="visit repository"
		>
			<RepoName>{name}</RepoName>
			<RepoDescription>{description}</RepoDescription>
			<RepoLanguage>Language: {language || "-"}</RepoLanguage>
			<RepoStars>
				<AiOutlineStar />
				{stargazers_count}
			</RepoStars>
			<RepoLastUpdate>
				<AiOutlineClockCircle />
				{updated_at ? new Date(updated_at).toLocaleDateString() : "-"}
			</RepoLastUpdate>
		</Wrapper>
	);
};
