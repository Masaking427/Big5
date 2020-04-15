import React, { useEffect, useState} from 'react';
import {
    CardColumns
} from 'react-bootstrap';

import Big5List from '../components/Big5List.js';


const Big5s = () => {

    var big5s = [
          {
            "trait_id": "big5_openness",
            "name": "知的好奇心",
            "category": "personality",
            "percentile": 0.8479480994964365,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_adventurousness",
                "name": "大胆性",
                "category": "personality",
                "percentile": 0.7360829044915548,
                "significant": true
              },
              {
                "trait_id": "facet_artistic_interests",
                "name": "芸術的関心度",
                "category": "personality",
                "percentile": 0.4201330922838075,
                "significant": true
              },
              {
                "trait_id": "facet_emotionality",
                "name": "情動性",
                "category": "personality",
                "percentile": 0.11549813941234521,
                "significant": true
              },
              {
                "trait_id": "facet_imagination",
                "name": "想像力",
                "category": "personality",
                "percentile": 0.5857506181407868,
                "significant": true
              },
              {
                "trait_id": "facet_intellect",
                "name": "思考力",
                "category": "personality",
                "percentile": 0.8961197587759683,
                "significant": true
              },
              {
                "trait_id": "facet_liberalism",
                "name": "現状打破",
                "category": "personality",
                "percentile": 0.47288657009870294,
                "significant": true
              }
            ]
          },
          {
            "trait_id": "big5_conscientiousness",
            "name": "誠実性",
            "category": "personality",
            "percentile": 0.7950624883215796,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_achievement_striving",
                "name": "達成努力",
                "category": "personality",
                "percentile": 0.9780480803300395,
                "significant": true
              },
              {
                "trait_id": "facet_cautiousness",
                "name": "注意深さ",
                "category": "personality",
                "percentile": 0.07647674907063756,
                "significant": true
              },
              {
                "trait_id": "facet_dutifulness",
                "name": "忠実さ",
                "category": "personality",
                "percentile": 0.43466079858994106,
                "significant": true
              },
              {
                "trait_id": "facet_orderliness",
                "name": "秩序性",
                "category": "personality",
                "percentile": 0.993883247866296,
                "significant": true
              },
              {
                "trait_id": "facet_self_discipline",
                "name": "自制力",
                "category": "personality",
                "percentile": 0.9842567772649841,
                "significant": true
              },
              {
                "trait_id": "facet_self_efficacy",
                "name": "自己効力感",
                "category": "personality",
                "percentile": 0.9942410230742221,
                "significant": true
              }
            ]
          },
          {
            "trait_id": "big5_extraversion",
            "name": "外向性",
            "category": "personality",
            "percentile": 0.9792137936278467,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_activity_level",
                "name": "活発度",
                "category": "personality",
                "percentile": 0.9998766501977376,
                "significant": true
              },
              {
                "trait_id": "facet_assertiveness",
                "name": "自己主張",
                "category": "personality",
                "percentile": 0.8138904562348104,
                "significant": true
              },
              {
                "trait_id": "facet_cheerfulness",
                "name": "明朗性",
                "category": "personality",
                "percentile": 0.9940439440943019,
                "significant": true
              },
              {
                "trait_id": "facet_excitement_seeking",
                "name": "刺激希求性",
                "category": "personality",
                "percentile": 0.9997055509426556,
                "significant": true
              },
              {
                "trait_id": "facet_friendliness",
                "name": "友好性",
                "category": "personality",
                "percentile": 0.9991735484500139,
                "significant": true
              },
              {
                "trait_id": "facet_gregariousness",
                "name": "社交性",
                "category": "personality",
                "percentile": 0.9602369016231298,
                "significant": true
              }
            ]
          },
          {
            "trait_id": "big5_agreeableness",
            "name": "協調性",
            "category": "personality",
            "percentile": 0.6835293098300844,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_altruism",
                "name": "利他主義",
                "category": "personality",
                "percentile": 0.6917487512446171,
                "significant": true
              },
              {
                "trait_id": "facet_cooperation",
                "name": "協働性",
                "category": "personality",
                "percentile": 0.14485396026375474,
                "significant": true
              },
              {
                "trait_id": "facet_modesty",
                "name": "謙虚さ",
                "category": "personality",
                "percentile": 8.3510264814457e-9,
                "significant": true
              },
              {
                "trait_id": "facet_morality",
                "name": "強硬さ",
                "category": "personality",
                "percentile": 0.13482488590642866,
                "significant": true
              },
              {
                "trait_id": "facet_sympathy",
                "name": "共感度",
                "category": "personality",
                "percentile": 0.5225705647683129,
                "significant": true
              },
              {
                "trait_id": "facet_trust",
                "name": "信用度",
                "category": "personality",
                "percentile": 0.9999762525748865,
                "significant": true
              }
            ]
          },
          {
            "trait_id": "big5_neuroticism",
            "name": "感情起伏",
            "category": "personality",
            "percentile": 0.3443811655423583,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_anger",
                "name": "激情的",
                "category": "personality",
                "percentile": 0.01859478356930322,
                "significant": true
              },
              {
                "trait_id": "facet_anxiety",
                "name": "心配性",
                "category": "personality",
                "percentile": 0.29713035531870124,
                "significant": true
              },
              {
                "trait_id": "facet_depression",
                "name": "悲観的",
                "category": "personality",
                "percentile": 0.07334386218074274,
                "significant": true
              },
              {
                "trait_id": "facet_immoderation",
                "name": "利己的",
                "category": "personality",
                "percentile": 0.22340954892982745,
                "significant": true
              },
              {
                "trait_id": "facet_self_consciousness",
                "name": "自意識過剰",
                "category": "personality",
                "percentile": 0.42125874329980123,
                "significant": true
              },
              {
                "trait_id": "facet_vulnerability",
                "name": "低ストレス耐性",
                "category": "personality",
                "percentile": 0.22731164582760738,
                "significant": true
              }
            ]
          }
        ]
      
/*
    useEffect(()=>{
        const fetchBig5 = async () => {
            const responseData = await sendRequest(
                `http://localhost:5001/big5db/`
            );
            setLoadedBig5s(responseData.Big5s);
        };
        fetchBig5();
    });
*/

    return(
        <div>
            <CardColumns>
                <Big5List items={big5s} />
            </CardColumns>
        </div>
    );
};

export default Big5s;