import React, { useEffect} from 'react';
import './WidgetConnect.css'; // We'll define styles for the modal here

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
     
     
    }
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>×</button>
      <div id="ccp-container" style={{ width: '100%', height: '100%' }}></div>
    </div>    
  </div>
  );
};


export default ChatModal;
