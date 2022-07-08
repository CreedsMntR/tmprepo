import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown2 from './Dropdown';

function ParametersCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Parameters
            </Button>

            <Offcanvas className="barParams" placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="paramTitle">
                        Parameters
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="paramTitle">
                    <h3>Here are the parameters !</h3>
                    <p>
                        <Dropdown2 />
                    </p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ParametersCanvas;
