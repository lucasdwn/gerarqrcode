import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import QRCode from 'qrcode';

const QrCode_C = forwardRef(({ text }, ref) => {
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, text, { width: 300 }, (error) => {
      if (error) {
        console.error('Error generating QRCode:', error);
      }
    });
  }, [text]);

  useImperativeHandle(ref, () => ({
    getCanvas: () => canvasRef.current,
  }));

  return (
    <div>
      <canvas ref={canvasRef} id="canvas"></canvas>
    </div>
  );
});

export default QrCode_C;