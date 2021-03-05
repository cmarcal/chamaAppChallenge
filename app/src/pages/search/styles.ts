import styled from "styled-components";

export const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: 16px;
`;

export const ErrorMessage = styled.span`
	font-size: 1.3rem;

	@media (max-width: 1024px) {
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;
