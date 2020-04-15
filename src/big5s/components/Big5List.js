import React from 'react';

import Big5Item from './Big5Item';

const Big5List = props => {
    return (
        <ul>
            {props.items.map(big5 => (
                <Big5Item 
                    key={big5.name}
                    name={big5.name}
                    trait_id={big5.trait_id}
                    percentile={big5.percentile.toFixed(8)}
                    details={big5.children}
                />
            ))}
        </ul>
    );
};

export default Big5List;