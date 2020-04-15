import React from 'react';
import axios from 'axios';

import {
    CardColumns
} from 'react-bootstrap';

import Big5List from '../components/Big5List.js';

class Big5sRio extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            big5s: []
        };
        this.loadAjax();
    }
/*
    async loadAjax(){
        await axios.get('http://localhost:5000/big5db/all' )
            .then(res => {
                this.setState({
                    big5s: res.data
                })
                console.log(res)
            });
    }
*/
    async loadAjax() {
        try {
            // const res = await fetch("http://localhost:5000/big5db/all");
            const res = await fetch(process.env.REACT_APP_BACKEND_URL + '/big5db/all')
            const json = await res.json();
            console.log(json)
            this.setState({
                big5s: json
            });
        }
        catch (err) {
            console.error(err);
        }
    }

    /*
    componentDidMount() {
        this.loadAjax()
    }
    */

    /*
    loadAjax2() {
        try {
            const res = fetch('http://localhost:5000/big5db/all');
            const json = res.json();
            console.log(json)
            this.setState({
                big5s: json
            });
        }
        catch (err) {
            console.error(err);
        }
    }
    */

    render(){
        return(
            <div>
                <CardColumns>
                    <Big5List items={this.state.big5s} />
                </CardColumns>
            </div>
        )
    } 
}

export default Big5sRio;