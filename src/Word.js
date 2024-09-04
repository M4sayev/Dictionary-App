import { jsx } from 'react/jsx-runtime';
import './Word.css';
import Audio from './audio.png'
import { useState } from 'react';


let wordData;
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/liking').then((res) => res.json()).then(data => {{
    wordData = data;
}});


const Word = (props) => {
    const className = props.state;
    const boxVisible = props.visibility;

    const [ data, setData ] = useState(null);

    async function foo() {
        const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/liking');
        const result = await res.json();
        setData(wordData);
    }
    foo();
    
    const styleIpa = {
        marginInline: '7px'
    };

    const state = 'on';
    return (
        <div>
            {   data ? 
                (boxVisible == true ?
                    (<div className={ 'box-transformed' }> 
                        <div>
                            <p className='selected-word'>{ data[0].word }</p>
                            <img src={Audio}/>
                        </div>
                        <p className='ipa-part'> { data[0].meanings[0].partOfSpeech } <i style={ styleIpa }> { data[0].phonetic }</i></p>
                        <div className='definition'>{ data[0].meanings[0].definitions[0].definition }</div>
                        <div className='example'>{ data[0].meanings[0].definitions[0].example  }</div>
                    </div>)
                :
                    (<div className={ 'box' }> 
                        <div>
                            <p className='selected-word'>Cognitive</p>
                            <img src={Audio}/>
                        </div>
                        <p className='ipa-part'> { data[0].meanings[0].partOfSpeech } <i style={ styleIpa }> /{ data[0].phonetic }/</i></p>
                        <div className='definition'>{ data[0].meanings[0].definitions[0].definition }</div>
                        <div className='example'>{ data[0].meanings[0].definitions[0].example }</div>
                    </div>)) : <div>Loading...</div>
            }  
        </div>
    );
}
 
export default Word;