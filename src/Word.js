import { jsx } from 'react/jsx-runtime';
import './Word.css';
import Audio from './audio.png'
import { useEffect, useState } from 'react';

const Word = (props) => {
    const boxVisible = props.visibility;
    const wordData = props.wordData;
    const alert = props.alert;
    
    const styleIpa = {
        marginInline: '7px'
    };

    const state = 'on';

    const Innerpart = () => {
        if (boxVisible) {
            return (
            <div className={ 'box-transformed' }> 
                <div>
                    <p className='selected-word'>{ wordData[0].word }</p>
                    <img src={Audio}/>
                </div>
                <p className='ipa-part'> { wordData[0].meanings[0].partOfSpeech } <i style={ styleIpa }> { wordData[0].phonetic }</i></p>
                <div className='definition'>{ wordData[0].meanings[0].definitions[0].definition }</div>
                <div className='example'>{ wordData[0].meanings[0].definitions[0].example  }</div>
            </div>
            )
        } else {
            return (<div className={ 'box' }> 
                <div>
                    <p className='selected-word'>Cognitive</p>
                    <img src={Audio}/>
                </div>
                <p className='ipa-part'> { wordData[0].meanings[0].partOfSpeech } <i style={ styleIpa }> /{ wordData[0].phonetic }/</i></p>
                <div className='definition'>{ wordData[0].meanings[0].definitions[0].definition }</div>
                <div className='example'>{ wordData[0].meanings[0].definitions[0].example }</div>
            </div>)
        }
    };

    /*  
        <div className={ 'box-transformed' }> 
            <div style={{ textAlign: "center", color: "var(--darkish-green)", margin: "5em 7.5em"}}> { alert }</div> 
        </div> 
    */

    return (
        <div> 
            { (wordData != null && wordData != undefined) ? <Innerpart /> : <div className='box-transformed '>  </div> }
        </div>
    );
}
 
export default Word;