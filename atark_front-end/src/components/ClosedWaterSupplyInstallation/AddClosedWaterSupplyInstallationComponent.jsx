import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl, getCookie } from '../baseUrl';
import { Link } from 'react-router-dom';
import { Label, Col, Row, Button } from 'reactstrap';

class AddClosedWaterSupplyInstallation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Location: "",
      OrganizationId :  getCookie('organizationId'),
        isLoaded: false,
        optionsLocationId: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
}


addLocation() {
    const newAccount = {
      Location: this.state.Location,
        OrganizationId: this.state.OrganizationId,
    }
    fetch(baseUrl + `ClosedWaterSupplyInstallation/Add`, {
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

handleSubmit = event => {
    this.addLocation();
    event.preventDefault();
}

changeLocation(event) {
    this.setState({ Location: event.target.value });
    console.log(this.state.Location);
    console.log(this.state.OrganizationId);

}

componentDidMount() {

    fetch(baseUrl + "/db/Location/Get", {
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
                this.setState({
                    isLoaded: true,
                    optionsLocationId: this.fillLocationId(result)
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
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
                <h2 style={{ alingCenter: "center", marginLeft: "150px", marginBottom: "40px" }}>Додати УЗВ</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="form-group" style={{ width: "600px" }}> Локація 
                        <input className="form-control" id="Location" name="Location" value={this.state.Location} onChange={this.changeLocation} />
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

export default AddClosedWaterSupplyInstallation;