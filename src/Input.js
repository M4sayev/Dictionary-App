import userEvent from '@testing-library/user-event';
import './Input.css';
import { useState, useRef, useEffect } from 'react';
import Word from './Word';

const Input = (props) => {
    
    const setBoxVisible = props.setVisibility;
    const boxVisible = props.visibility;
    const setWord = props.setWord;
    const word = (props.word).toLowerCase();
    const setWordData = props.setWordData;
    const setAlert = props.setAlert;

    const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    const fetchWord = async () => {
        
        try {
            const res = await fetch(`${URL}${word}`);
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                setWordData(result);
                setAlert('');
            } else {
                setAlert('No such word found');
            }
        } catch {
            console.log('Promise rejected');
        }
        

       
    }  

    const text = 'Search';
    const place_holder = 'Type your word';

    function displayValue(event) {
        if (event.key === 'Enter') {
            search();
        }
    }
    function changeValue(event) {
        setWord(event.target.value);
    }
    
    function search() {
        fetchWord();
        setBoxVisible(!boxVisible);
    }

    return (  
        <div className='input'>
            <input className='form' placeholder={place_holder} onKeyUp={ (event) => {displayValue(event)} } value={ word } onChange ={ changeValue } spellCheck='false'/>
            <button className='search-button' onClick={ search }>{ text }</button>
        </div>
    );
}
 
export default Input;