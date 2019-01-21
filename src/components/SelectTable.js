import React, { Component } from 'react';
import './SelectTable.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

var startTime = "";
var endTime = "";

class SelectTable extends Component {
    constructor () {
        super()
        this.state = {
        }
      }

    _onSelect (option) {
        console.log('You selected1 ', option.label)
        startTime = option.label
    }

    _onSelect2 (option) {
        console.log('You selected2 ', option.label)
        endTime = option.label
    }
    
    toServer() {
        console.log("clicked! " + startTime + " and " + endTime )
        var stime = startTime.substring(0,startTime.indexOf(":"))
        var etime = endTime.substring(0,endTime.indexOf(":"))
        
        var candi_date = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        for (var i=stime*2; i<etime*2; i++) {
            candi_date[i] = 1;
        }
        console.log(candi_date)

        ///candi_cate 를 서버에 올려주면 됨 (confirm 클릭 했을 때)
    }

    render() {
        const options = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
        "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]
        const defaultOption = options[0]
        

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
              <button className="align" onClick={this.toServer.bind(this)}>Confirm</button>
            </main>
          );


    };
  
}

export default SelectTable;