import 'regenerator-runtime/runtime'
import React ,{useState} from 'react'
import { login, logout } from './utils'
import './global.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Row,Col} from 'react-bootstrap'
import Candidate  from '../src/component/Candidate';
import getConfig from './config'
import Human from './assets/chibi.jpg';
import Alien from './assets/alien.png'
import './App.css'


const { networkId } = getConfig(process.env.NODE_ENV || 'development')



export default function App() {

 const[buttonState,ChangeButtonState]=useState(false);

 const modButton=()=>{
   ChangeButtonState(
    !buttonState
   )
 }

let bjpdescription="Hii! I m Human , I m loving , caring and a curious being of this universe";
let CongressDescription="Dhoonp Dhoooooonp !!! Jaaduuu....."


 return(
 <React.Fragment>
  <div>
  <Navbar className="Navbar-Background"   bg="dark" collapseOnSelect expand="lg" variant="dark">
   <Navbar.Brand href="#home">BlockVote</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
       </Nav>
       <Nav>
        <Nav.Link onClick={(window.accountId==='')?login:logout} eventKey={2}>
          {(window.accountId==='')?"Login":window.accountId}
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
   </Navbar>
  </div> 

  <div className="container">
    <Row>
     <div className="col-sm d-flex "> <Col style={{paddingLeft:298 , marginRight:40}}> <Candidate modButton={modButton} buttonState={buttonState} picture={Human} description={bjpdescription} title={"Human"}/></Col></div>
     <div className="col-sm d-flex "> <Col>  <Candidate modButton={modButton} buttonState={buttonState} picture={Alien} title={"Alien"} description={CongressDescription}/></Col></div>
    </Row>
  </div>

</React.Fragment>
)
}
