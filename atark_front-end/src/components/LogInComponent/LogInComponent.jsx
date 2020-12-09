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
            Mail: "",
            Password: ""
        }

        this.addUser = this.addUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeMail = this.changeMail.bind(this);
        this.changePassword = this.changePassword.bind(this);
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
                    if(response == -1){
                        alert('такого аккаунта нет');
                    }
                    else{
                        document.cookie = "organizationId=" + response;
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

        this.returnUserId(this.state.Mail, this.state.Password);
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-12">

                </div>
                <div>
                    <h2>Добавить пользователя</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control" id="Mail" name="Mail" value={this.state.Mail} onChange={this.changeMail} />
                            <input className="form-control" id="Password" name="Password" value={this.state.Password} onChange={this.changePassword} />
                        </div>
                        <button
                            
                            type="submit"
                            className="btn btn-primary"
                    style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px"}}
                        > Добавить
                    </button>
                    </form>

                </div>
            </div>
        );
    }
}

export default LogIn;