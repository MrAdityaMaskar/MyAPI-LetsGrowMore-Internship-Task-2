import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import logo from './logo.png';
import "./card.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'
import { Footer } from './Footer';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(false);
  const [a, seta] = useState(false);
  
  const loadUsers = async () => {
    
    setloading(true);
    const response = await fetch('https://api.github.com/users');

    const jsonResponse = await response.json();
    setItems(jsonResponse);
    setloading(false);
    seta(true);


  };
  return (
    <><div style={{ backgroundColor: '#6e6b6a' }}>


      <div className='Container'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ textAlign: 'center' }}>
          <Container>
            <Navbar.Brand ><Navbar.Brand>
              <img width="70px" height="auto" className="img-responsive" src={logo} alt="logo" />
            </Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          
        <Button onClick={loadUsers} variant="primary" size="lg" active style={{ marginLeft: '36.5%', marginRight: '46.5%', marginTop: '2%', marginBottom: '1%' }}>
          {loading ? <Spinner animation="border" /> : "Get Data"}
        </Button>
        
        </Container>
      </Navbar>
        <Container style={{ backgroundColor: '#6e6b6a' }}>

          
            <Row className='row'>


              {items.map(item => (
                
                <React.Fragment key={item.id}>
                  
                  <Col className='card' xs={5} md={3} style={{ backgroundColor: '#EBEBEB', marginBottom: '10%', marginRight: '2%', fontFamily: "Times New Roman, Times, serif", border:'solid', marginTop:'6%' }}>

                    <img  src={item.avatar_url} alt="Avatar" style={{ paddingTop: '3%' }}  /><br /> 
                    <hr style={{ height:'2px', borderWidth:'1', color: 'black' }} />
                    <p style={{ textAlign: 'center' }} >UserName:    <strong>{item.login}</strong></p><br /> <p style={{ textAlign: 'center' }} ><strong>@{item.node_id}</strong> </p>
                  </Col>



                </React.Fragment>
              ))
              }
              
            </Row>        
            
         
        </Container>


      </div>
      {a?<Footer margin={'100%'}/>:<></>}
    </div>

    </>
  );
}
export default App;
