import React from 'react';
import {
    Navbar,
    Dropdown,
    DropdownButton,
    Container,
    Nav,
} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import ParametersCanvas from './Offcanvas';

function NavbarMenu() {
    return (
        <>                  
            <Navbar bg="dark" variant="dark">
                <Container className='navbarCSS'>
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
                                New
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2" >
                                Open
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Close project
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Project Structure
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Save all
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Manage IDE Settings
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                New Projects Setup
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Edit" variant='dark' size='lg' >
                            <Dropdown.Item href="#/action-1">
                                Undo
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Redo
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Cut
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Copy
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Copy as Plain Text
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Delete
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Find
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Find Usages
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Select All
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Extend Selection
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Shrink Selection
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Toggle Case
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Join Lines
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Duplicate Line or Selection
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Fill Paragraph
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Sort Lines
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Reverse Lines
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Transpose
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Indent Selection
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Unindent Selection
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Convert Indents
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="View" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Tool Windows
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Appearance
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Quick Definition
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Quick Type Definition
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Recent files
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Recently Changed Files
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Recent Locations
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Recent Changes
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Navigate"
                            variant='dark'
                            size='lg'
                        >
                            <Dropdown.Item href="#/action-1">
                                Back
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Forward
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">
                                Search Everywhere
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Class...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                File...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Next Highlighted Error
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Previous Highlighted Error
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Navigate in File
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Jump to Navigation Bar
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Code" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Override Methods...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Implement Methods...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Delegate Methods...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Generate...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Code Completion
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Inspect Code...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Code Cleanup...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Analyze Code
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Insert Live Template...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Save as Live Template...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Folding
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Comment with Line Comment
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Comment with Block Comment
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Reformat File...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Auto-indent Lines
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Rearrange Code
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Refactor"
                            variant='dark'
                            size='lg'
                        >
                            <Dropdown.Item href="#/action-1">
                                Refactor This...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Rename...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Change Signature...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Inline...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Move...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Copy...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Safe Delete...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Pull Members Up...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Push Members Down...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Type Migration...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Make Static...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Convert to Instance Method...
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Build"
                            variant='dark'
                            size='lg'
                        >
                            <Dropdown.Item href="#/action-1">
                                Build Project
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Build Module
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Rebuild
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Recompile
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Rebuild Project
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Run" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Run 'Project'
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Debug 'Project'
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Run 'Project' with Coverage
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Profile 'Project' with 'Profiler'
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Run...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Debug...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Profile...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Attach to Process...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Edit Configurations...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Manage Targets...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Stop
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Stop Background Processes
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Show Running List
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Debugging Actions
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Toggle Breakpoint
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                View Breakpoints...
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Tools"
                            variant='dark'
                            size='lg'
                        >
                            <Dropdown.Item href="#/action-1">
                                Code with Me
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">
                                IDE Scripting Console
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Generate JavaDoc...
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Git" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Commit...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Push...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Update Project...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Pull...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Fetch
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Merge...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Rebase...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Branches...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                New Branch...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                New Tag...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Reset HEAD...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Show Git Log
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Current File
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Manage Remotes...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Clone...
                            </Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Help" size='lg' variant='dark'>
                            <Dropdown.Item href="#/action-1">
                                Learn IDE Features
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">
                                Contact Support
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Submit a Bug Report...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                Submit Feedback...
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">
                                Register...
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                About
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
