import React, { Component } from 'react';
import Time from './Time';
import axios from 'axios';

var candi_date = [];
var idd = "";
var urll = "";

class TimeList extends Component {
  /*
  state = {
    isLoading: true,
  }
  */
  constructor (props) {
    super(props)
    this.state = {
      id: "",
      isLoading: true,
      selected: "",
      url: ""
    }
    
  }  
  componentWillMount(){
    console.log("WILL   "+window.location.href)
    console.log("http://localhost:3000/"===window.location.href)
    console.log(urll+"    is URLL")

    var idx = (window.location.href).lastIndexOf("/")

    if ((window.location.href !== "http://localhost:3000/")&&(window.location.href.substring(idx+1))) {
      console.log("GET???")
      axios.get("http://143.248.140.106:2980/scrum/"+window.location.href.substring(idx+1))
      .then(res=>{
          console.log('HIHI')
          //console.log(res.data.scrum.candi_date[0].time)
          console.log(res.data.statistics)
          candi_date = res.data.scrum.candi_date[0].time;
          this.setState({
              isLoading:false
          });
      })
    }
  }


  componentDidUpdate(prevProps, prevState){

    // this.state.id = this.props.id
    // this.state.url = this.props.url
    // idd = this.state.id
    // urll = this.state.url
    console.log("get!!!" +" "+this.props.url)
    console.log("get!!!" +" "+prevProps.url)
    if(prevProps.url !== this.props.url) {
    
    if(!(urll === "")) {
      console.log("GET!!!")
      axios.get("http://143.248.140.106:2980/scrum/"+urll)
      .then(res=>{
        console.log('HIHI')
        //console.log(res.data.scrum.candi_date[0].time)
        //console.log(res.data.statistics)
        candi_date = res.data.scrum.candi_date[0].time;
        this.setState({
            isLoading:false
        });
    })


    }

    

    console.log("patch")
    this.fetchData();
  }
  }

  fetchData = () => {

    var idx2 = (window.location.href).lastIndexOf("/")
    console.log("checkcheck "+window.location.href.substring(idx2+1))
    var jsonorigin = {uid:this.state.id,
                      time:this.state.selected}//'{"uid": ' + "master"+ ',"time":' +  this.state.selected + '}'
    if (!(window.location.href.substring(idx2+1))){
    fetch("http://143.248.140.106:2980/scrum/"+urll,{
      method:"PATCH",
      dataType:"JSON",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(jsonorigin)  
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });} else {
      fetch("http://143.248.140.106:2980/scrum/"+window.location.href.substring(idx2+1),{
      method:"PATCH",
      dataType:"JSON",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(jsonorigin)  
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
  
  onUpdate = (data) => {
    this.setState({selected: data})
    console.log(this.state.selected)
    this.fetchData();
    console.log(this.state.url + "URL")
    console.log(this.state.id + "ID")
  };

   

  render() {
    this.state.id = this.props.id
    this.state.url = this.props.url
    idd = this.state.id
    urll = this.state.url

    


    

    var first = candi_date.indexOf(1)/2;
    var last = candi_date.lastIndexOf(1)/2;
    var rows = [];
    for (var i=first; i<last; i++) {
      rows.push(<Time key={i*2+1} text={i + ":00"} onUpdate={this.onUpdate}/>)
      rows.push(<Time key={i*2+2} text={i + ":30"} onUpdate={this.onUpdate}/>)
    }
    

    return (
      //<div className='center' onClick={(e)=>{e.preventDefault(); console.log("123")}} id="main">
      <div className='center' id="main">
        {rows}
         
      </div>
    );
  }
}

export default TimeList;