import React, { Component } from 'react';
import './SelectTable.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class SelectTable extends Component {
    

    render() {
        const options = ["0:00", "1:00", "2:00", "3:00"]
        const defaultOption = options[0]
        return (
            <main className="table-template">
              <div className="side-align">
                  <div className="align">From</div>
                  <Dropdown options={options} onChange={this._onselect} value={defaultOption} placeholder="select an option" className="side-paddings"></Dropdown>
              </div>
              <div>
                    <div className="align">to</div>
                  <Dropdown options={options} onChange={this._onselect} value={defaultOption} placeholder="select an option" className="side-paddings"></Dropdown>
              </div>
            </main>
          );


    };
  
}

export default SelectTable;