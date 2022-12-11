import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import claro from '../../../assets/claro.svg';
import tiger from '../../../assets/tiger.svg';
import Lumina from '../../../assets/Lumina.svg';
import Carousel from 'react-bootstrap/Carousel';
import '../Card/Cards-stylesheet.css';
import React from "react";
export interface ICardProps {

}

export function Cards(props: ICardProps) {
  return (
    <>
      <p className='card-title'>POPULAR RESTURANT IN EPICURE:</p>
      <Carousel style={{backgroundColor: "#F9F4EA"}}>
        <Carousel.Item interval={3000}>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <img
                  className="d-block w-100"
                  src={claro}
                  alt="Third slide"
                />
                <p className='card-title'>Claro</p>
                <p className='card-text'>Ran Shmueli</p>
                {/* <Card className='card2'>
                  <Card.Img variant="top" src={claro} className="d-block w-100"/>
                  <Card.Body>
                    <Card.Title>Claro</Card.Title>
                    <Card.Text>
                      Ran Shmueli
                    </Card.Text>
                  </Card.Body>
                </Card> */}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <img
                  className="d-block w-100"
                  src={Lumina}
                  alt="Third slide"
                />
                <p className='card-title'>Lumia</p>
                <p className='card-text'>Ran Meir Adoni</p>
                {/* <Card className='card2'>
                  <Card.Img variant="top" src={claro} className="d-block w-100"/>
                  <Card.Body>
                    <Card.Title>Claro</Card.Title>
                    <Card.Text>
                      Ran Shmueli
                    </Card.Text>
                  </Card.Body>
                </Card> */}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <img
                  className="d-block w-100"
                  src={tiger}
                  alt="Third slide"
                />
                <p className='card-title'>Tiger Lilly</p>
                <p className='card-text'>Yanir Green</p>
                {/* <Card className='card2'>
                  <Card.Img variant="top" src={claro} className="d-block w-100"/>
                  <Card.Body>
                    <Card.Title>Claro</Card.Title>
                    <Card.Text>
                      Ran Shmueli
                    </Card.Text>
                  </Card.Body>
                </Card> */}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>

    </>
  );
}

