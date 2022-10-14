import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="slider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            width={500}
            height={600}
            className="d-block w-100"
            src={
              'https://images.unsplash.com/photo-1604480131833-5d7aea770e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwY2FyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button>
              <Nav.Link href="/packages">Select Packages</Nav.Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={500}
            height={600}
            className="d-block w-100"
            src={
              'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwY2FyZSUyMHdvcmtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            }
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button>
              <Nav.Link href="/packages">Select Packages</Nav.Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={500}
            height={600}
            className="d-block w-100"
            src={
              'https://media.istockphoto.com/photos/shot-of-an-attractive-young-nurse-sitting-and-bonding-with-her-senior-picture-id1316738511?b=1&k=20&m=1316738511&s=170667a&w=0&h=7gJGRENOkkJ89w8LnOjAx1bHyzaV2kJx-ZVFnpW2EW8='
            }
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button>
              <Nav.Link href="/packages">Select Packages</Nav.Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Home;
