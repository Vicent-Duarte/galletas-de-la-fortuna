import { useState } from 'react';
import './App.css';
import ShowPhrase from './components/ShowPhrase.jsx';
import PhraseButton from './components/PhraseButton.jsx';
import getRandom from './services/getRandom.js';
import arrayPhrases from './utils/phrases.json';
import arrayImages from './utils/images.json';

function App() {

  const [phrase, setPhrase] = useState(getRandom(arrayPhrases));
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
        randomPhrase={phrase}
      />
    </div>
  )
}

export default App;