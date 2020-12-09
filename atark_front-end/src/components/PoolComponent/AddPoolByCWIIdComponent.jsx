import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl, getCookie } from '../baseUrl';
import { Link } from 'react-router-dom';
import { Label, Col, Row, Button } from 'reactstrap';

class AddPoolByCWIId extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ClosedWaterSupplyInstallationId: this.props.match.params.closedWaterSupplyInstallationId,
      Volume: "",
      
      isLoaded: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.addPool = this.addPool.bind(this);
  }


  addPool() {
    const newAccount = {
      ClosedWaterSupplyInstallationId: this.state.ClosedWaterSupplyInstallationId,
      Volume: this.state.Volume
    }
    fetch(baseUrl + `Pool/Add`, {
      method: 'POST',
      body: JSON.stringify(newAccount),
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
  componentDidMount() {
    this.setState({
      isLoaded: true,
  });
}
  handleSubmit = event => {
    this.addPool();
    event.preventDefault();
  }

  changeVolume(event) {
    this.setState({ Volume: event.target.value });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="text-center">
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="col-12">

          </div>
          <div style={{ width: "600px", height: "480px", marginLeft: "20%", marginTop: "10%" }}>
            <h2 style={{ alingCenter: "center", marginLeft: "150px", marginBottom: "40px" }}>Додати Басейн</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="form-group" style={{ width: "600px" }}> Узв
                        <input className="form-control" id="Location" name="Location" value={this.state.ClosedWaterSupplyInstallationId} />
                </label>
                
                <label className="form-group" style={{ width: "600px" }}> Об'єм
                        <input className="form-control" id="Location" name="Location" value={this.state.Volume} onChange={this.changeVolume} />
                </label>
                <button
                  className="btn btn-primary btn-lg disabled"
                  type="submit"
                  style={{ width: '600px', backgroundColor: '#00AF00', marginBottom: "20px", marginTop: "50px" }}
                > Добавить
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default AddPoolByCWIId;