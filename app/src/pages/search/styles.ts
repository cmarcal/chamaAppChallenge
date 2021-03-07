import styled from "styled-components";

export const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: 16px;
`;

export const SeeHistory = styled.button`
	display: flex;
	align-items: center;
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;
	padding: 4px;
	gap: 4px;
	font-size: 1.2rem;
	margin-right: 32px;
	color: #f1f1f1;
	align-self: flex-end;
	@media (max-width: 1024px) {
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

export const SeeHistoryIcon = styled.span`
	font-size: 1.4rem;
	@media (max-width: 1024px) {
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
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
