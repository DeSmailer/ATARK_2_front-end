import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';
import { SetWord } from '../translations/Translate';

class FishEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FishId: "",
            KindOfFishId: "",
            Sex: "",
            DateOfBirth: "",
            PoolNowId: "",
            RelocationPoolId: "",
            Weight: "",
            Adulthood: "",
            State: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeKindOfFishId = this.changeKindOfFishId.bind(this);
        this.changeSex = this.changeSex.bind(this);
        this.changeDateOfBirth = this.changeDateOfBirth.bind(this);
        this.changePoolNowId = this.changePoolNowId.bind(this);
        this.changeRelocationPoolId = this.changeRelocationPoolId.bind(this);
        this.changeWeight = this.changeWeight.bind(this);
        this.changeAdulthood = this.changeAdulthood.bind(this);
        this.changeState = this.changeState.bind(this);
        this.editFish = this.editFish.bind(this);
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
    changePoolNowId(event) {
        this.setState({ PoolNowId: event.target.value });
    }
    changeRelocationPoolId(event) {
        this.setState({ RelocationPoolId: event.target.value });
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
    editFish() {
        const newAccount = {
            FishId: this.state.FishId,
            KindOfFishId: this.state.KindOfFishId,
            Sex: this.state.Sex,
            DateOfBirth: this.state.DateOfBirth,
            PoolNowId: this.state.PoolNowId,
            RelocationPoolId: this.state.RelocationPoolId,
            Weight: this.state.Weight,
            Adulthood: this.state.Adulthood,
            State: this.state.State,
        }
        fetch(baseUrl + "Fish/Update", {
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
        fetch(baseUrl + "Fish/GetById/" + this.props.match.params.FishId,
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
                        KindOfFishId: result.kindOfFishId,
                        Sex: result.sex,
                        DateOfBirth: result.dateOfBirth,
                        PoolNowId: result.poolNowId,
                        RelocationPoolId: result.relocationPoolId,
                        Weight: result.weight,
                        Adulthood: result.adulthood,
                        State: result.state
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

        this.editFish();
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-12">
                </div>
                <div>
                    <div style={{ width: "600px", height: "480px", marginLeft: "20%", marginTop: "10%" }}>
                        <h2>{SetWord("Edit fish information")}</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Fish Id")}
                                    <input className="form-control" id="fishId" name="FishId" value={this.state.FishId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Kind Of Fish Id")}
                                    <input className="form-control" id="kindOfFishId" name="KindOfFishId" value={this.state.KindOfFishId} onChange={this.changeKindOfFishId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Sex")}
                                    <input className="form-control" id="sex" name="Sex" value={this.state.Sex} onChange={this.changeSex} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}>  {SetWord("Date Of Birth")}
                                    <input className="form-control" id="dateOfBirth" type="datetime-local" name="DateOfBirth" value={this.state.DateOfBirth} onChange={this.changeDateOfBirth} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}>  {SetWord("Pool now")}
                                    <input className="form-control" id="poolNowId" name="PoolNowId" value={this.state.PoolNowId} onChange={this.changePoolNowId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}>  {SetWord("Pool for relocation")}Басейн для переносу
                                <input className="form-control" id="relocationPoolId" name="RelocationPoolId" value={this.state.RelocationPoolId} onChange={this.changeRelocationPoolId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}>  {SetWord("Weight")}
                                    <input className="form-control" id="weight" name="Weight" value={this.state.Weight} onChange={this.changeWeight} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}>  {SetWord("Adulthood")}
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
                            >{SetWord("Edit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FishEdit;