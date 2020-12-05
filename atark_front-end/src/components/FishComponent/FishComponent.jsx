import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { baseUrl } from '../baseUrl';

class Fish extends Component {

  constructor(props) {
    super(props);

    this.state = {

      columns: [
        { field: 'fishId', headerName: 'FishId', width: 160 },
        { field: 'kindOfFishId', headerName: 'KindOfFishId', width: 160 },
        { field: 'sex', headerName: 'Sex', width: 160 },
        { field: 'dateOfBirth', headerName: 'DateOfBirth', width: 160 },
        { field: 'PoolNowId', headerName: 'PoolNowId',  width: 160 },
        { field: 'RelocationPoolId', headerName: 'RelocationPoolId',  width: 160 },
        { field: 'Weight', headerName: 'Weight',  width: 160 },
        { field: 'Adulthood', headerName: 'Adulthood',  width: 160 },
        { field: 'State', headerName: 'State',  width: 160 }
        /*{ field: 'edit', valueGetter: (params) =>{
        return (
            <button value={params.id}>LOL</button>
        );},width: 160}*/
      ],
      rows: [
        
      ]
    }

    this.dataGridDemo = this.dataGridDemo.bind(this);
  }

  dataGridDemo(state) {
    return (
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid rows={state.rows} columns={state.columns} pageSize={15} />
      </div>
    );
  }
  fillRows(result) {
    var res = [];
    var i = 0;
  result.forEach(element => {
      res[i] = {id: i,
          userId: element.userId,
          name: element.name,
          email: element.email,
          password: element.password,
          role: element.role
      };
        i++;
    });
    return res;
}

componentDidMount() {

  fetch(baseUrl + "Fish/Get", {
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
                  rows: this.fillRows(result)
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

  render() {
    return (
      this.dataGridDemo(this.state)
    );
  }
}

export default Fish;