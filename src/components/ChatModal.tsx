import React, { useEffect, useState } from 'react';
import 'amazon-connect-streams';
import './ChatModal.css'; // We'll define styles for the modal here

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Initialize the CCP when the modal opens
      (window as any).connect.core.initCCP(document.getElementById('ccp-container'), {
        ccpUrl: "https://turtlespizza.my.connect.aws/ccp-v2", // Replace with your CCP URL
        loginPopup: true,
        softphone: {
          allowFramedSoftphone: true,
        },
      });

      // Event handlers for the CCP can be added here
      (window as any).connect.contact((contact: any) => {
        console.log('New contact:', contact);
        if (contact.getType() === (window as any).connect.ContactType.CHAT) {
          console.log('Incoming chat from:', contact.getCustomerEndpoint().address);
        }

        contact.onConnected(() => {
          console.log('Chat connected');
        });

        contact.onEnded(() => {
          console.log('Chat ended');
        });
      });
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