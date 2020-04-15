import React, { useState, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';

import Big5ItemDetail from './Big5ItemDetail';

const Big5Item = props => {

    return(
        <React.Fragment>
            <Card border="primary" style={{ width: '20rem' }} bg='light' > 
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>{props.trait_id}</Card.Subtitle>
                    <Card.Text><h4>{props.percentile}</h4></Card.Text>
                    
                    {props.details.map(big5detail => (
                        <Big5ItemDetail 
                            key={big5detail.name}
                            name={big5detail.name}
                            trait_id={big5detail.trait_id}
                            percentile={big5detail.percentile.toFixed(8)}
                        />
                    ))}

                </Card.Body>
            </Card>

        </React.Fragment>
    )
}

export default Big5Item;