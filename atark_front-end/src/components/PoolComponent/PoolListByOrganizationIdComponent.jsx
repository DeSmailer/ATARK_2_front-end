import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl, getCookie } from '../baseUrl';
import {Button } from 'reactstrap';

class PoolListByOrganizationId extends Component {

  constructor(props) {
    super(props);

    this.state = {

      columns: [
        { field: 'poolId', headerName: 'PoolId', width: 160 },
        { field: 'closedWaterSupplyInstallationId', headerName: 'ClosedWaterSupplyInstallationId', width: 160 },
        { field: 'whoIsInThePool', headerName: 'WhoIsInThePool', width: 160 },
        { field: 'volume', headerName: 'Volume', width: 160 }
      ],
      rows: [],
      currentRow: {
        id: -1
      }
    }

    this.dataGridDemo = this.dataGridDemo.bind(this);
    this.setSelection = this.setSelection.bind(this);
    this.selectRout = this.selectRout.bind(this);
    this.deleteSucces = this.deleteSucces.bind(this);
  }
  setSelection(row) {
    this.setState({ currentRow: row });
    console.log(this.state.currentRow)
    console.log("Ид" + this.state.currentRow.poolId)
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
                    style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px"}}>
            вміст басейну
            </Button>
        
          <Button onClick={this.deleteSucces} className="btn btn-primary"
                    style={{ width: '15%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px"}}>
            Видалити басейн
            </Button>
        </div>

      </div >
    );
  }
  deleteSucces() {
    fetch(baseUrl + `Pool/Delete/${this.state.currentRow.poolId}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      credentials: 'same-origin'
    })
      .then(
        (response) => {
          if (response.ok) {
            this.componentDidMount()
            alert("Ok");
          }
        },
        (error) => {
          alert(error);

        }
      );
  }
  selectRout() {
    if (this.state.currentRow.whoIsInThePool !== "herd") {
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
        poolId: element.poolId,
        closedWaterSupplyInstallationId: element.closedWaterSupplyInstallationId,
        whoIsInThePool: element.whoIsInThePool,
        volume: element.volume
      };
      i++;
    });
    return res;
  }

  componentDidMount() {

    fetch(baseUrl + `Pool/GetByOrganizatoinId/${getCookie("organizationId")}`, {
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

export default PoolListByOrganizationId;