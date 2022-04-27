import {useState} from 'react';
import Modal from './modal';
import Backdrop from './backdrop';

function Todo(props){
    const [ modalIsOpen, setModalIopen] = useState(false);

    function deleteHandler() {
        setModalIopen(true);    
    }

    function closeHandler(){
        setModalIopen(false);
    }
    return (    
        <div className="card">
       <h2>{props.text}</h2>
       <div className="action">
       <button className="btn" onClick={deleteHandler}>Delete</button>
       </div>
       {modalIsOpen && <Modal onClick={closeHandler} onConfirm={closeHandler}/>} 
       {modalIsOpen && <Backdrop onCancel={closeHandler}/>} 
       
     </div>
    )

}

export default Todo;