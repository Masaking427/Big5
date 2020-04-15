import React from 'react';

import TweetItem from './TweetItem';

const TweetList = props => {
    return(
        <ul>
            {props.items.map(tweet => (
                <TweetItem 
                    key={tweet.text}
                    text={tweet.text}
                />
            ))}
        </ul>
    )
}

export default TweetList;