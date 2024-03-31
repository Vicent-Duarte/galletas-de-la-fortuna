import { useState } from 'react';
import './App.css';
import arrayPhrases from './utils/phrases.json';
import getRandom from './services/getRandom.js';
import ShowPhrase from './components/ShowPhrase.jsx';
import arrayImages from './utils/images.json'
import PhraseButton from './components/PhraseButton.jsx';




function App  () {
  
  const [text, setPhrase] = useState(getRandom(arrayPhrases));
  const [image, setImage] = useState(getRandom(arrayImages));


  const objStyles = {
    backgroundImage: `url(../Fortuna-2/fondo${image}.png)`,
  }

  return (
    <div className='app' style={objStyles}>
      <h1 className='app__title'>Galletas de la Fortuna</h1>
      
      <PhraseButton
        setPhrase={setPhrase}
        setImage={setImage}
      />
      <ShowPhrase
        phrase={text}
      />
    </div>
  )
}

export default App