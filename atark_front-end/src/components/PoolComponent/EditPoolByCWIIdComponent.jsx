import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';

class EditPoolByCWIId extends Component {

  constructor(props) {
    super(props);

    this.state = {
      PoolId: this.props.match.params.PoolId,
      ClosedWaterSupplyInstallationId: "",
      Volume: 0,
      WhoIsInThePool: "",
      isLoaded: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.editPool = this.editPool.bind(this);
    this.changeClosedWaterSupplyInstallationId = this.changeClosedWaterSupplyInstallationId.bind(this);
  }


  editPool() {
    const newAccount = {
      PoolId: this.state.PoolId,
      ClosedWaterSupplyInstallationId: this.state.ClosedWaterSupplyInstallationId,
      Volume: this.state.Volume,
      WhoIsInThePool: this.state.WhoIsInThePool,
  }
  fetch(baseUrl + "Pool/Update", {
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
    console.log(this.props.match.params.closedWaterSupplyInstallationId)
    fetch(baseUrl + "Pool/GetById/" + this.props.match.params.poolId,
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
          console.log(result)
          this.setState({
            isLoaded: true,
            PoolId: result.poolId,
            ClosedWaterSupplyInstallationId: result.closedWaterSupplyInstallationId,
            Volume: result.volume,
            WhoIsInThePool: result.whoIsInThePool,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
          });
          alert(error);
        }
      )
  }
  handleSubmit = event => {
    this.editPool();
    event.preventDefault();
  }

  changeVolume(event) {
    this.setState({ Volume: event.target.value });
  }
  
  changeClosedWaterSupplyInstallationId(event) {
    this.setState({ ClosedWaterSupplyInstallationId: event.target.value });
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
            <h2 style={{ alingCenter: "center", marginLeft: "150px", marginBottom: "40px" }}>Змінити басейн</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="form-group" style={{ width: "600px" }}> Басейн
                        <input className="form-control" id="PoolId" name="PoolId" value={this.state.PoolId} />
                </label>
                <label className="form-group" style={{ width: "600px" }}> Узв
                        <input className="form-control" id="ClosedWaterSupplyInstallationId" name="ClosedWaterSupplyInstallationId" value={this.state.ClosedWaterSupplyInstallationId} onChange={this.changeClosedWaterSupplyInstallationId}/>
                </label>
                <label className="form-group" style={{ width: "600px" }}> Об'єм
                        <input className="form-control" id="Volume" name="Volume" value={this.state.Volume} onChange={this.changeVolume}/>
                </label>
                <label className="form-group" style={{ width: "600px" }}> Вміст
                        <input className="form-control" id="WhoIsInThePool" name="WhoIsInThePool" value={this.state.WhoIsInThePool}  />
                </label>
                <button
                  
                  type="submit"
                  className="btn btn-primary"
                    style={{ width: '10%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px"}}
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

export default EditPoolByCWIId;