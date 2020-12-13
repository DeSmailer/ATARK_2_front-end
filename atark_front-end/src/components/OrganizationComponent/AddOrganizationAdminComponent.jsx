import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class AddOrganizationAdmin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Mail: "",
      Password: "",
      Name: "",
      FoundationDate: "",
      PhoneNumber: "",
      isLoaded: false,
      optionsLocationId: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addOrganizationAdmin = this.addOrganizationAdmin.bind(this);
    this.changeMail = this.changeMail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeFoundationDate = this.changeFoundationDate.bind(this);
    this.changePhoneNumber = this.changePhoneNumber.bind(this);
  }


  addOrganizationAdmin() {
    const newAccount = {
      Mail: this.state.Mail,
      Password: this.state.Password,
      Name: this.state.Name,
      FoundationDate: this.state.FoundationDate,
      PhoneNumber: this.state.PhoneNumber,
    }
    fetch(baseUrl + `Organization/Add`, {
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

  handleSubmit = event => {
    this.addOrganizationAdmin();
    event.preventDefault();
  }

  changeMail(event) {
    this.setState({ Mail: event.target.value });
  }
  changePassword(event) {
    this.setState({ Password: event.target.value });
  }
  changeName(event) {
    this.setState({ Name: event.target.value });
  }
  changeFoundationDate(event) {
    this.setState({ FoundationDate: event.target.value });
  }
  changePhoneNumber(event) {
    this.setState({ PhoneNumber: event.target.value });
  }
  
  
  componentDidMount() {

    this.setState({
      isLoaded: true,
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="text-center">
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="col-12">
          </div>
          <div style={{ width: "600px", height: "480px", marginLeft: "20%", marginTop: "10%" }}>
            <h2 style={{ alingCenter: "center", marginLeft: "150px", marginBottom: "40px" }}>Додати УЗВ</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="form-group" style={{ width: "600px" }}> Mail
                  <input className="form-control" id="Mail" name="Mail" value={this.state.Mail} onChange={this.changeMail} />
                </label>
                <label className="form-group" style={{ width: "600px" }}> Password
                  <input className="form-control" id="Password" name="Password" value={this.state.Password} onChange={this.changePassword} />
                </label>
                <label className="form-group" style={{ width: "600px" }}> Name
                  <input className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.changeName} />
                </label>
                <label className="form-group" style={{ width: "600px" }}> FoundationDate
                  <input className="form-control" type='datetime-local' id="FoundationDate" name="FoundationDate" value={this.state.FoundationDate} onChange={this.changeFoundationDate} />
                </label>
                <label className="form-group" style={{ width: "600px" }}> PhoneNumber
                  <input className="form-control" id="PhoneNumber" name="PhoneNumber" value={this.state.PhoneNumber} onChange={this.changePhoneNumber} />
                </label>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px" }}
                > Добавить
                </button>
              </div>
            </form>

          </div>
        </div>
      );
    }
  }
}

export default AddOrganizationAdmin;