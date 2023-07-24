import React, { useState, useRef } from 'react';
import './App.css';
import QrCode_C from './QrCode_C';

function App() {
  const [text, setText] = useState("https://example.com");
  const qrCodeRef = useRef(null);

  const handleClearQRCode = () => {
    setText("");
  };

  const handleDownloadQRCode = () => {
    if (qrCodeRef.current) {
      const canvas = qrCodeRef.current.getCanvas(); // Get the QRCode canvas element
      if (canvas) {
        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = "qrcode.png";
        link.click();
      }
    }
  };

  return (
    <main>
      <header>
        <h1>Gerador de QRCode</h1>
        <div className='test'>
          <h2>Criado por</h2>
          <a href='https://github.com/lucasdwn' target="_blank" rel="noreferrer"><h2>Lucas Costa</h2></a>
        </div>
      </header>
      <div className="App">
        <QrCode_C ref={qrCodeRef} text={text} />
        <h1>Insira uma URL</h1>
        <input onChange={(element) => {setText(element.target.value)}} value={text} placeholder='https://example.com'></input>
        <div className='buttons'>
          <button onClick={handleClearQRCode}>Limpar QRCode</button>
          <button onClick={handleDownloadQRCode}>Download QRCode</button>
        </div>
      </div>
      <div className='Sobre'>
      </div>
    </main>
  );
}

export default App;