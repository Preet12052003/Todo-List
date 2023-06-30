import React, { useState } from "react";

export default function Navbar(props) {

  const darkstyles = {
    backgroundColor: 'rgb(33, 33, 37)',
    color: 'white'
  }

  const lightstyles = {
    backgroundColor: 'rgb(148, 148, 217)',
    color: '#333'
  }

  const [check , setCheck] = useState(false)

  function handleCheck(e){
    setCheck(e.target.value)
    // console.log(props.darkMode);
    props.toggle()
  }

  return (
    <nav className="nav" style={props.darkMode ? lightstyles : darkstyles}>
        <span className="head">Todo - List</span>
        
        <div class="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={handleCheck} value={check}/>
            <label class="form-check-label" for="flexSwitchCheckChecked" >Dark</label>
        </div>
    </nav>
  );
}
