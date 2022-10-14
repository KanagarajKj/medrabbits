import React from 'react';
import { Button, Nav } from 'react-bootstrap';

const Packages = () => {
  return (
    <main className="packages">
      <div className="main-title">
        <h2>Select Service</h2>
      </div>
      <section className="cart">
        <div className="service-cart">
          <ul className='first-service'>
            <li>
              <span>Physiotherapy</span>
              <Button className= 'service-btn'>
                <Nav.Link  href="#">BookNow</Nav.Link>
              </Button>
            </li>
            <li>
              <span>Nursing Care</span>
              <Button className= 'service-btn'>
                <Nav.Link  href="#">BookNow</Nav.Link>
              </Button>
            </li>
            <li>
              <span>Elder Care</span>
              <Button className= 'service-btn'>
                <Nav.Link  href="#">BookNow</Nav.Link>
              </Button>
            </li>
            <li>
              <span>Dietician</span>
              <Button className= 'service-btn'>
                <Nav.Link  href="#">BookNow</Nav.Link>
              </Button>
            </li>
          </ul>

          <ul className='second-service'>
            <li>
              <span>Lab Test</span>
              <Button className= 'service-btn'>
                <Nav.Link  href="#">BookNow</Nav.Link>
              </Button>
            </li>
            <li>
              <span>Dietician</span>
              <Button className= 'service-btn'>
                <Nav.Link  href="#">BookNow</Nav.Link>
              </Button>
            </li>
            <li>
              <span>Online Doctor Video Consultation</span>
              <Button className= 'service-btn'>
                <Nav.Link  href="#">BookNow</Nav.Link>
              </Button>
            </li>
            <li>
              <span>Palliative Care</span>
              <Button className= 'service-btn'>
                <Nav.Link  href="#">BookNow</Nav.Link>
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Packages;
