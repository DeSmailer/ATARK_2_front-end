import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class AddMilkingAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FishId: this.props.match.params.fishId,
            MilkingDate: "",
            CaviarWeight: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeMilkingDate = this.changeMilkingDate.bind(this);
        this.changeCaviarWeight = this.changeCaviarWeight.bind(this);
        this.addMilkingAdmin = this.addMilkingAdmin.bind(this);
    }

    changeMilkingDate(event) {
        this.setState({ MilkingDate: event.target.value });
    }
    changeCaviarWeight(event) {
        this.setState({ CaviarWeight: event.target.value });
    }

    addMilkingAdmin() {
        const newAccount = {
            FishId: this.state.FishId,
            MilkingDate: this.state.MilkingDate,
            CaviarWeight: this.state.CaviarWeight,
        }
        fetch(baseUrl + `Milking/Add`, {
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
        this.addMilkingAdmin();
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-12">
                </div>
                <div>
                    <div style={{ width: "600px", height: "480px", marginLeft: "20%", marginTop: "10%" }}>
                        <h2>Дойка</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-group" style={{ width: "600px" }}> FishId
                                    <input className="form-control" id="FishId" name="FishId" value={this.state.FishId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> MilkingDate
                                    <input className="form-control" type='datetime-local' id="MilkingDate" name="MilkingDate" value={this.state.MilkingDate} onChange={this.changeMilkingDate} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> CaviarWeight
                                    <input className="form-control" id="CaviarWeight" name="CaviarWeight" value={this.state.CaviarWeight} onChange={this.changeCaviarWeight} />
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

export default AddMilkingAdmin;