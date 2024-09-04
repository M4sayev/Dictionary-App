import userEvent from '@testing-library/user-event';
import './Input.css';
import { useState, useRef, useEffect } from 'react';
import Word from './Word';


const Input = (props) => {
    
    const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    const setClassName = props.function;
    const [inputValue, setInputValue] = useState('');
    const [isActive, setIsActive] = useState(false);
    const setBoxVisible = props.setVisibility;
    const boxVisible = props.visibility;
    const setWord = props.setWord;
    const word = (props.word).toLowerCase();
    const setWordData = props.setWordData;

    const text = 'Search';
    const place_holder = 'Type your word';

    function saveWordInput() {
        setWord(inputValue);
        setInputValue('');
    }
    function displayValue(event) {
        if (event.key === 'Enter') {
            saveWordInput();
            search();
        }
    }
    function changeValue(event) {
        setInputValue(event.target.value);
    }
    
    function search() {
        saveWordInput();
        console.log(word);
        fetch(`${URL}${word}`).then((res) => res.json()).then((data) => {
            setWordData(data);
            console.log(data);
        });
        setBoxVisible(!boxVisible);
    }

    return (  
        <div className='input'>
            <input className='form' placeholder={place_holder} onKeyDown={ (event) => {displayValue(event)} } value={ inputValue } onChange ={ changeValue } spellCheck='false'/>
            <button className='search-button' onClick={ search }>{ text }</button>
        </div>
    );
}
 
export default Input;