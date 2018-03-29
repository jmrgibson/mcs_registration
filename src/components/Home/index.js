// src/components/DanceForm/index.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, CardTitle, CardText } from 'reactstrap';
import { getCurrentUser } from "../../lib/api.js";


class Home extends Component {

  render() {

    return (
      <div className="App">
        <div>
          <Container>
            <Row>
              <Col>
                <Card className="card-body text-center">
                  <CardTitle>New Student Form</CardTitle>
                  <CardText>Fill out new student details form.</CardText>
                  <Link to="/new-student"><Button size="lg">New Student</Button></Link>
                </Card>
              </Col>
              <Col>
                <Card className="card-body text-center">
                  <CardTitle>Returning Student Checkin</CardTitle>
                  <CardText>Check in  a returing student.</CardText>
                  <Link to="/returning"><Button size="lg">Returning Student</Button></Link>
                </Card>
              </Col>
              <Col>
                <Card className="card-body text-center">
                  <CardTitle>Dance Event</CardTitle>
                  <CardText>Create a new dance event.</CardText>
                  <Link to="/dance"><Button size="lg">Dance</Button></Link>
                </Card>

              </Col>
            </Row>
          </Container>
        </div>
        <br></br>
        <div>
        <code>Current User: {JSON.stringify(getCurrentUser())}</code>
        </div>
        <br></br>
      </div>
    );
  }
}

export default Home;
