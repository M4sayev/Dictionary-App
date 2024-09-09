import './styles/App.css'
import Input from "./Input";
import Word from './Word';
import { useState } from 'react';

function App() {
  const [ boxVisible, setBoxVisible ] = useState(false);
  const [ word, setWord ] = useState('');
  const [ wordData, setWordData ] = useState(null);
  const [ isInError, setIsInError ] = useState('');
  // to track how many times in an error block for useEffect
  const [ tracker, setTracker ] = useState(false);

  return (
    <div className="app">
      <h1>My Dictionary</h1>
      <Input visibilityArray ={[ boxVisible, setBoxVisible ]} wordArray={[ word, setWord ]} setWordData={ setWordData } setIsInError={ setIsInError } trackerArray ={[ tracker, setTracker ]}/>
      <Word visibilityArray ={[ boxVisible, setBoxVisible ]} wordData={ wordData } word={ word } isInError={ isInError } tracker={ tracker }/>
    </div>
  );

}

export default App;