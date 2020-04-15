import React from 'react';

import {
    CardColumns
} from 'react-bootstrap';

import TweetList from '../components/TweetList.js';

class Tweets extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tweets:[]
        };
        this.loadAjax();
    }

    async loadAjax() {
        try {
            // const res = await fetch("http://localhost:5000/twitter/mytweet");
            const res = await fetch(process.env.REACT_APP_BACKEND_URL + '/twitter/mytweet')
            const json = await res.json();
            console.log(json)
            this.setState({
                tweets: json
            });
        }
        catch (err) {
            console.error(err);
        }
    }

    render(){
        return(
            <div>
                <CardColumns>
                    <TweetList items={this.state.tweets} />
                </CardColumns>
            </div>
        )
    } 
}


export default Tweets;