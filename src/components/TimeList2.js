import React, { Component } from 'react';
import Time from './Time2';
import axios from 'axios';

var scurmId = "";
var candi_date = [];
var received = [];
var rows = [];
var idd = "";
var urll = "";
class TimeList2 extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
          id: "",
          isLoading: true,
          selected: "",
          url: "",
          time: ""
        }
        
      }  
    componentWillMount(){
        var idx = (window.location.href).lastIndexOf("/")
        if ((window.location.href !== "http://localhost:3000/")&&(window.location.href.substring(idx+1))){ 
        axios.get("http://143.248.140.106:2980/scrum/"+window.location.href.substring(idx+1))
        .then(res=>{
            
            candi_date = res.data.scrum.candi_date[0].time;
            received = res.data.statistics
            console.log("STATISTICS:" + received)
            this.setState({
                isLoading:false
            });
        })}
    }

    componentDidMount(){
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1500);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.time)
        console.log(this.state.time)
        if(prevState.time !== this.state.time) {
            var idx2 = (window.location.href).lastIndexOf("/")
            if (!(window.location.href.substring(idx2+1)) && (urll)){
            axios.get("http://143.248.140.106:2980/scrum/"+urll)
                .then(res=>{
                
                candi_date = res.data.scrum.candi_date[0].time;
                received = res.data.statistics
                console.log("STATISTICS:" + received)
                this.setState({
                    isLoading:false
                });
            })} 
            else if ((window.location.href.substring(idx2+1))) {
                axios.get("http://143.248.140.106:2980/scrum/"+window.location.href.substring(idx2+1))
                .then(res=>{
                
                candi_date = res.data.scrum.candi_date[0].time;
                received = res.data.statistics
                console.log("STATISTICS:" + received)
                this.setState({
                    isLoading:false
                });
            })
            }
        }
    }

    render() {

        this.state.id = this.props.id
        this.state.url = this.props.url
        idd = this.state.id
        urll = this.state.url
        //console.log("UNDEFINED WHYYYY" + urll)
        
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
