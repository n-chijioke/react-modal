import React,{useState} from 'react';
import "./Modal.css";

function Modal({ closeModal }) {
    const [count, setCount] = useState(0)
     
   function next () {
        setCount(count+1)
    }
    function Previous (){
        setCount(count -1)
    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                    <div className="title">
                        <h1>Are You Sure You Want To Continue?</h1>
                    </div>
                {count === 0 ?
                    <div className="body">
                        <p> You should move forward for the next page.</p>
                    </div> : '' 
                }
                {count === 1 ?
                    <div className="body">
                        <p> I Am a Semicolon native.</p>
                    </div> : '' 
                }
                {count === 2 ?
                    <div className="body">
                        <p> I am a frontend Developer.</p>
                    </div> : '' 
                }
                {count === 3 ?
                    <div className="body">
                        <p> We are problem solvers.</p>
                    </div> : '' 
                }
                {count === 4 ?
                    <div className="body">
                        <p> Good Design Creators.</p>
                    </div> : '' 
                }
                {count === 5 ?
                    <div className="body">
                        <p> Dedicated to development.</p>
                    </div> : '' 
                }
                <div className="footer">
                    <button onClick={Previous} id="cancelBtn">Previous</button>
                    
                    <button onClick={next}>Next </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
