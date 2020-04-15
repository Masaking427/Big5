import React from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
    labels: ['知的好奇心','誠実性','外向性','協調性','感情起伏'],
    datasets: [
        {
            label: "Masaki's Big5",
            data: [0.8479480994964365,0.7950624883215796,0.9792137936278467,0.6835293098300844,0.3443811655423583],
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)'
        }
    ]
}

const Big5_Radar = props => {

    // const big5Json = props.items.personality.map(({name,percentile})=>({name,percentile}))

    return (
        <div>
            <Radar data = {data} />
        </div>
    )
}

export default Big5_Radar;