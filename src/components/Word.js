import { jsx } from 'react/jsx-runtime';
import './styles/Word.css';
import AudioImg from '../audio.png'
import { useEffect, useState } from 'react';

const Word = (props) => {
    const [ notFound, setNotFound ] = useState('');

    const boxVisible = props.visibilityArray[0],
    setBoxVisible = props.visibilityArray[1];


    const wordData = props.wordData;
    const word = props.word;
    const isInError = props.isInError;
    const tracker = props.tracker;
    
    const styleIpa = {marginInline: '7px'};
    
    function changeText() {
        setNotFound('No such word found')
        setBoxVisible(false);
        setTimeout(() => {
            setNotFound('');   
        }, 1000); 
    }

    const Innerpart = () => {

        function play() {

            if (wordData[0].phonetics[0] === undefined) {
                alert('No sound found');
            } else {
                const audio = new Audio(wordData[0].phonetics[0].audio);
                if (audio.src === 'http://localhost:3000/') alert('No sound found');
                else audio.play();
            }
        }

        /* <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <p className='selected-word'>{ wordData[0].word }</p>
                <img src={ AudioImg } onClick={ play }/>
            </div>
            <div className='definition-part'>
                <p className='ipa-part'> { wordData[0].meanings[0].partOfSpeech } <i style={ styleIpa }> { wordData[0].phonetic }</i></p>
                <div className='definition'>{ wordData[0].meanings[0].definitions[0].definition }</div>
                <div className='example'>{ wordData[0].meanings[0].definitions[0].example  }</div>
            </div>                 
        */

        if (wordData != null && wordData != undefined) {
                
            return (
                <div style={{
                    transform: boxVisible ? 'translateY(0)' : 'translateY(-100px)',
                }}
                className='box-transformed'
                >  
                    {wordData.map((definition, index) => (
                        <div key={ definition }>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <p className='selected-word'>{ wordData[index].word }</p>
                                <img src={ AudioImg } onClick={ play }/>
                            </div>
                            <div className='definition-part'>
                                <p className='ipa-part'> { wordData[index].meanings[0].partOfSpeech } <i style={ styleIpa }> { wordData[index].phonetic }</i></p>
                                <div className='definition'>{ wordData[index].meanings[0].definitions[0].definition }</div>
                                <div className='example'>{ wordData[index].meanings[0].definitions[0].example  }</div>
                            </div>  
                        </div>
                     ))}

                </div>
            )
        } else {
            <div className={ 'box-transformed' }> Word not found </div>
        }
    };

    useEffect(() => {
        if (isInError !== '' && isInError) changeText();
    }, [tracker]);

    return (
        <div className={(boxVisible || (isInError == true)) ? "wrap" : "wrap changed"}> 
            { (isInError === '') ? <div></div> : ((!isInError) ? <Innerpart /> : <div style={{ fontWeight: 'bold', fontSize: "1.25em", textAlign: "center", color: "#A04747"}}> { notFound }</div>)}
        </div>
    );
}
 
export default Word;