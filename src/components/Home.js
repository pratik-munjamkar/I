import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import 'animate.css';

/**
 * Renders the Home component, which displays a Card with an Image and a Carousel.
 * @returns {JSX.Element} - The Home component UI.
 */
function Home() {
  return (
    <Card className="bg-dark text-white">
      <Image
        src="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/7-series/bmw-i7-&-7-series-desktop.png/jcr:content/renditions/cq5dam.resized.img.980.medium.time1673937459471.png"
        fluid
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>
          <h1 class="animate__animated animate__flipInX animate__delay-1s	1s">THE NEW I7 & 7</h1>
        </Card.Title>
        <Button variant="outline-dark">
          <h3>Explore The I7</h3>
        </Button>{" "}
        <br />
        <br />
        <Button variant="outline-dark">
          <h3>Explore The 7</h3>
        </Button>{" "}
      </Card.ImgOverlay>

      <br />

      <br />
      <h1 align-item="center">
        INTERIOR HIGHLIGHTS OF THE NEW BMW 7 SERIES SEDAN.
      </h1>

      <CardGroup >
        <Card text="dark">
          <Card.Img class="animate__animated animate__wobble animate__delay-4s	4s"
            variant="top"
            src="https://www.bmw.in/content/bmw/marketIN/bmw_in/en_IN/all-models/7-series/sedan/2022/bmw-7series-sedan-highlights/jcr:content/par/multicontent_copy/tabs/multicontenttab/items/smallteaser/image.transform/smallteaser/image.1663251710181.jpg"
          />
          <Card.Body>
            <Card.Title>
              <h3>Inovation ambience in the cockpit.</h3>
            </Card.Title>
            <Card.Text>
              The BMW interaction Bar, a multifunctional controlelement, extends
              horizontally across the entire cockpit. Completing the multimedia
              experince is the 14.9" BMW CUrved Display
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="dark">
          <Card.Img class="animate__animated animate__wobble animate__delay-4s	4s"
            variant="top"
            src="https://www.bmw.in/content/bmw/marketIN/bmw_in/en_IN/all-models/7-series/sedan/2022/bmw-7series-sedan-highlights/jcr:content/par/multicontent_copy/tabs/multicontenttab/items/smallteaser_copy/image.transform/smallteaser/image.1672638828641.jpg"
          />
          <Card.Body>
            <Card.Title>
              <h3>Rare-seat entertainment on the grand scale.</h3>
            </Card.Title>
            <Card.Text>
              Sit back and enjoy: The 31.3" 8K Resolution theatre Screen with
              Amazon Fire TV built-in creates a unique panoramic rear-seat
              entertainmentexperince.*
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="dark">
          <Card.Img class="animate__animated animate__wobble animate__delay-4s	4s"
            variant="top"
            src="https://www.bmw.in/content/bmw/marketIN/bmw_in/en_IN/all-models/7-series/sedan/2022/bmw-7series-sedan-highlights/jcr:content/par/multicontent_copy/tabs/multicontenttab/items/smallteaser_copy_1401816873/image.transform/smallteaser/image.1663251710296.jpg"
          />
          <Card.Body>
            <Card.Title>
              <h3>Panorama glass roof sky Lounge.</h3>
            </Card.Title>
            <Card.Text>
              The panoramic glass roof Sky Lounge allows during the day. At
              night it Creates an incomparable ambinence by using dynamin ligh
              effects.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <h2>THE NEW BMW 7 SERIES SEDAN – IMPRESSIONS.</h2>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bmw.in/content/dam/bmw/common/all-models/7-series/sedan/2022/highlights/bmw-7-series-sedan-gallery-design-02-890.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1649929139075.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bmw.in/content/dam/bmw/common/all-models/7-series/sedan/2022/highlights/bmw-7-series-sedan-gallery-design-01-890.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1649929139639.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bmw.in/content/dam/bmw/common/all-models/7-series/sedan/2022/highlights/bmw-7-series-sedan-gallery-design-03-890.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1649929137207.jpg"
          alt="Third slide"
        />

        
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bmw.in/content/dam/bmw/common/all-models/7-series/sedan/2022/highlights/bmw-7-series-sedan-gallery-design-04-890.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1649929139940.jpg"
          alt="Third slide"
        />

        
        
      </Carousel.Item>
    </Carousel>
      
    </Card>
  );
}

export default Home;
