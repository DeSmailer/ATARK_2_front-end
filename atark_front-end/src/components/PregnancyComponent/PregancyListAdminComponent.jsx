import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl } from '../baseUrl';
import { Button } from 'reactstrap';

class PregancyListAdmin extends Component {

  constructor(props) {
    super(props);

    this.state = {

      columns: [
        { field: 'pregnancyId', headerName: 'PregnancyId', width: 160 },
        { field: 'fishId', headerName: 'FishId', width: 160 },
        { field: 'startDateOfPregnancy', headerName: 'StartDateOfPregnancy', width: 160 }
      ],
      rows: [],
      currentRow: {
        id: -1
      }
    }

    this.dataGridDemo = this.dataGridDemo.bind(this);
    this.setSelection = this.setSelection.bind(this);
    this.selectRout = this.selectRout.bind(this);
  }
  setSelection(row) {
    this.setState({ currentRow: row });
    console.log(this.state.currentRow)
    console.log("Ид" + this.state.currentRow.milkingId)
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
          <Button onClick={() => this.selectRout()} className="btn btn-primary"
            style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            вміст басейну басейні
            </Button>
        </div>
      </div >
    );
  }

  selectRout() {
    if (this.state.currentRow.whoIsInThePool === "fish") {
      console.log(this.state.currentRow.whoIsInThePool);
      window.location.href = `/FishListByPoolId/${this.state.currentRow.poolId}`
    }
    else if (this.state.currentRow.whoIsInThePool === "herd") {
      console.log(this.state.currentRow.whoIsInThePool);
      window.location.href = `/HerdListByPoolId/${this.state.currentRow.poolId}`
    }
  }

  fillRows(result) {
    var res = [];
    var i = 0;
    result.forEach(element => {
      res[i] = {
        id: i,
        pregnancyId: element.pregnancyId,
        fishId: element.fishId,
        startDateOfPregnancy: element.startDateOfPregnancy
      };
      i++;
    });
    return res;
  }

  componentDidMount() {

    fetch(baseUrl + `Pregnancy/Get`, {
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

export default PregancyListAdmin;