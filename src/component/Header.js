import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{LinkContainer} from 'react-router-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Style.css';
import { useNavigate } from 'react-router-dom';
export default function Header({xyz}) {
  let navigate = useNavigate();
  const[searchdata,setSearchdata]=useState(" ");
  const searchData = (ev)=>
  {
    //console.log(Math.random());
    //console.log(ev);
    //console.log(ev.target.value);
    setSearchdata(ev.target.value);
    // console.log(typeof xyz);
    // xyz(ev.target.value);
    // <Header xyz={setApp}/>
    // const[app,setApp] =useState("x");

  }
  const myfunc = ()=>{
  //console.log('test',searchdata);
  xyz(searchdata);
  navigate("/searchcomp");
  }
  return (
<Navbar bg="secondary" className="nav"  expand="lg">
      <Container className="background">
        <Navbar.Brand href="#home" className="back">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
     <LinkContainer to="/popular"><Nav.Link>Popular</Nav.Link></LinkContainer>
     <LinkContainer to="/toprated"><Nav.Link>Toprated</Nav.Link></LinkContainer>
     <LinkContainer to="/upcoming"><Nav.Link>Upcoming</Nav.Link></LinkContainer>
    

            
       <Form.Control type="text" onChange={searchData} id="inputPassword5" aria-describedby="passwordHelpBlock"></Form.Control>
           <Button onClick={myfunc} className="button" variant="secondary">Search</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


 