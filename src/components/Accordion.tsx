import React from 'react';
import {AccordionBody} from "./AccordionBody";

type PropsType = {
  collapsed: boolean
  onClick: ()=> void
}

export const Accordion = (props: PropsType) => {
  return (
    <div>
      <h1 onClick={props.onClick}>Развернуть список</h1>
      { props.collapsed ? <AccordionBody/> : ''}
    </div>
  );
};
