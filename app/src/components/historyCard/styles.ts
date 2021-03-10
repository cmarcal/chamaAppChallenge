import styled from "styled-components";

export const Wrapper = styled.div`
	width: 80%;
	padding: 16px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	background-color: #f1f1f1;
	border-radius: 8px;
	font-size: 1.4rem;
	box-shadow: 0px 10px 20px -12px rgb(0 0 0);
	@media (max-width: 768px) {
		font-size: 1rem;
	}
	&:hover {
		cursor: pointer;
		text-decoration: underline #406ae0;
	}
`;
