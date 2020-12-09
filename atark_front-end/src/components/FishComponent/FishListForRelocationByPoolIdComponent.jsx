import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl, getCookie } from '../baseUrl';
import FishEditForm from './FishEditComponent'
import { Link } from 'react-router-dom';
import { Label, Col, Row, Button } from 'reactstrap';

class FishListForRelocationByPoolId extends Component {

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
    this.ConfirmRelocation = this.ConfirmRelocation.bind(this);
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
        <Link to={`/MilkinhListByFishId/${this.state.currentRow.fishId}`}>
            <Button className="btn btn-primary"
                    style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px"}}>
              дойки
            </Button>
        </Link>
        <Link to={`/PregancyListByFishId/${this.state.currentRow.fishId}`}>
            <Button className="btn btn-primary"
                    style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px"}}>
              вагітності
            </Button>
        </Link>
          <Button onClick={this.ConfirmRelocation} className="btn btn-primary"
                    style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px"}}>
            Підтвердити перенос
            </Button>
        <Link to={`/FishEdit/${this.state.currentRow.fishId}`}>
            <Button className="btn btn-primary"
                    style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px"}}>
              Змінити рибину
            </Button>
        </Link>
        <Link to={`/AddFishComponent/${this.props.match.params.poolId}`}>
            <Button className="btn btn-primary"
                    style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px"}}>
              Додати рибину
            </Button>
        </Link>
      </div >
    );
  }

  ConfirmRelocation() {
    fetch(baseUrl + `Fish/ConfirmRelocation/${this.state.currentRow.fishId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      credentials: 'same-origin'
    })
      .then(
        (response) => {
          if (response.ok) {
            this.componentDidMount();
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

    fetch(baseUrl + `Fish/GetFishForRelocationByPoolId/${this.props.match.params.poolId}`, {
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

export default FishListForRelocationByPoolId;