import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class AddClosedWaterSupplyInstallationAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Location: "",
            OrganizationId: this.props.match.params.organizationId,
            isLoaded: false,
            optionsLocationId: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.addClosedWaterSupplyInstallationAdmin = this.addClosedWaterSupplyInstallationAdmin.bind(this);
    }


    addClosedWaterSupplyInstallationAdmin() {
        const newAccount = {
            OrganizationId: this.state.OrganizationId,
            Location: this.state.Location,
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
                alert("Ok"),
                (error) => {
                    alert(error);

                }
            );
    }

    handleSubmit = event => {
        this.addClosedWaterSupplyInstallationAdmin();
        event.preventDefault();
    }

    changeLocation(event) {
        this.setState({ Location: event.target.value });
    }

    componentDidMount() {
        this.setState({
            OrganizationId: this.props.match.params.organizationId,
            isLoaded: true,
        });
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
                                <label className="form-group" style={{ width: "600px" }}> OrganizationId
                                    <input className="form-control" id="OrganizationId" name="OrganizationId" value={this.state.OrganizationId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> Локація
                                    <input className="form-control" id="Location" name="Location" value={this.state.Location} onChange={this.changeLocation} />
                                </label>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}
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

export default AddClosedWaterSupplyInstallationAdmin;