import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

class Big5ItemDetail extends React.Component{

    constructor(props){
        super(props);
        this.state = {isModalOpen:false}
        this.handleClickBig5 = this.handleClickBig5.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
    }

    handleClickBig5(){
        this.setState({isModalOpen:true});
    }

    handleClickClose(){
        this.setState({isModalOpen: false});
    }

    render(){
        let Modal;

        if(this.state.isModalOpen){
            Modal=( 
                <div onClick={this.handleClickClose}>
                    {this.props.percentile}
                </div>
            );
        }

        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <div onClick={this.handleClickBig5}>
                                <Button variant="link" size="sm">
                                    {this.props.name} 
                                </Button>
                            </div> 
                        </Col>
                        <Col>
                            {Modal}
                        </Col>
                        
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Big5ItemDetail;