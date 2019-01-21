import React, { Component } from 'react';
import Time from './Time2';
import axios from 'axios';

var scurmId = "";

class TimeList2 extends Component {
  
    componentDidMount(){
        axios.get("http://143.248.140.106:2980/scrum/"+"5c45d5fc2e4d2623227ffd10")
        .then(res=>{
            console.log('asd: ${res.scrum.candi_date}')
        })
    }

    render() {

        var candi_date = [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var first = candi_date.indexOf(1)/2;
        var last = candi_date.lastIndexOf(1)/2;
        
        var received = [0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        var rows = [];
        for (var i=first; i<last; i++) {
            rows.push(<Time key={i} text={i + ":00"} colour = {"rgb(" + (1-received[i*2])*255 + ",200,230)"}/>)
            rows.push(<Time key={i} text={i + ":30"} colour = {"rgb(" + (1-received[i*2+1])*255 + ",200,230)"}/>)
            
        }


        return (
            <div className='center' id="main">
            {rows}

                
            </div>
        );
    }
}

export default TimeList2;