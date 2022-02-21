import React, {useEffect, useState} from 'react';
import './App.css';
import Swatch from './components/Swatch/swatch';
import rough from 'roughjs/bundled/rough.esm';

import {
  createElement,
  adjustElementCoordinates,
  cursorForPosition,
  resizedCoordinates,
  midPointBetween,
  getElementAtPosition,
} from './components/Element';

function App() {

  const [points, setPoints] = useState([]);
  

  return (
    <div className="App">
      <span>Writeboard</span>
      <Swatch/>


    </div>
  );
}

export default App;
