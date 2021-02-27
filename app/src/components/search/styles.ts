import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	box-shadow: 0px 5px 20px -12px rgb(0 0 0 / 34%);
	-webkit-box-shadow: 0px 5px 20px -12px rgb(0 0 0 / 34%);
	position: relative;
	border-radius: 40px;
	background: #fff;
	overflow-x: hidden;
	display: flex;
`;

export const Icon = styled.div`
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input`
	padding: 0 20px 0 0;
	height: 48px;
	background: #fff;
	color: #000;
	font-size: 14px;
	border-radius: 2px;
	-webkit-box-shadow: none;
	box-shadow: none;
	border: none;
	width: 95%;
`;
