import { useEffect } from 'react';
import '../styles/Toast.css';

export default function Toast({ message, type, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  const getToastIcon = (type) => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      default: return 'ℹ️';
    }
  };

  return (
    <div className={`toast ${type} ${visible ? 'show' : ''}`}>
      <div className="toast-content">
        <span className="toast-icon">{getToastIcon(type)}</span>
        {message}
      </div>
    </div>
  );
}