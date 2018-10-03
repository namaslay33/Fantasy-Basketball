import React, { Component} from 'react';
// import {BrowserRouter} from 'react-router-dom';
import '../CSS/home.css';
import {PageHeader, Carousel, Grid, Row, Col, ButtonToolbar, Button} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          <strong>Reign Supreme</strong> <br /> <small>Where Fantasy Basketball Champions are Born</small>
      </PageHeader>
      <Carousel className="carouselInfo">
        <Carousel.Item>
          <img width={1000} height={460} alt="900x500" src={require('../Image/Lakers.jpg')} />
          <Carousel.Caption>
          <h2>Los Angeles Lakers</h2>
          <p>A new Lake Show is in town led by King James</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../Image/Celtics.jpg')} />
          <Carousel.Caption>
          <h2>Boston Celtics</h2>
          <p>With a healthy squad, Kyrie Irving and Gordon Hayward look to win it all</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../Image/Warriors.jpg')} />
          <Carousel.Caption>
          <h2>Golden State Warriors</h2>
          <p>Same team, same goals. Three-peat anyone?</p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../Image/Rockets.jpg')} />
          <Carousel.Caption>
          <h2>Houston Rockets</h2>
          <p>The addition of Carmelo can propel the rockets to new heights</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <Grid>
          <Row className="show-grid">
          <Col xs={2} md={2}></Col>
          <Col xs={8} md={8}>
          <img width={900} height={500} alt="900x500" src={require('../Image/76ers.jpg')}/>
          </Col>
          <Col xs={2} md={2}></Col>
          </Row>
          </Grid>
          <Carousel.Caption>
          <h2>Philadelphia 76ers</h2>
          <p>Joel Embiid, "Trust the Process"</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <Grid>
      <Row className="show-grid">
        <Col xs={4} md={4}></Col>
        <Col xs={8} md={8}>
        <ButtonToolbar>
            <Button className="button" bsStyle="primary" bsSize="large" onClick>
                Create Your Team
            </Button>
        </ButtonToolbar>
        </Col>
        <Col xs={4} md={4}></Col>
      </Row>
    </Grid>

      </div>
    );
  }
}

export default Home;