import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	box-shadow: 0px 10px 20px -12px rgb(0 0 0);
	position: relative;
	border-radius: 64px;
	background: #fff;
	overflow-x: hidden;
	display: flex;

	@media (max-width: 768px) {
		border-radius: 40px;
		width: 90%;
	}
`;

export const Icon = styled.div`
	width: 72px;
	height: 72px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;

	@media (max-width: 1024px) {
		width: 64px;
		height: 64px;
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		width: 48px;
		height: 48px;
		font-size: 1rem;
	}
`;

export const Input = styled.input`
	padding: 0 20px 0 0;
	height: 72px;
	background: #fff;
	color: #2c2c2c;
	font-size: 1.5rem;
	border-radius: 2px;
	-webkit-box-shadow: none;
	box-shadow: none;
	border: none;
	width: 95%;
	outline: none;

	@media (max-width: 1024px) {
		height: 64px;
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		height: 48px;
		font-size: 1rem;
	}
`;
