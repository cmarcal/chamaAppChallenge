import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 32px;
`;

export const Title = styled.h1`
	color: #f1f1f1;

	@media (max-width: 768px) {
		font-size: 1.4rem;
	}
`;
