import React, { Component } from 'react';
import { baseUrl, getCookie } from '../baseUrl';
import { SetWord } from '../translations/Translate';

class AddClosedWaterSupplyInstallation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Location: "",
            OrganizationId: getCookie('organizationId'),
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
                        <h2 style={{ alingCenter: "center", marginLeft: "150px", marginBottom: "40px" }}>{SetWord("Add")} {SetWord("CWSI")}</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Location")}
                                    <input className="form-control" id="Location" name="Location" value={this.state.Location} onChange={this.changeLocation} />
                                </label>
                                <button

                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}
                                > {SetWord("Add")}
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