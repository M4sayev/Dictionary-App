import { jsx } from 'react/jsx-runtime';
import './Word.css';
import Audio from './audio.png'
import { useEffect, useState } from 'react';





const Word = (props) => {
    const className = props.state;
    const boxVisible = props.visibility;
    // const word = (props.word).toLowerCase();
    const wordData = props.wordData;
    // let wordData;
    
    // useEffect(() => {
    //     if (word != '') {
    //         fetch(`${URL}${word}`).then((res) => res.json()).then(data => {{
    //             return data;
    //         }})
    
    //         async function foo() {
    //             const res = await fetch(`${URL}${word}`);
    //             const result = await res.json();
    //             if (typeof result === typeof []) setWordData(result[0]);
    //             else setWordData(result);
    //             console.log(wordData)
    //         }
            
    //         foo();
    //     }
        
    // });
    
    const styleIpa = {
        marginInline: '7px'
    };

    const state = 'on';
    return (
        <div>
            {   (wordData != null && wordData != undefined) ? 
                (boxVisible == true ?
                    (<div className={ 'box-transformed' }> 
                        <div>
                            <p className='selected-word'>{ wordData[0].word }</p>
                            <img src={Audio}/>
                        </div>
                        <p className='ipa-part'> { wordData[0].meanings[0].partOfSpeech } <i style={ styleIpa }> { wordData[0].phonetic }</i></p>
                        <div className='definition'>{ wordData[0].meanings[0].definitions[0].definition }</div>
                        <div className='example'>{ wordData[0].meanings[0].definitions[0].example  }</div>
                    </div>)
                :
                    (<div className={ 'box' }> 
                        <div>
                            <p className='selected-word'>Cognitive</p>
                            <img src={Audio}/>
                        </div>
                        <p className='ipa-part'> { wordData[0].meanings[0].partOfSpeech } <i style={ styleIpa }> /{ wordData[0].phonetic }/</i></p>
                        <div className='definition'>{ wordData[0].meanings[0].definitions[0].definition }</div>
                        <div className='example'>{ wordData[0].meanings[0].definitions[0].example }</div>
                    </div>)) : <div style={{
                        textAlign: "center",
                        color: "var(--darkish-green)"
                    }}>Loading...</div>
            }  
        </div>
    );
}
 
export default Word;