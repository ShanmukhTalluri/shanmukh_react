import React, { useState } from 'react';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

function App() {
  const [num,setnum]=useState(0);
const inc=()=>{
  setnum(num+1)
}
const dec=()=>{
  setnum(num-1)
}


  return(<>
    <div class="main">
      <div class="inner">
      <br/>
      <br/>
      <div class="hone">
        <h1>{num}</h1>
        </div>
        <br/>
        <br/>
        <br/>
        <div class="btn">
        <button onClick={inc}>increment</button>
        <AccessibilityIcon/>
        <button onClick={dec}>decrement</button>
        </div>

      </div>
    </div>
  </>

  );
  
};

export default App;
