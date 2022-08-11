import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode'

export default function QrCode_C({text}) {
    
    const Canvas = useRef()
    
    useEffect(()=>{
        QRCode.toCanvas(Canvas.current, text, { width: 300 }, (error) =>{
            console.log(error)
        })
    }, [text])
    return(
        <div>
            <canvas ref={Canvas} id="canvas"></canvas>
        </div>
    )
}
