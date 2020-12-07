import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl, getCookie } from '../baseUrl';
import { Link } from 'react-router-dom';
import { Label, Col, Row, Button } from 'reactstrap';

class KindOfFishList extends Component {

  constructor(props) {
    super(props);

    this.state = {

      columns: [
        { field: 'kindOfFishId', headerName: 'KindOfFishId', width: 160 },
        { field: 'kind', headerName: 'Kind', width: 160 }
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
        <div>
          
        </div>
        <div style={{ height: 640, width: '100%' }}>
          <DataGrid rows={state.rows} columns={state.columns} pageSize={10}
            onSelectionChange={(newSelection) => { this.setSelection(this.state.rows[newSelection.rowIds]); }}
          />
        </div>
        <Link to={`/fishEditForm/${ getCookie("organizationId")}`}>
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
        kindOfFishId: element.kindOfFishId,
        kind: element.kind
      };
      i++;
    });
    return res;
  }

  componentDidMount() {

    fetch(baseUrl + `KindOfFish/Get`, {
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

export default KindOfFishList;