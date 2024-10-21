import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  const handleGenerate = () => {
    setResponse("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");
    setShowResponse(true);
  };

  const handleInsert = () => {
    const messageInput = document.querySelector('[role="textbox"][data-control-name="message"]') as HTMLElement;
    if (messageInput) {
      messageInput.textContent = response;
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="w-[600px] bg-white rounded-lg shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="p-6">
          {!showResponse ? (
            <>
              <h2 className="mb-4 text-xl font-semibold">AI Assistant</h2>
              <textarea
                className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your command..."
                value={command}
                onChange={(e) => setCommand(e.target.value)}
              />
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  onClick={handleGenerate}
                >
                  Generate
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                {response}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                  disabled
                >
                  Regenerate
                </button>
                <button
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  onClick={handleInsert}
                >
                  Insert
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
