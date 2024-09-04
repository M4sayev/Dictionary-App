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
        console.log(wordData);
        console.log(wordData[0].word);
        console.log(wordData[0].meanings[0].partOfSpeech);
        setData(wordData);
    }
    foo();
    
    const styleIpa = {
        marginInline: '7px'
    };
    // const word = wordData[0].word;
    // const IPA = wordData[0].phonetic,
    // speechPart = wordData[0].meanings[0].partOfSpeech,
    const def = 'connected with thinking or conscious mental processes',
    eg = 'Some of her cognitive functions have been impaired.';

    const state = 'on';
    return (
        <div>
            {   data ? 
                (boxVisible == true ?
                    (<div className={ 'box-transformed' }> 
                        <div>
                            <p className='selected-word'>{ wordData[0].word }</p>
                            <img src={Audio}/>
                        </div>
                        <p className='ipa-part'> { wordData[0].meanings[0].partOfSpeech } <i style={ styleIpa }> { wordData[0].phonetic }</i></p>
                        <div className='definition'>{ def }</div>
                        <div className='example'>{ eg }</div>
                    </div>)
                :
                    (<div className={ 'box' }> 
                        <div>
                            <p className='selected-word'>Cognitive</p>
                            <img src={Audio}/>
                        </div>
                        <p className='ipa-part'> { wordData[0].meanings[0].partOfSpeech } <i style={ styleIpa }> /{ wordData[0].phonetic }/</i></p>
                        <div className='definition'>{ def }</div>
                        <div className='example'>{ eg }</div>
                    </div>)) : <div>Loading...</div>
            }  
        </div>
    );
}
 
export default Word;