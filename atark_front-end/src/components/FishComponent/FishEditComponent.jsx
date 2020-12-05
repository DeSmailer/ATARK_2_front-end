import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';




const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validMail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class LogIn extends Component {

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
        this.addUser = this.addUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeFishId = this.changeFishId.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }
    addUser(Mail, UserName/*, Password*/) {
        console.log(Mail);
        console.log(UserName);
    }

    changeFishId(event) {
        this.setState({ Mail: event.target.value });
    }

    changePassword(event) {
        this.setState({ Password: event.target.value });
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

        this.returnUserId(this.state.Mail, this.state.Password);
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
                            <input className="form-control" id="fishId" name="FishId" value={this.state.FishId} onChange={this.changeFishId} />
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

export default LogIn;