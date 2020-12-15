import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';
import { SetWord } from '../translations/Translate';

class EditMilkingAdminComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            MilkingId: this.props.match.params.milkingId,
            FishId: "",
            MilkingDate: "",
            CaviarWeight: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeMilkingDate = this.changeMilkingDate.bind(this);
        this.changeCaviarWeight = this.changeCaviarWeight.bind(this);
        this.editMilkingAdmin = this.editMilkingAdmin.bind(this);
        this.changeFishId = this.changeFishId.bind(this);
    }

    changeMilkingDate(event) {
        this.setState({ MilkingDate: event.target.value });
    }
    changeFishId(event) {
        this.setState({ FishId: event.target.value });
    }
    changeCaviarWeight(event) {
        this.setState({ CaviarWeight: event.target.value });
    }

    editMilkingAdmin() {
        const newAccount = {
            MilkingId: this.state.MilkingId,
            FishId: this.state.FishId,
            MilkingDate: this.state.MilkingDate,
            CaviarWeight: this.state.CaviarWeight,
        }
        fetch(baseUrl + `Milking/Update`, {
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

    componentDidMount() {
        fetch(baseUrl + "Milking/GetById/" + this.props.match.params.milkingId,
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
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        FishId: result.fishId,
                        MilkingDate: result.milkingDate,
                        CaviarWeight: result.caviarWeight,
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

    handleSubmit = event => {
        this.editMilkingAdmin();
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-12">
                </div>
                <div>
                    <div style={{ width: "600px", height: "480px", marginLeft: "20%", marginTop: "10%" }}>
                        <h2>{SetWord("Edit Milking")}</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Milking Id")}
                                    <input className="form-control" id="MilkingId" name="MilkingId" value={this.state.MilkingId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Fish Id")}
                                    <input className="form-control" id="FishId" name="FishId" value={this.state.FishId} onChange={this.changeFishId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Milking Date")}
                                    <input className="form-control" type='datetime-local' id="MilkingDate" name="MilkingDate" value={this.state.MilkingDate} onChange={this.changeMilkingDate} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Caviar Weight")}
                                    <input className="form-control" id="CaviarWeight" name="CaviarWeight" value={this.state.CaviarWeight} onChange={this.changeCaviarWeight} />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}
                            > {SetWord("Edit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditMilkingAdminComponent;