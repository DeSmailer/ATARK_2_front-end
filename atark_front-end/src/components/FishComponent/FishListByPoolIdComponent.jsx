import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl } from '../baseUrl';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { SetWord } from '../translations/Translate';

class FishListByPoolId extends Component {

  constructor(props) {
    super(props);

    this.state = {

      columns: [
        { field: 'fishId', headerName: 'FishId', width: 160 },
        { field: 'kindOfFishId', headerName: 'KindOfFishId', width: 160 },
        { field: 'sex', headerName: 'Sex', width: 160 },
        { field: 'dateOfBirth', headerName: 'DateOfBirth', width: 160 },
        { field: 'poolNowId', headerName: 'PoolNowId', width: 160 },
        { field: 'relocationPoolId', headerName: 'RelocationPoolId', width: 160 },
        { field: 'weight', headerName: 'Weight', width: 160 },
        { field: 'adulthood', headerName: 'Adulthood', width: 160 },
        { field: 'state', headerName: 'State', width: 160 }
      ],
      rows: [],
      currentRow: {
        id: -1
      }
    }

    this.dataGridDemo = this.dataGridDemo.bind(this);
    this.setSelection = this.setSelection.bind(this);
    this.deleteSucces = this.deleteSucces.bind(this);
  }
  setSelection(row) {
    this.setState({ currentRow: row });
    console.log(this.state.currentRow)
    console.log("Ид" + this.state.currentRow.fishId)
  }

  dataGridDemo(state) {
    return (
      <div>
        <div style={{ height: 620, width: '100%' }}>
          <DataGrid rows={state.rows} columns={state.columns} pageSize={10}
            onSelectionChange={(newSelection) => { this.setSelection(this.state.rows[newSelection.rowIds]); }}
          />
        </div>
        <Link to={`/AddFishComponent/${this.props.match.params.poolId}`}>
          <Button className="btn btn-primary"
            style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            {SetWord("Add Fish")}
          </Button>
        </Link>
        <Link to={`/FishEdit/${this.state.currentRow.fishId}`}>
          <Button className="btn btn-primary"
            style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            {SetWord("Edit fish")}
          </Button>
        </Link>
        <Button onClick={this.deleteSucces} className="btn btn-primary"
          style={{ width: '15%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
          {SetWord("Remove fish")}
        </Button>
        <Link to={`/PregancyListByFishId/${this.state.currentRow.fishId}`}>
          <Button className="btn btn-primary"
            style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            {SetWord("Pregnancy")}
          </Button>
        </Link>
        <Link to={`/AddPregancyAdmin/${this.state.currentRow.fishId}`}>
          <Button className="btn btn-primary"
            style={{ width: '15%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            {SetWord("Add Pregnancy")}
          </Button>
        </Link>
        <Link to={`/MilkinhListByFishId/${this.state.currentRow.fishId}`}>
          <Button className="btn btn-primary"
            style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            {SetWord("Milking")}
          </Button>
        </Link>
        <Link to={`/AddMilkingAdmin/${this.state.currentRow.fishId}`}>
          <Button className="btn btn-primary"
            style={{ width: '15%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            {SetWord("Add milking")}
          </Button>
        </Link>
        <Link to={`/AddHerdAdminComponent/${this.props.match.params.poolId}`}>
          <Button className="btn btn-primary"
            style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            {SetWord("Add herd")}
          </Button>
        </Link>
      </div >
    );
  }
  deleteSucces() {
    fetch(baseUrl + `Fish/Delete/${this.state.currentRow.fishId}`, {
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
  fillRows(result) {
    var res = [];
    var i = 0;
    result.forEach(element => {
      res[i] = {
        id: i,
        fishId: element.fishId,
        kindOfFishId: element.kindOfFishId,
        sex: element.sex,
        dateOfBirth: element.dateOfBirth,
        poolNowId: element.poolNowId,
        relocationPoolId: element.relocationPoolId,
        weight: element.weight,
        adulthood: element.adulthood,
        state: element.state,
      };
      i++;
    });
    return res;
  }

  componentDidMount() {

    fetch(baseUrl + `Fish/GetFishByPoolId/${this.props.match.params.poolId}`, {
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

export default FishListByPoolId;