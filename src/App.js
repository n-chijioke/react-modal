import { useState } from 'react';
import Modal from './components/Modal';
import "./App.css";


function App() {
    const[openModal, setOpenModal] = useState(false);
        

    return (
        <div className="App">
            <h1>Hey, click on the button to open the Modal.</h1>
            <button 
            className="openModalBtn"
            onClick={() => 
                setOpenModal(true)
            }
            >
                Open
            </button>
            {openModal && <Modal closeModal={setOpenModal} shouldCloseOnOverlayClick={false}
            onRequestClose={() => setOpenModal(false)}/>}
        </div>
    );
}

export default App;

