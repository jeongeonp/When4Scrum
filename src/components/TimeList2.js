import React, { Component } from 'react';
import Time from './Time2';
import axios from 'axios';

var scurmId = "";
var candi_date = [];
var received = [];
var rows = [];
class TimeList2 extends Component {
    
    state = {
        isLoading: true,
    }
    componentWillMount(){
        axios.get("http://143.248.140.106:2980/scrum/5c45dbd52e4d2623227ffd11")
        .then(res=>{
            //console.log('HI')
            //console.log(res.data.scrum.candi_date[0].time)
            //console.log(res.data.statistics)
            candi_date = res.data.scrum.candi_date[0].time;
            received = res.data.statistics
            this.setState({
                isLoading:false
            });
        })
      }

    render() {
        // candi_date = this.props.candi_date;
        const { isLoading } = this.state;
        // received = this.props.received;
        //console.log("is candidate passed? " + candi_date);

        //console.log("candidate: " + candi_date)
        var first = candi_date.indexOf(1)/2;
        var last = candi_date.lastIndexOf(1)/2;

        //console.log(this.state);
        //console.log(received);
        //var received = [0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        
        rows = [];
        for (var i=first; i<last; i++) {
            rows.push(<Time key={i} text={i + ":00"} colour = {"rgb(" + (1-received[i*2])*255 + ",200,230)"}/>)
            rows.push(<Time key={i} text={i + ":30"} colour = {"rgb(" + (1-received[i*2+1])*255 + ",200,230)"}/>)
        }
        //var candi_date = [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        //console.log("candidate : " + candi_date)
        //console.log("BYE");

        return (
            <div className='center' id="main">
            {rows}


            </div>
        );
    }
}

export default TimeList2;
