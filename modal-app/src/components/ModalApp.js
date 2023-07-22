import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function ModalApp() {
    const[modallogin, setmodalLogin] = useState(false);

    const handleclose =() => setModalLogin(false);
    const handleshow = () => setModalLogin(true);

    return(
        <>
        <button className='bg-success text-white' onClick={handleshow}>
            Lunch demo modal
        </button>

        <Modal show={modallogin} onHide={handleclose}>
            <Modal.Header closeButton>
                <Modal.Title> Modal heading </Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        </Modal>
    )
}