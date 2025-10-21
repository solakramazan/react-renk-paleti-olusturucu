import { useState, useEffect } from 'react';
import ColorBox from './components/ColorBox';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const [lockedColors, setLockedColors] = useState([false, false, false, false, false]);

  // Rastgele renk üretme fonksiyonu
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Yeni palet oluşturma
  const generatePalette = () => {
    const newColors = colors.map((color, index) => {
      return lockedColors[index] ? color : generateRandomColor();
    });
    setColors(newColors);
  };

  // İlk yüklemede palet oluştur
  useEffect(() => {
    setColors(Array(5).fill(null).map(() => generateRandomColor()));
  }, []);

  // Boşluk tuşu dinleyicisi
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        generatePalette();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [colors, lockedColors]);

  // Renk kilitleme toggle
  const toggleLock = (index) => {
    const newLockedColors = [...lockedColors];
    newLockedColors[index] = !newLockedColors[index];
    setLockedColors(newLockedColors);
  };

  // Renk kodunu panoya kopyalama
  const copyToClipboard = (color, index) => {
    navigator.clipboard.writeText(color);
    // Kopyalama animasyonu için geçici bildirim gösterebiliriz
    const element = document.getElementById(`color-${index}`);
    if (element) {
      element.classList.add('copied');
      setTimeout(() => {
        element.classList.remove('copied');
      }, 500);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🎨 Renk Paleti Oluşturucu</h1>
        <p className="subtitle">Boşluk tuşuna basarak yeni palet oluştur</p>
      </header>
      
      <div className="palette-container">
        {colors.map((color, index) => (
          <ColorBox
            key={index}
            id={`color-${index}`}
            color={color}
            isLocked={lockedColors[index]}
            onToggleLock={() => toggleLock(index)}
            onCopy={() => copyToClipboard(color, index)}
          />
        ))}
      </div>

      <footer className="footer">
        <div className="instructions">
          <span className="instruction-item">
            <kbd>SPACE</kbd> Yeni palet oluştur
          </span>
          <span className="instruction-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Rengi kilitle
          </span>
          <span className="instruction-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Rengi kopyala
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
