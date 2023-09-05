import React from 'react';
import {ButtonOff, ButtonOn} from "../styled/Button";
import {Lamp} from "../styled/Lamp";

type OnOffPropsType = {
  on: boolean
  setOn: (on: boolean)=> void
}

export const OnOff = (props: OnOffPropsType) => {
  const clickedOn = () => {
    props.setOn(true)
  }

  const clickedOff = () => {
    props.setOn(false)
  }

  return (
    <div>
      <ButtonOff on={props.on} onClick={clickedOff}>off</ButtonOff>
      <ButtonOn on={props.on} onClick={clickedOn}>on</ButtonOn>
      <Lamp on={props.on}></Lamp>
    </div>
  );
};
