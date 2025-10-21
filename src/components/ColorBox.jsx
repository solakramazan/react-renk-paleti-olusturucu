import { useState } from 'react';
import PropTypes from 'prop-types';

function ColorBox({ id, color, isLocked, onToggleLock, onCopy }) {
  const [showCopied, setShowCopied] = useState(false);

  // Rengin açık mı koyu mu olduğunu belirle (metin rengi için)
  const isLightColor = (hexColor) => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155;
  };

  const handleCopy = () => {
    onCopy();
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1000);
  };

  const textColor = isLightColor(color) ? '#333' : '#fff';

  return (
    <div
      id={id}
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleCopy}
    >
      <div className="color-info" style={{ color: textColor }}>
        <h2 className="color-code">{color}</h2>
        
        {showCopied && (
          <div className="copied-notification">
            ✓ Kopyalandı!
          </div>
        )}
      </div>

      <button
        className={`lock-button ${isLocked ? 'locked' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleLock();
        }}
        style={{ color: textColor }}
        aria-label={isLocked ? 'Kilidi aç' : 'Kilitle'}
      >
        {isLocked ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
          </svg>
        )}
      </button>

      <div className="hover-overlay" style={{ color: textColor }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <p>Kopyala</p>
      </div>
    </div>
  );
}

ColorBox.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  onToggleLock: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default ColorBox;
