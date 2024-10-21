import React, { useEffect, useState } from 'react';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute('role') === 'textbox' && target.closest('[data-control-name="message"]')) {
        const rect = target.getBoundingClientRect();
        setPosition({
          top: rect.top + window.scrollY,
          left: rect.right + window.scrollX - 40
        });
        setShowIcon(true);
      }
    };

    const handleBlur = (e: FocusEvent) => {
      if (!showModal) {
        setShowIcon(false);
      }
    };

    document.addEventListener('focus', handleFocus, true);
    document.addEventListener('blur', handleBlur, true);

    return () => {
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('blur', handleBlur, true);
    };
  }, [showModal]);

  return (
    <>
      {showIcon && (
        <button
          className="fixed z-50 w-8 h-8 p-1 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-50"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
          onClick={() => setShowModal(true)}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default App;
