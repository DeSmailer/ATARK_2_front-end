import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl } from '../baseUrl';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { SetWord } from '../translations/Translate';

class StateOfTheSystemListAdmin extends Component {

  constructor(props) {
    super(props);

    this.state = {

      columns: [
        { field: 'stateOfTheSystemId', headerName: 'StateOfTheSystemId', width: 160 },
        { field: 'temperature', headerName: 'Temperature', width: 160 },
        { field: 'oxygenLevel', headerName: 'OxygenLevel', width: 160 },
        { field: 'dateOfLastCheck', headerName: 'DateOfLastCheck', width: 160 }
      ],
      rows: [],
      currentRow: {
        id: -1
      }
    }

    this.dataGridDemo = this.dataGridDemo.bind(this);
    this.setSelection = this.setSelection.bind(this);
  }
  setSelection(row) {
    this.setState({ currentRow: row });
  }

  dataGridDemo(state) {
    return (
      <div>
        <div>

        </div>
        <div style={{ height: 620, width: '100%' }}>
          <DataGrid rows={state.rows} columns={state.columns} pageSize={10}
            onSelectionChange={(newSelection) => { this.setSelection(this.state.rows[newSelection.rowIds]); }}
          />
        </div>
        <div >
          <Link to={`/EditStateOfTheSystemAdmin/${this.state.currentRow.stateOfTheSystemId}`}>
            <Button className="btn btn-primary"
              style={{ width: '15%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
              {SetWord("Edit State Of The System")}
            </Button>
          </Link>
        </div>
      </div >
    );
  }

  fillRows(result) {
    var res = [];
    var i = 0;
    result.forEach(element => {
      res[i] = {
        id: i,
        stateOfTheSystemId: element.stateOfTheSystemId,
        temperature: element.temperature,
        oxygenLevel: element.oxygenLevel,
        dateOfLastCheck: element.dateOfLastCheck
      };
      i++;
    });
    return res;
  }

  componentDidMount() {

    fetch(baseUrl + `StateOfTheSystem/Get`, {
      method: "GET",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      credentials: 'same-origin'
    })
      .then(result => result.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            rows: this.fillRows(result)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      this.dataGridDemo(this.state)
    );
  }
}

export default StateOfTheSystemListAdmin;