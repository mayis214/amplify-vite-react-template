import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import ChatModal from "./components/ChatModal";


const client = generateClient<Schema>();

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Amazon Connect Chatbot</h1>
        <button onClick={handleOpenModal}>Open Chat</button>
      </header>
      <main>
        <ChatModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </main>
    </div>
  );
}

export default App;
