import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';


class LogIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Mail: "",
            Password: ""
        }

        this.addUser = this.addUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeMail = this.changeMail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.refresh = this.refresh.bind(this);

    }
    addUser(Mail, UserName/*, Password*/) {
        console.log(Mail);
        console.log(UserName);
    }

    changeMail(event) {
        this.setState({ Mail: event.target.value });
    }

    changePassword(event) {
        this.setState({ Password: event.target.value });
    }


    refresh() {
        this.componentDidMount();
    }
    returnUserId(Mail, Password) {
        const newAccount = {
            Mail: Mail,
            Password: Password,
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
                    console.log(response);
                    if (response === -1) {
                        alert('такого аккаунта нет');
                    }
                    else {
                        document.cookie = "organizationId=" + response;
                        document.cookie = "role=user";
                        alert('Ok');
                    }
                },
                (error) => {
                    console.log('Post account ', error);
                    alert('Your account could not be posted\nError: ' + error);
                    alert('мейл' + newAccount.Mail +
                        'пароль ' + newAccount.Password);

                }
            )
    }

    handleSubmit = event => {
        if (this.state.Mail === "admin" && this.state.Password === "admin") {
            document.cookie = "organizationId=0";
            document.cookie = "role=admin";
            alert('Ok');
            this.refresh();
        }
        else {
            this.returnUserId(this.state.Mail, this.state.Password);
        }
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">

                <div style={{ width: "600px",  marginLeft: "20%", marginTop: "10%" }}>
                    <h2>Логін</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="form-group" style={{ width: "600px" }}> Mail
                                <input className="form-control" id="Mail" name="Mail" value={this.state.Mail} onChange={this.changeMail} />
                            </label>
                            <label className="form-group" style={{ width: "600px" }}> Password
                                <input className="form-control" id="Password" name="Password" value={this.state.Password} onChange={this.changePassword} />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}
                        > Войти
                    </button>
                    </form>

                </div>
                <div style={{ width: "600px",marginLeft: "20%", marginTop: "3%" }}>
                <h2>Language</h2>

                </div>
            </div>
        );
    }
}

export default LogIn;