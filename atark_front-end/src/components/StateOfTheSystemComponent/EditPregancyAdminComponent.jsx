import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class EditStateOfTheSystemAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            StateOfTheSystemId: this.props.match.params.stateOfTheSystemId,
            Temperature: "",
            OxygenLevel: "",
            DateOfLastCheck: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTemperature = this.changeTemperature.bind(this);
        this.changeOxygenLevel = this.changeOxygenLevel.bind(this);
        this.changeDateOfLastCheck = this.changeDateOfLastCheck.bind(this);
        this.editStateOfTheSystemAdmin = this.editStateOfTheSystemAdmin.bind(this);
    }

    changeTemperature(event) {
        this.setState({ Temperature: event.target.value });
    }
    changeOxygenLevel(event) {
        this.setState({ OxygenLevel: event.target.value });
    }
    changeDateOfLastCheck(event) {
        this.setState({ DateOfLastCheck: event.target.value });
    }
    componentDidMount() {
        fetch(baseUrl + "StateOfTheSystem/GetById/" + this.props.match.params.stateOfTheSystemId,
            {
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
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        Temperature: result.temperature,
                        OxygenLevel: result.oxygenLevel,
                        DateOfLastCheck: result.dateOfLastCheck.slice(0, 19),
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                    });
                    alert(error);
                }
            )
    }
    editStateOfTheSystemAdmin() {
        const newAccount = {
            StateOfTheSystemId: this.state.StateOfTheSystemId,
            Temperature: this.state.Temperature,
            OxygenLevel: this.state.OxygenLevel,
            DateOfLastCheck: this.state.DateOfLastCheck,
        }
        fetch(baseUrl + `StateOfTheSystem/Update`, {
            method: 'PUT',
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
        this.editStateOfTheSystemAdmin();
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-12">
                </div>
                <div>
                    <div style={{ width: "600px", height: "480px", marginLeft: "20%", marginTop: "10%" }}>
                        <h2>Вагітність</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-group" style={{ width: "600px" }}> StateOfTheSystemId
                                    <input className="form-control" id="StateOfTheSystemId" name="StateOfTheSystemId" value={this.state.StateOfTheSystemId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> Temperature
                                    <input className="form-control" id="Temperature" name="Temperature" value={this.state.Temperature} onChange={this.changeTemperature} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> OxygenLevel
                                    <input className="form-control" id="OxygenLevel" name="OxygenLevel" value={this.state.OxygenLevel} onChange={this.changeOxygenLevel} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> DateOfLastCheck
                                    <input className="form-control" type='datetime-local' id="DateOfLastCheck" name="DateOfLastCheck" value={this.state.DateOfLastCheck} onChange={this.changeDateOfLastCheck} />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}
                            > Змінити
                    </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStateOfTheSystemAdmin;