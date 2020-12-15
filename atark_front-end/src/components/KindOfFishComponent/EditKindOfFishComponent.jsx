import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';
import { SetWord } from '../translations/Translate';

class EditKindOfFish extends Component {

    constructor(props) {
        super(props);

        this.state = {
            KindOfFishId: this.props.match.params.kindOfFishId,
            Kind: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeKind = this.changeKind.bind(this);
        this.addKind = this.addKind.bind(this);
    }

    changeKind(event) {
        this.setState({ Kind: event.target.value });
    }

    addKind() {
        const newAccount = {
            KindOfFishId: this.props.match.params.kindOfFishId,
            Kind: this.state.Kind,
        }
        fetch(baseUrl + `KindOfFish/Update`, {
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
        fetch(baseUrl + "KindOfFish/GetById/" + this.props.match.params.kindOfFishId,
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
                        Kind: result.kind,
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
        this.addKind();
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-12">
                </div>
                <div>
                    <div style={{ width: "600px", height: "480px", marginLeft: "20%", marginTop: "10%" }}>
                        <h2>{SetWord("Edit Kind Of Fish")}</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Kind Of Fish Id")}
                                    <input className="form-control" id="KindOfFishId" name="KindOfFishId" value={this.state.KindOfFishId} />
                                </label>
                                <label className="form-group" style={{ width: "600px" }}> {SetWord("Kind Of Fish")}
                                    <input className="form-control" id="Kind" name="Kind" value={this.state.Kind} onChange={this.changeKind} />
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

export default EditKindOfFish;