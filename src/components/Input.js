import userEvent from '@testing-library/user-event';
import './styles/Input.css';
import Word from './Word';

const Input = (props) => {

    const text = 'Search';
    const place_holder = 'Type your word';
    
    const boxVisible = props.visibilityArray[0],
    setBoxVisible = props.visibilityArray[1];

    const word = (props.wordArray[0]).toLowerCase(),
    setWord = props.wordArray[1];
    
    const setWordData = props.setWordData;
    const setIsInError = props.setIsInError;

    const tracker = props.trackerArray[0],
    setTracker = props.trackerArray[1];

    const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    const fetchWord = async () => {    
        try {
            const res = await fetch(`${URL}${word}`);
            if (res.ok) {
                const result = await res.json();
                setWordData(result);
                setIsInError(false);
            } else {
                setIsInError(true);
                setTracker(!tracker);
            }
        } catch {
            console.log('Promise rejected');
        } 
    }  

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
        setBoxVisible(true);
        setWord('')
    }

    return (  
        <div className='input'>
            <input className='form' placeholder={place_holder} onKeyUp={ (event) => {displayValue(event)} } value={ word } onChange ={ changeValue } spellCheck='false'/>
            <button className='search-button' onClick={ search }>{ text }</button>
        </div>
    );
}
 
export default Input;