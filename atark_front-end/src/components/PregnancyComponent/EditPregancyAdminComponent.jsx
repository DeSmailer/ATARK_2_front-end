import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class EditPregnancyAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            PregnancyId: this.props.match.params.pregnancyId,
            FishId: "",
            StartDateOfPregnancy: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeStartDateOfPregnancy = this.changeStartDateOfPregnancy.bind(this);
        this.changeFishId = this.changeFishId.bind(this);
        this.editPregnancyAdmin = this.editPregnancyAdmin.bind(this);
    }


    changeFishId(event) {
        this.setState({ FishId: event.target.value });
    }
    changeStartDateOfPregnancy(event) {
        this.setState({ StartDateOfPregnancy: event.target.value });
    }
    componentDidMount() {
        fetch(baseUrl + "Pregnancy/GetById/" + this.props.match.params.pregnancyId,
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
                        FishId: result.fishId,
                        StartDateOfPregnancy: result.startDateOfPregnancy,
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
    editPregnancyAdmin() {
        const newAccount = {
            PregnancyId: this.state.PregnancyId,
            FishId: this.state.FishId,
            StartDateOfPregnancy: this.state.StartDateOfPregnancy,
        }
        fetch(baseUrl + `Pregnancy/Update`, {
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
        this.editPregnancyAdmin();
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
                            <label className="form-group" style={{ width: "600px" }}> PregnancyId
                                    <input className="form-control" id="PregnancyId" name="PregnancyId" value={this.state.PregnancyId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> FishId
                                    <input className="form-control" id="FishId" name="FishId" value={this.state.FishId} onChange={this.changeFishId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> StartDateOfPregnancy
                                    <input className="form-control" type='datetime-local' id="StartDateOfPregnancy" name="StartDateOfPregnancy" value={this.state.StartDateOfPregnancy} onChange={this.changeStartDateOfPregnancy} />
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

export default EditPregnancyAdmin;