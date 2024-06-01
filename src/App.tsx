import {useState } from "react";
import WidgetConnect from "./components/WidgetConnect";

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
        <WidgetConnect isOpen={isModalOpen} onClose={handleCloseModal} />
      </main>
    </div>
  );
}

export default App;

