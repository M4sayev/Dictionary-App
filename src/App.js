import './App.css'
import Input from "./Input";
import Word from './Word';
import { useState } from 'react';

function App() {
  const [className, setClassName] = useState('box');
  const [boxVisible, setBoxVisible] = useState(false);
  
  return (
    <div className="app">
      <h1>My Dictionary</h1>
      <Input function={ setClassName } setVisibility={ setBoxVisible } visibility={ boxVisible }/>
      <Word state={ className } visibility={ boxVisible }/>
    </div>
  );

}
document.body.style.backgroundColor = '#d8a7b1';


export default App;