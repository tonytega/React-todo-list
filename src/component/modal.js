function Modal(props){
    function cancelHandler(){
        props.onClick();
    }

    function confirmHandler(){
        props.onConfirm()
    }

    return (<div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>cancel</button>
        <button onClick={confirmHandler}>confirm</button>
    </div>);
}

export default Modal; 