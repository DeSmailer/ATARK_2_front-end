import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class AddKindOfFish extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
            Kind: this.state.Kind,
        }
        fetch(baseUrl + `KindOfFish/Add`, {
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
                        <h2>Додати AddKindOfFish</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-group" style={{ width: "600px" }}> вид риби
                                    <input className="form-control" id="Kind" name="Kind" value={this.state.Kind} onChange={this.changeKind} />
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

export default AddKindOfFish;