import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';
import { SetWord } from '../translations/Translate';

class AddFish extends Component {

    constructor(props) {
        super(props);

        this.state = {
            KindOfFishId: "",
            Sex: "",
            DateOfBirth: "",
            PoolNowId: this.props.match.params.poolId,
            Weight: "",
            Adulthood: "",
            State: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeKindOfFishId = this.changeKindOfFishId.bind(this);
        this.changeSex = this.changeSex.bind(this);
        this.changeDateOfBirth = this.changeDateOfBirth.bind(this);
        this.changeWeight = this.changeWeight.bind(this);
        this.changeAdulthood = this.changeAdulthood.bind(this);
        this.changeState = this.changeState.bind(this);
        this.addFish = this.addFish.bind(this);
    }

    changeKindOfFishId(event) {
        this.setState({ KindOfFishId: event.target.value });
    }
    changeSex(event) {
        this.setState({ Sex: event.target.value });
    }
    changeDateOfBirth(event) {
        this.setState({ DateOfBirth: event.target.value });
    }

    changeWeight(event) {
        this.setState({ Weight: event.target.value });
    }
    changeAdulthood(event) {
        this.setState({ Adulthood: event.target.value });
    }
    changeState(event) {
        this.setState({ State: event.target.value });
    }
    addFish() {
        const newAccount = {
            KindOfFishId: this.state.KindOfFishId,
            Sex: this.state.Sex,
            DateOfBirth: this.state.DateOfBirth,
            PoolNowId: this.props.match.params.poolId,
            Weight: this.state.Weight,
            Adulthood: this.state.Adulthood,
            State: this.state.State,
        }
        fetch(baseUrl + `Fish/Add`, {
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
        this.addFish();
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-12">
                </div>
                <div>
                    <div style={{ width: "600px", height: "480px", marginLeft: "20%", marginTop: "10%" }}>
                        <h2> {SetWord("Add Fish")}</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Kind Of Fish Id")}
                                    <input className="form-control" id="kindOfFishId" name="KindOfFishId" value={this.state.KindOfFishId} onChange={this.changeKindOfFishId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Sex")}
                                    <input className="form-control" id="sex" name="Sex" value={this.state.Sex} onChange={this.changeSex} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Date Of Birth")}
                                    <input className="form-control" type='datetime-local' id="dateOfBirth" name="DateOfBirth" value={this.state.DateOfBirth} onChange={this.changeDateOfBirth} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Weight")}
                                    <input className="form-control" id="weight" name="Weight" value={this.state.Weight} onChange={this.changeWeight} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Adulthood")}
                                    <input className="form-control" id="adulthood" name="Adulthood" value={this.state.Adulthood} onChange={this.changeAdulthood} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}>  {SetWord("State")}
                                    <input className="form-control" id="state" name="State" value={this.state.State} onChange={this.changeState} />
                                </label>
                            </div>
                            <button

                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}
                            > {SetWord("Add")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddFish;