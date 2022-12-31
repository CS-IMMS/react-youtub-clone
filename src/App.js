import React, { useState } from "react";
import {Container, Row , Col,Form, Button} from 'react-bootstrap'
import Videos from "./component/Videos";
import './App.css'
import Footer from "./component/Footer";
import tof from './component/download.png'
function App() {
const [search, setSarch] = useState('');
const [passToChid, setpassToChid] = useState('');
const onSubmit = (event)=>{
  event.preventDefault()
  setpassToChid(search)
}

  return (
    <div className="App ">
      <Container>
        <Row>
          <Col>
           <img src={tof} height='100'/>
          </Col>
          <Col >
         
            <Form onSubmit={event => onSubmit(event)} className='search-box'>
              <Row>
                  <Col> 
                      <Form.Control 
                      size="lg" 
                      type="text" 
                      required
                      placeholder="Search videos here..." 
                      onChange={(event) => setSarch(event.target.value)}
                      />
                  </Col>
                  <Col>
                      <Button className='btn' variant="primary" size="lg" onClick={event=> onSubmit(event)}>Search</Button>
                  </Col>
              </Row>
            </Form> 
          </Col>
          <Videos searchString = {passToChid}/>
        </Row>
       <Footer/>
      </Container>
    </div>
  );
}

export default App;
