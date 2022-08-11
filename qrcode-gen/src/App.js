/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-pascal-case */
import { useState } from 'react';
import './App.css';
import QrCode_C from './QrCode_C';

function App() {
  const [text, setText] = useState("https://example.com")
  return (
    <main>
      <header>
        <h1>Gerador de QRCode</h1>
        <div className='test'>
        <h2>Criado por</h2>
        <a href='https://lucascosta.tech' target="_blank" rel="noreferrer"><h2>Lucas Costa</h2></a> 
        </div>
      </header>
      <div className="App">
        <QrCode_C id="qrcode" text={text}></QrCode_C>
        <input onChange={(element) => {setText(element.target.value)}} value={text} placeholder='https://example.com'></input>
        <h1>Insira um URL</h1>
      </div>
      <div className='Sobre'>

      </div>
    </main>
  );
}

export default App;
