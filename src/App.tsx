import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/OnOff";

function App() {
  let [collapsed, setCollapsed] = useState(false)
  let [on, setOn] = useState(false)
  const collapsedAccordion = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <Accordion collapsed={collapsed} onClick={collapsedAccordion}/>
      <OnOff on={on} setOn={setOn}/>
    </div>
  );
}

export default App;
