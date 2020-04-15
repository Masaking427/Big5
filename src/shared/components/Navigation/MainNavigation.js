import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const MainNavigation = props => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col><h1>Analyze Big5</h1></Col>
                    <Col>
                        <Row>
                            <Col><Link to="/masaki" >Big5Masaki</Link></Col>
                            <Col><Link to="/rio" >Big5Rio</Link></Col>
                            <Col><Link to="/tweets" >Tweets List</Link></Col>
                            <Col><Link to="/tweets2" >Tweets List2</Link></Col>
                            <Col><Link to="/charts" >Big5 Chart</Link></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
        </React.Fragment>
    );
};

export default MainNavigation;