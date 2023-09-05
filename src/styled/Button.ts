import styled from "styled-components";

type ButtonType = {
  on?: boolean
}

export const ButtonOff = styled.button<ButtonType>`
  width: 30px;
  height: 30px;
  display: inline-block;
  background-color: ${props => props.on ? 'white' : 'red'};
  border: 1px solid black;
`

export const ButtonOn = styled.button<ButtonType>`
  width: 30px;
  height: 30px;
  display: inline-block;
  background-color: ${props => props.on ? 'green' : 'white'};
  border: 1px solid black;
  border-left: 0;
`