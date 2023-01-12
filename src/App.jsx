import React, { useState } from 'react'
import './app.css'
import Header from './components/Header'
import SearchBox from './components/SearchBox';
import ResultContainer from './components/ResultContainer'

function App() {
  const [suggested, setSuggested] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const name = require('@rstacruz/startup-name-generator')

  const setInputHandler = (value) => {
    console.log('value is changed');
    setSuggested(value ? name(value) : []);
    value ? setIsTyping(true) : setIsTyping(false);
  }

  return (
    <div className="App">
      <div className='main-container' style={isTyping ? { marginTop: '50px' } : {}}>
        <Header isTyping={isTyping} />
        <SearchBox setInputHandler={setInputHandler} />
        <ResultContainer suggested={suggested} />
      </div>
    </div>
  );
}

export default App;
