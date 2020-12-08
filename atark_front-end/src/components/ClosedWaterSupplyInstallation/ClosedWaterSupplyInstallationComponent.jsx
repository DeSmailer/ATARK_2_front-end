import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl, getCookie } from '../baseUrl';
import { Link } from 'react-router-dom';
import { Label, Col, Row, Button } from 'reactstrap';

class ClosedWaterSupplyInstallationListByOrganizationId extends Component {

  constructor(props) {
    super(props);

    this.state = {

      columns: [
        { field: 'closedWaterSupplyInstallationId', headerName: 'ClosedWaterSupplyInstallationId', width: 160 },
        { field: 'organizationId', headerName: 'OrganizationId', width: 160 },
        { field: 'location', headerName: 'Location', width: 160 }
      ],
      rows: [],
      currentRow: {
        id: -1,
      }
    }

    this.dataGridDemo = this.dataGridDemo.bind(this);
    this.setSelection = this.setSelection.bind(this);
    this.updateRelocationPoolToPoolNow = this.updateRelocationPoolToPoolNow.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.RedistributeFish = this.RedistributeFish.bind(this);
    this.deleteSucces = this.deleteSucces.bind(this);

  }
  setSelection(row) {
    this.setState({ currentRow: row });
    console.log(this.state.currentRow)
    console.log(this.state.currentRow.closedWaterSupplyInstallationId)
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
        <Link to={`/poolListByCWIId/${this.state.currentRow.closedWaterSupplyInstallationId}`}>
          <div >
            <Button>
              Басейни в узв
            </Button>
          </div>
        </Link>
        <Link to={`/ExpectedWeightOfFishInThePoolByCWIId/${this.state.currentRow.closedWaterSupplyInstallationId}`}>
          <div >
            <Button>
              Стан басейній в УЗВ
            </Button>
          </div>
        </Link>
        <div >
          <Button onClick={this.updateRelocationPoolToPoolNow} >
            Відкат БЛ
            </Button>
        </div>
        <div >
          <Button onClick={this.RedistributeFish} >
            Робота БЛ
            </Button>
        </div>
        <div >
          <Button onClick={this.deleteSucces} >
            Видалити УЗВ
            </Button>
        </div>
        <Link to={`/AddClosedWaterSupplyInstallation`}>
          <div >
            <Button>
              Додати узв
            </Button>
          </div>
        </Link>
      </div >
    );
  }
  handleSubmit1 = event => {
    this.updateRelocationPoolToPoolNow();
    event.preventDefault();
  }
  updateRelocationPoolToPoolNow() {
    console.log('asd');
    fetch(baseUrl + `Fish/UpdateRelocationPoolToPoolNow`, {
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
            alert("Ok");
          }
        },
        (error) => {
          alert(error);

        }
      );
  }
  RedistributeFish() {
    console.log('asd');
    fetch(baseUrl + `BusinessLogic/RedistributeFish/${this.state.currentRow.closedWaterSupplyInstallationId}`, {
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
            alert("Ok");
          }
        },
        (error) => {
          alert(error);

        }
      );
  }


  deleteSucces() {
    fetch(baseUrl + `ClosedWaterSupplyInstallation/Delete/${this.state.currentRow.closedWaterSupplyInstallationId}`, {
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
        closedWaterSupplyInstallationId: element.closedWaterSupplyInstallationId,
        organizationId: element.organizationId,
        location: element.location
      };
      i++;
    });
    return res;
  }

  componentDidMount() {

    fetch(baseUrl + `ClosedWaterSupplyInstallation/GetByOrganizatoinId/${getCookie("organizationId")}`, {
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

export default ClosedWaterSupplyInstallationListByOrganizationId;