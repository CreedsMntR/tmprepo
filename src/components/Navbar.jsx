import React, { useState } from 'react';
import {
    Button,
    Navbar,
    Dropdown,
    DropdownButton,
    Container,
    Nav,
    SplitButton,
} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import ParametersCanvas from './Offcanvas';

function NavbarMenu() {
    return (
        <>                  
            <Navbar bg='dark' variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <FaIcons.FaHome />
                    </Navbar.Brand>
                    <Nav className="me-auto" >
                        <DropdownButton
                            className="buttonDrop"
                            class="noArrow"
                            id="dropdown-basic-button"
                            title="File"
                            variant='dark'
                            size='lg'
                        >
                            <Dropdown.Item href="#/action-1">
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    class="arrow"
                                    drop="end"
                                    title="New"
                                >
                                    Oui
                                </DropdownButton>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2" >
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Edit" variant='dark' size='lg' >
>
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="View" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Navigate"
                            variant='dark'
                            size='lg'
                        >
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Code" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Refactor"
                            variant='dark'
                            size='lg'
                        >
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Build"
                            variant='dark'
                            size='lg'
                        >
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Run" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Tools"
                            variant='dark'
                            size='lg'
                        >
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Git" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Help" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                    <ParametersCanvas />
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarMenu;
