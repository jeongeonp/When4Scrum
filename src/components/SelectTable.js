import React, { Component } from 'react';
import './SelectTable.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import axios from 'axios';

var startTime = "";
var endTime = "";



class SelectTable extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id: "",
            date: ""
        }
        
    }

    propUpdate(props) {
        
    }
    

    _onSelect (option) {
        console.log('You selected1 ', option.label)
        startTime = option.label
    }

    _onSelect2 (option) {
        console.log('You selected2 ', option.label)
        endTime = option.label
        //console.log(id + "   dsjkl" + date)
        //console.log(this.props)
        //console.log(this.state.id + "dddddd   " + this.state.date)
    }
    
    toServer() {
        
        this.state.id = this.props.id
        this.state.date = this.props.date
        console.log(this.state.id + "    dddddd   " + this.state.date)

        console.log("clicked! " + startTime + " and " + endTime )
        var stime = startTime.substring(0,startTime.indexOf(":"))
        var etime = endTime.substring(0,endTime.indexOf(":"))
        
        var candi_date = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        for (var i=stime*2; i<etime*2; i++) {
            candi_date[i] = 1;
        }
        console.log(candi_date)
        ///candi_cate 를 서버에 올려주면 됨 (confirm 클릭 했을 때)

        var json = '{ "name": "trial", "candi_date": {"date": "' + this.state.date + '", "time: [' + candi_date + ']}, "participants": { "uid": "' + 
        this.state.id + '", "time": [' + candi_date + ']} }';

        console.log(json);


        axios.post('http://143.248.140.106:2980/scrum', {
            json
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    render() {
        const options = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
        "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]
        const defaultOption = options[0]
        console.log(this.props.id)

        

        return (
            <main className="table-template">
              <div className="side-align">
                  <div className="align">From</div>
                  <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="select an option" className="side-paddings">
                    
                  </Dropdown>
              </div>
              <div>
                    <div className="align">to</div>
                  <Dropdown options={options} onChange={this._onSelect2} value={defaultOption} placeholder="select an option" className="side-paddings"></Dropdown>
              </div>
              
              <button className="align" onClick={this.toServer.bind(this)} >Confirm</button>
            </main>
          );


    };
  
}

export default SelectTable;