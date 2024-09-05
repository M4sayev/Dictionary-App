import './App.css'
import Input from "./Input";
import Word from './Word';
import { useState } from 'react';

function App() {
  const [ boxVisible, setBoxVisible ] = useState(false);
  const [ word, setWord ] = useState('');
  const [ wordData, setWordData ] = useState(null);

  return (
    <div className="app">
      <h1>My Dictionary</h1>
      <Input setVisibility={ setBoxVisible } visibility={ boxVisible } setWord={ setWord } setWordData={ setWordData } word={word}/>
      <Word visibility={ boxVisible } wordData={ wordData }/>
    </div>
  );

}
document.body.style.backgroundColor = '#d8a7b1';


export default App;