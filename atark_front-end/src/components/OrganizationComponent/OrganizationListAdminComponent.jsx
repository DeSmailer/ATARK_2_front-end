import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl } from '../baseUrl';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class OrganizationListAdmin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { field: 'organizationId', headerName: 'OrganizationId', width: 130 },
        { field: 'mail', headerName: 'Mail', width: 240 },
        { field: 'password', headerName: 'Password', width: 160 },
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'foundationDate', headerName: 'FoundationDate', width: 180 },
        { field: 'phoneNumber', headerName: 'PhoneNumber', width: 160 }
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
        <div style={{ height: 620, width: '100%' }}>
          <DataGrid rows={state.rows} columns={state.columns} pageSize={10}
            onSelectionChange={(newSelection) => { this.setSelection(this.state.rows[newSelection.rowIds]); }}
          />
        </div>
        <Link to={`/AddOrganizationAdmin`}>
          <Button className="btn btn-primary"
            style={{ width: '15%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
           Додати Організацію
            </Button>
        </Link>
        {/* <Link to={`/poolListByCWIId/${this.state.currentRow.closedWaterSupplyInstallationId}`}>
          <Button className="btn btn-primary"
            style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            Басейни в узв
            </Button>
        </Link>
        <Link to={`/ExpectedWeightOfFishInThePoolByCWIId/${this.state.currentRow.closedWaterSupplyInstallationId}`}>
          <Button className="btn btn-primary"
            style={{ width: '15%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            Стан басейів в УЗВ
            </Button>
        </Link>
        <Button onClick={this.updateRelocationPoolToPoolNow} className="btn btn-primary"
          style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
          Відкат БЛ
            </Button>
        <Button onClick={this.RedistributeFish} className="btn btn-primary"
          style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
          Робота БЛ
            </Button>
        <Button onClick={this.deleteSucces} className="btn btn-primary"
          style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
          Видалити УЗВ
            </Button>
        <Link to={`/AddClosedWaterSupplyInstallation`}>
          <Button className="btn btn-primary"
            style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            Додати узв
            </Button>
        </Link>
        <Link to={`/EditClosedWaterSupplyInstallation/${this.state.currentRow.closedWaterSupplyInstallationId}`}>
          <Button className="btn btn-primary"
            style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}>
            Змінити УЗВ
            </Button>
        </Link> */}
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
        organizationId: element.organizationId,
        mail: element.mail,
        password: element.password,
        name: element.name,
        foundationDate: element.foundationDate,
        phoneNumber: element.phoneNumber
      };
      i++;
    });
    return res;
  }

  componentDidMount() {

    fetch(baseUrl + `Organization/Get`, {
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

export default OrganizationListAdmin;