import React, { useState } from 'react';
import './App.css';
import ColorBlock from './colorBlock';
import ColorForm from './colorForm'


function App() {
  let [colors, setColors]  = useState([
    'violet', 'blue', 
    'lightblue', 'green', 
    'greenyellow', 'yellow', 
    'orange', 'red'
  ])
  const addColor = (newColor) => {
    setColors([colors, newColor])
  }

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })
 
  return (
    <div className="App">
     {colorMap}
     <ColorForm addColor= {addColor}/>
    </div>
  );
}

export default App;
