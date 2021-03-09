import styled from "styled-components";

export const Loading = styled.div<{color: string}>`
	border: 4px solid ${({color})=> color};
	border-top: 4px solid #000;
	border-radius: 50%;
	width: 24px;
	height: 24px;
	animation: spin 1s linear infinite;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
