import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class EditHerdAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            HerdId: this.props.match.params.herdId,
            KindOfFishId: "",
            DateOfBirth: "",
            PoolIdNow: "",
            AverageWeightOfAnIndividual: "",
            Quantity: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeKindOfFishId = this.changeKindOfFishId.bind(this);
        this.changeDateOfBirth = this.changeDateOfBirth.bind(this);
        this.changePoolIdNow = this.changePoolIdNow.bind(this);
        this.changeAverageWeightOfAnIndividual = this.changeAverageWeightOfAnIndividual.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.editHerdAdmin = this.editHerdAdmin.bind(this);
    }

    changeKindOfFishId(event) {
        this.setState({ KindOfFishId: event.target.value });
    }
    changeDateOfBirth(event) {
        this.setState({ DateOfBirth: event.target.value });
    }
    changePoolIdNow(event) {
        this.setState({ PoolIdNow: event.target.value });
    }
    changeAverageWeightOfAnIndividual(event) {
        this.setState({ AverageWeightOfAnIndividual: event.target.value });
    }
    changeQuantity(event) {
        this.setState({ Quantity: event.target.value });
    }

    editHerdAdmin() {
        const newAccount = {
            HerdId: this.props.match.params.herdId,
            KindOfFishId: this.state.KindOfFishId,
            DateOfBirth: this.state.DateOfBirth,
            PoolIdNow: this.state.PoolIdNow,
            AverageWeightOfAnIndividual: this.state.AverageWeightOfAnIndividual,
            Quantity: this.state.Quantity,
        }
        fetch(baseUrl + `Herd/Update`, {
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
        fetch(baseUrl + "Herd/GetById/" + this.props.match.params.herdId,
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
                        HerdId: this.props.match.params.herdId,
                        KindOfFishId: result.kindOfFishId,
                        DateOfBirth: result.dateOfBirth,
                        PoolIdNow: result.poolIdNow,
                        AverageWeightOfAnIndividual: result.averageWeightOfAnIndividual,
                        Quantity: result.quantity,
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
        this.editHerdAdmin();
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-12">
                </div>
                <div>
                    <div style={{ width: "600px", height: "480px", marginLeft: "20%", marginTop: "10%" }}>
                        <h2>Змінити Стадо</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-group" style={{ width: "600px" }}> Id
                                    <input className="form-control" id="HerdId" name="HerdId" value={this.state.HerdId}/>
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> вид риби
                                    <input className="form-control" id="kindOfFishId" name="KindOfFishId" value={this.state.KindOfFishId} onChange={this.changeKindOfFishId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> дата народження
                                    <input className="form-control" type='datetime-local' id="dateOfBirth" name="DateOfBirth" value={this.state.DateOfBirth} onChange={this.changeDateOfBirth} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> PoolIdNow
                                    <input className="form-control" id="PoolIdNow" name="PoolIdNow" value={this.state.PoolIdNow} onChange={this.changePoolIdNow}/>
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> AverageWeightOfAnIndividual
                                    <input className="form-control" id="AverageWeightOfAnIndividual" name="AverageWeightOfAnIndividual" value={this.state.AverageWeightOfAnIndividual} onChange={this.changeAverageWeightOfAnIndividual} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> Quantity
                                    <input className="form-control" id="Quantity" name="Quantity" value={this.state.Quantity} onChange={this.changeQuantity} />
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

export default EditHerdAdmin;