import React, { Component} from 'react';
// import {BrowserRouter} from 'react-router-dom';
import '../CSS/home.css';
import {PageHeader, Carousel, Grid, Row, Col, ButtonToolbar, ButtonGroup, Button} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>

      {/* Title */}
        <PageHeader>
          <h2><strong>Reign Supreme</strong></h2> <small>Where Fantasy Basketball Champions are Born</small><br /><br />

          <div style={{fontSize: "16px"}}> Are You Ready to play?</div>
        <Grid>
        <Row className="show-grid">
        <Col xs={4} md={5}></Col>
        <Col xs={2} md={3}>
          <ButtonToolbar>
            <ButtonGroup>
            <Button className="button" bsStyle="primary" bsSize="small" onClick>
                Sign Up
            </Button>
            </ButtonGroup>
            <ButtonGroup>
            <Button className="button" bsStyle="primary" bsSize="small" onClick>
                Sign In
            </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
        </Row>
        </Grid>
      </PageHeader>
      {/* Title End */}


      <Carousel className="carouselInfo">
        <Carousel.Item>
          <Grid>
          <Row className="show-grid">
          <Col xs={8} md={8}>
          <img width={1050} height={520} alt="900x500" src={require('../Image/Lakers.jpg')} />
          </Col>
          </Row>
          </Grid>
          <Carousel.Caption>
          <h1>Los Angeles Lakers</h1>
          <p style={{fontSize: "16px"}}>A new Lake Show is in town led by King James</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Grid>
          <Row className="show-grid">
          <Col xs={8} md={8} offset={2}>
          <img width={1050} height={520} alt="900x500" src={require('../Image/Celtics.jpg')} />
          </Col>
          </Row>
          </Grid>
          <Carousel.Caption>
          <h1>Boston Celtics</h1>
          <p style={{fontSize: "16px"}}>With a healthy squad, Kyrie Irving and Gordon Hayward look to win it all</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Grid>
          <Row className="show-grid">
          <Col xs={8} md={8} offset={2}>
          <img width={1050} height={520} alt="900x500" src={require('../Image/Warriors.jpg')} />
          </Col>
          </Row>
          </Grid>
          <Carousel.Caption>
          <h1>Golden State Warriors</h1>
          <p style={{fontSize: "16px"}}>Same team, same goals. Three-peat anyone?</p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
          <Grid>
          <Row className="show-grid">
          <Col xs={8} md={8} offset={2}>
          <img width={1050} height={520} alt="900x500" src={require('../Image/Rockets.jpg')} />
          </Col>
          </Row>
          </Grid>
          <Carousel.Caption>
          <h1>Houston Rockets</h1>
          <p style={{fontSize: "16px"}}>The addition of Carmelo can propel the rockets to new heights</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <Grid>
          <Row className="show-grid">
          
          <Col xs={8} md={8} offset={2}>
          <img width={1050} height={520} alt="900x500" src={require('../Image/76ers.jpg')}/>
          </Col>
          </Row>
          </Grid>
          <Carousel.Caption>
          <h1>Philadelphia 76ers</h1>
          <p style={{fontSize: "16px"}}>Joel Embiid, "Trust the Process"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Grid>
        <Row className="show-grid">
        <Col xs={8} md={8} offset={2}>
        <img width={1000} height={520} alt="900x500" src={require('../Image/Bucks.jpg')}/>
          </Col>
          </Row>
          </Grid>
          <Carousel.Caption>
          <h1>Milwaukee Bucks</h1>
          <p style={{fontSize: "16px"}}>Giannis looks ready to be the next MVP</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <Grid>
          <Row className="show-grid">
          <Col xs={8} md={8} offset={2}>
          <img width={1100} height={520} alt="900x500" src={require('../Image/Thunder.jpg')} />
          </Col>
          </Row>
          </Grid>
          <Carousel.Caption>
          <h1>Oklahoma City Thunder</h1>
          <p style={{fontSize: "16px"}}>Paul George is in it for the long haul</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
    );
  }
}

export default Home;