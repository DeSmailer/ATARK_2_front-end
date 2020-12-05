import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(value) {
        const newAccount = {
            Email: value.email,
            Password: value.password
        }
        fetch(baseUrl + "Organization/GetId", {
            method: 'POST',
            body: JSON.stringify(newAccount),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(
                (response) => {
                    document.cookie = "organizatiomId=" + response.organizationId;
                },
                (error) => {
                    console.log('Post account ', error);
                    console.log('Post account ', newAccount.Email);
                    console.log('Post account ', newAccount.Password); //password
                    alert('Your account could not be posted\nError: ' + error);
                }
            )
    }

render() {
    return (
        <form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
            <label>
                Имя:
            <input id="email" name="email" />
                <input type="password" name="password" />
            </label>
            <input type="submit" id="password" name="password" />
        </form>
    );
}
}
export default LogIn;