import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';




const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validMail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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
            KindOfFishId:this.state.KindOfFishId,
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
        console.log(this.props.match.params.FishId);
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
                    <h2>Змінити інформацію про рибину</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control" id="fishId" name="FishId" value={this.state.FishId} />
                            <input className="form-control" id="kindOfFishId" name="KindOfFishId" value={this.state.KindOfFishId} onChange={this.changeKindOfFishId} />
                            <input className="form-control" id="sex" name="Sex" value={this.state.Sex} onChange={this.changeSex} />
                            <input className="form-control" id="dateOfBirth" name="DateOfBirth" value={this.state.DateOfBirth} onChange={this.changeDateOfBirth} />
                            <input className="form-control" id="poolNowId" name="PoolNowId" value={this.state.PoolNowId} onChange={this.changePoolNowId} />
                            <input className="form-control" id="relocationPoolId" name="RelocationPoolId" value={this.state.RelocationPoolId} onChange={this.changeRelocationPoolId} />
                            <input className="form-control" id="weight" name="Weight" value={this.state.Weight} onChange={this.changeWeight} />
                            <input className="form-control" id="adulthood" name="Adulthood" value={this.state.Adulthood} onChange={this.changeAdulthood} />
                            <input className="form-control" id="state" name="State" value={this.state.State} onChange={this.changeState} />
                        </div>
                        <button
                            className="form-group"
                            type="submit"
                            style={{ width: '20%', backgroundColor: '#003F00', marginBottom: "20px" }}
                        > Добавить
                    </button>
                    </form>

                </div>
            </div>
        );
    }
}

export default FishEdit;