import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TweetItem = props => {
    return(
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default TweetItem;