import userEvent from '@testing-library/user-event';
import './Input.css';
import { useState, useRef, useEffect } from 'react';
import Word from './Word';


const Input = (props) => {
    
    const setClassName = props.function;
    const [inputValue, setInputValue] = useState('');
    const [isActive, setIsActive] = useState(false);
    const setBoxVisible = props.setVisibility;
    const boxVisible = props.visibility;

    const text = 'Search';
    const place_holder = 'Type your word';

    let word = '';

    function saveWordInput() {
        word = inputValue;
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

        setBoxVisible(!boxVisible);
        // if (!isActive) {
        //     setClassName('box-transformed');
        //     setIsActive(true);
        // } else {
        //     setClassName('box');
        //     setIsActive(false);
        // }
    }

    return (  
        <div className='input'>
            <input className='form' placeholder={place_holder} onKeyDown={ (event) => {displayValue(event)} } value={ inputValue } onChange ={ changeValue } spellCheck='false'/>
            <button className='search-button' onClick={ search }>{ text }</button>
        </div>
    );
}
 
export default Input;