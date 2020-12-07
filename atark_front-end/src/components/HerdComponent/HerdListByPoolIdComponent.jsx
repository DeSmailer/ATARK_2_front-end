import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl, getCookie } from '../baseUrl';
import { Link } from 'react-router-dom';
import { Label, Col, Row, Button } from 'reactstrap';

class HerdListByPoolId extends Component {

  constructor(props) {
    super(props);

    this.state = {

      columns: [
        { field: 'herdId', headerName: 'HerdId', width: 160 },
        { field: 'kindOfFishId', headerName: 'KindOfFishId', width: 160 },
        { field: 'dateOfBirth', headerName: 'DateOfBirth', width: 160 },
        { field: 'poolIdNow', headerName: 'PoolIdNow', width: 160 },
        { field: 'averageWeightOfAnIndividual', headerName: 'AverageWeightOfAnIndividual', width: 160 },
        { field: 'quantity', headerName: 'Quantity', width: 160 }
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
    console.log(this.state.currentRow)
    console.log("Ид" + this.state.currentRow.fishId)
  }

  dataGridDemo(state) {
    return (
      <div>
        <div style={{ height: 640, width: '100%' }}>
          <DataGrid rows={state.rows} columns={state.columns} pageSize={10}
            onSelectionChange={(newSelection) => { this.setSelection(this.state.rows[newSelection.rowIds]); }}
          />
        </div>
        <Link to={`/fishEditForm/${this.state.currentRow.fishId}`}>
          <div >
            <Button>
              Регистрация
            </Button>
          </div>
        </Link>
      </div >
    );
  }
  fillRows(result) {
    var res = [];
    var i = 0;
    result.forEach(element => {
      res[i] = {
        id: i,
        herdId: element.herdId,
        kindOfFishId: element.kindOfFishId,
        dateOfBirth: element.dateOfBirth,
        poolIdNow: element.poolIdNow,
        averageWeightOfAnIndividual: element.averageWeightOfAnIndividual,
        quantity: element.quantity
      };
      i++;
    });
    return res;
  }

  componentDidMount() {

    fetch(baseUrl + `Herd/GetAllHerdByPoolId/${this.props.match.params.poolId}`, {
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

export default HerdListByPoolId;