import styled from "styled-components";

type LampType = {
  on?: boolean
}

export const Lamp = styled.div<LampType>`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: inline-block;
  margin-left: 10px;
  border: 1px solid black;
  background-color: ${props => props.on ? 'green' : 'red'};
`