import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class AddPregancyAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FishId: this.props.match.params.fishId,
            StartDateOfPregnancy: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeStartDateOfPregnancy = this.changeStartDateOfPregnancy.bind(this);
        this.addPregancyAdmin = this.addPregancyAdmin.bind(this);
    }

    changeStartDateOfPregnancy(event) {
        this.setState({ StartDateOfPregnancy: event.target.value });
    }

    addPregancyAdmin() {
        const newAccount = {
            FishId: this.state.FishId,
            StartDateOfPregnancy: this.state.StartDateOfPregnancy,
        }
        fetch(baseUrl + `Pregnancy/Add`, {
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
            FishId: this.props.match.params.fishId,
            isLoaded: true,
        });
    }

    handleSubmit = event => {
        this.addPregancyAdmin();
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
                                <label className="form-group" style={{ width: "600px" }}> FishId
                                    <input className="form-control" id="FishId" name="FishId" value={this.state.FishId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> StartDateOfPregnancy
                                    <input className="form-control" type='datetime-local' id="StartDateOfPregnancy" name="StartDateOfPregnancy" value={this.state.StartDateOfPregnancy} onChange={this.changeStartDateOfPregnancy} />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}
                            > Добавить
                    </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPregancyAdmin;