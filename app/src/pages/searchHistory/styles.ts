import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 32px;
`;

export const BackButton = styled.button`
	outline: none;
	border: none;
	cursor: pointer;
	font-size: 2rem;
	color: #f1f1f1;
	background-color: transparent;
	align-self: flex-start;
`;

export const Title = styled.h1`
	color: #f1f1f1;
	margin: 0 auto;
	@media (max-width: 768px) {
		font-size: 1.4rem;
	}
`;

export const LoadingWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	background-color: #000;
	opacity: 0.5;
	display: flex;
	justify-content: center;
	align-items: center;
`;
