import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Button, Form } from "react-bootstrap";
import h from '../helpers/helper';

export default class Navigation extends React.Component {

    logout = () => {
        h.clear_user()
        h.clear_token()
        window.location.href = "/login"
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                 <Navbar.Brand href="#home" style={{color: 'lightskyblue'}}>// FL Memes </Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                         <Nav.Link name="test" href="/highscores">High Scores</Nav.Link>
                         <Nav.Link href="/Vote">Vote</Nav.Link>
                         <Nav.Link href="/Upload">Upload</Nav.Link>
                         <Nav.Link onClick={() => {this.logout()}}>Logout</Nav.Link>
                         {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                             <NavDropdown.Divider />
                             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                         </NavDropdown> */}
                     </Nav>
                     {/* <Form inline>
                         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                         <Button variant="outline-success">Search</Button>
                     </Form> */}
                 </Navbar.Collapse>
             </Navbar>
        )
    }
}

 