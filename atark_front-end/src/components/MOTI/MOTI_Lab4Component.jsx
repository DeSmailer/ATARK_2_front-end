import { colors } from '@material-ui/core';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';

class MOTI_Lab4 extends Component {

  constructor(props) {
    super(props);

    this.state = {

      //страници
      startPage: false,//да
      gamePlayPage: false,//да
      matrixViewPage: false,//
      settingsPage: true,//
      winPage: false,//да
      losePage: false,//да


      koronaResult: "",

      //пользователь
      HP: 100,
      mutations: ["Мутации Мимикрия",
        "Мутации Утечка",
        "Мутации Урбофил",
        "Мутации Дарвинист"],
      //матрица
      matrix: [
        //Мутация Мимикрия	Мутация Утечка	Мутация Урбофил	Мутация Дарвинист
        [80, 100, 40, 82],
        [28, 20, 100, 54],
        [100, 27, 40, 12],
        [16, 0, 0, 100]
      ],
      maxMin: [
        40, 20, 12, 0
      ],
      minMax: [
        100, 100, 100, 100
      ],
      maxMin_1: 40,
      minMax_1: 100,

      appStyle1: {
        backgroundColor: "",
      },

    }

    this.changeMainMenu = this.changeMainMenu.bind(this);
    this.changeStartGame = this.changeStartGame.bind(this);
    this.changeWin = this.changeWin.bind(this);
    this.changeLose = this.changeLose.bind(this);
    this.changeSettings = this.changeSettings.bind(this);

    this.set100Chanse = this.set100Chanse.bind(this);

    this.selectUKVactine = this.selectUKVactine.bind(this);
    this.selectGRVactine = this.selectGRVactine.bind(this);
    this.selectEUVactine = this.selectEUVactine.bind(this);
    this.selectRUVactine = this.selectRUVactine.bind(this);

    this.changeMaxMin = this.changeMaxMin.bind(this);


    this.changeMatrix00 = this.changeMatrix00.bind(this);
    this.changeMatrix01 = this.changeMatrix01.bind(this);
    this.changeMatrix02 = this.changeMatrix02.bind(this);
    this.changeMatrix03 = this.changeMatrix03.bind(this);

    this.changeMatrix10 = this.changeMatrix10.bind(this);
    this.changeMatrix11 = this.changeMatrix11.bind(this);
    this.changeMatrix12 = this.changeMatrix12.bind(this);
    this.changeMatrix13 = this.changeMatrix13.bind(this);

    this.changeMatrix20 = this.changeMatrix20.bind(this);
    this.changeMatrix21 = this.changeMatrix21.bind(this);
    this.changeMatrix22 = this.changeMatrix22.bind(this);
    this.changeMatrix23 = this.changeMatrix23.bind(this);

    this.changeMatrix30 = this.changeMatrix30.bind(this);
    this.changeMatrix31 = this.changeMatrix31.bind(this);
    this.changeMatrix32 = this.changeMatrix32.bind(this);
    this.changeMatrix33 = this.changeMatrix33.bind(this);

    this.colorCellMaxMin = this.colorCellMaxMin.bind(this);
    this.colorCellMinMax = this.colorCellMinMax.bind(this);

  }
  colorCellMaxMin(number) {
    if (number == this.state.maxMin_1) {
      return (
        "green"
      );
    } else {
      return (
        "white"
      );
    }
  }
  colorCellMinMax(number) {
    if (number == this.state.minMax_1) {
      return (
        "red"
      );
    } else {
      return (
        "white"
      );
    }
  }
  set100Chanse(n) {
    for (var i = 0; i < 4; i++) {
      if (this.state.matrix[n][i] === 100)
        return "Имеет 100% эффективность против " + '"' + this.state.mutations[i] + '"';
    }
    return "Не имеет 100% эффективности против мутаций"
  }

  changeMainMenu() {
    this.setState({
      startPage: true,
      matrixViewPage: false,
      settingsPage: false,
      gamePlayPage: false,
      winPage: false,
      losePage: false,
      HP: 100,
      koronaResult: "",
    });
  }
  changeStartGame() {
    this.setState({
      startPage: false,
      matrixViewPage: false,
      settingsPage: false,
      gamePlayPage: true,
      winPage: false,
      losePage: false,
      HP: 100,
      koronaResult: "",
    });
  }
  changeWin() {
    this.setState({
      startPage: false,
      matrixViewPage: false,
      settingsPage: false,
      gamePlayPage: false,
      winPage: true,
      losePage: false,
    });
  }
  changeLose() {
    this.setState({
      startPage: false,
      matrixViewPage: false,
      settingsPage: false,
      gamePlayPage: false,
      winPage: false,
      losePage: true,
    });
  }
  changeSettings() {
    this.setState({
      startPage: false,
      matrixViewPage: false,
      settingsPage: true,
      gamePlayPage: false,
      winPage: false,
      losePage: false,
    });
  }

  selectUKVactine(event) {
    const randomInt = require('random-int');
    let r = randomInt(0, 3);
    console.log(r);
    let korona = this.state.matrix[0][r];
    if (korona === 100)
      this.changeWin();
    if (this.state.HP * korona / 100 < 10)
      this.changeLose();
    this.setState({
      koronaResult: "Корона выбрала " + '"' + this.state.mutations[r] + '"' + ". Здоровое население уменьшилось на " + (100 - korona) + "%",
      HP: this.state.HP * korona / 100,
    });

  }
  selectGRVactine(event) {
    const randomInt = require('random-int');
    let r = randomInt(0, 3);
    console.log(r);
    let korona = this.state.matrix[1][r];
    if (korona === 100)
      this.changeWin();
    if (this.state.HP * korona / 100 < 10)
      this.changeLose();
    this.setState({
      koronaResult: "Корона выбрала " + '"' + this.state.mutations[r] + '"' + ". Здоровое население уменьшилось на " + (100 - korona) + "%",
      HP: this.state.HP * korona / 100,
    });
  }
  selectEUVactine(event) {
    const randomInt = require('random-int');
    let r = randomInt(0, 3);
    console.log(r);
    let korona = this.state.matrix[2][r];
    if (korona === 100)
      this.changeWin();
    if (this.state.HP * korona / 100 < 10)
      this.changeLose();
    this.setState({
      koronaResult: "Корона выбрала " + '"' + this.state.mutations[r] + '"' + ". Здоровое население уменьшилось на " + (100 - korona) + "%",
      HP: this.state.HP * korona / 100,
    });

  }
  selectRUVactine(event) {
    const randomInt = require('random-int');
    let r = randomInt(0, 3);
    console.log(r);
    let korona = this.state.matrix[3][r];
    if (korona === 100)
      this.changeWin();
    if (this.state.HP * korona / 100 < 10)
      this.changeLose();
    this.setState({
      koronaResult: "Корона выбрала " + '"' + this.state.mutations[r] + '"' + ". Здоровое население уменьшилось на " + (100 - korona) + "%",
      HP: this.state.HP * korona / 100,
    });

  }
  //максимальное из минимальных
  changeMaxMin() {
    for (let i = 0; i < 4; i++) {

      let min = 100;

      for (let j = 0; j < 4; j++) {
        if (min >= this.state.matrix[i][j]) {
          min = this.state.matrix[i][j]
        }
      }

      this.state.maxMin[i] = min;
    }
    let maxMin_2 = 0;
    for (let i = 0; i < 4; i++) {
      if (this.state.maxMin[i] >= maxMin_2) {
        maxMin_2 = this.state.maxMin[i];
      }
    }
    this.setState({
      maxMin_1: maxMin_2,
    });
  }
  //минимальное из максимальных
  changeMinMax() {
    for (let i = 0; i < 4; i++) {

      let max = 0;

      for (let j = 0; j < 4; j++) {
        if (max <= this.state.matrix[j][i]) {
          max = this.state.matrix[j][i]
        }
      }

      this.state.minMax[i] = max;

    }
    let minMax_2 = 100;
    for (let i = 0; i < 4; i++) {
      var qwe = this.state.minMax[i];
      if (qwe <= +minMax_2) {
        console.log("matrix " + this.state.minMax[i])
        minMax_2 = -(-this.state.minMax[i]);
      }
    }
    console.log(this.state.minMax)
    this.setState({
      minMax_1: minMax_2,
    });
  }

  changeMatrix00(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[0][0] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix01(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {

      this.state.matrix[0][1] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix02(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {

      this.state.matrix[0][2] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix03(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {

      this.state.matrix[0][3] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix10(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[1][0] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix11(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[1][1] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix12(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[1][2] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix13(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[1][3] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix20(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[2][0] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix21(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[2][1] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix22(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[2][2] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix23(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[2][3] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix30(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[3][0] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix31(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[3][1] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix32(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[3][2] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  changeMatrix33(event) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.state.matrix[3][3] = -(-event.target.value);
      this.changeMaxMin();
      this.changeMinMax();
    } else {
      alert("Значение должно быть от 0 до 100 включительно")
    }
  }
  render() {
    if (this.state.startPage) {
      return (
        <div style={{ height: "1000%", width: "100%", background: "" }} >
          <div className="container" >
            <div>
              <img style={{ height: "68%", width: "68%", marginLeft: "16%" }} src="./Ze.jpg" alt="Зеля"></img>
              <h2 style={{ textAlign: "center" }}>
                Ворог на порозі!!!
              </h2>
              <p>
                Играем за вождя народа, который выбирает какой вакциной будут привиты его граждани.
                Первоначальное хп = 100% здорового населения. Вождь делает выбор какую вакцину использовать
                на своих людях. Каждая вакцина имеет шанс сработать в человеке и побороть определенную мутацию
                коронавируса. Каждый ход коронавирус мутирует, выбирая 1 из 4 мутаций. Если вождь выбирает вакцину,
                еффективность которой меньше 100%, к примеру 60%, против текущей мутации, то здоровыми отаются 60%
                населения от текущего хп, а 40% заражаются, хп = хп-40%. Если Вождь выбирает вакцину, которая  имеет
                100% эфективность против определенной мутации, то  Вождь побеждает - коронавирус исчезает. Цель вождя
                оставить как можно больше % здорового народа. Вождь проигрывает если выбил 0% или хп снизилось до 10 или ниже.
           </p>
              <Button onClick={this.changeStartGame} className="btn btn-primary"
                style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px", marginLeft: "30%" }}>
                Начать игру
              </Button>
              <Button onClick={this.changeSettings} className="btn btn-primary"
                style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px", marginLeft: "0%" }}>
                Настройки
            </Button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.gamePlayPage) {
      return (
        <div className="container">
          <div style={{ marginTop: "20px" }}>
            <span style={{ fontSize: "22px" }}>Здоровый людей осталось: {this.state.HP} %</span>
          </div >
          <div style={{ marginTop: "20px", color: 'red', }}>
            {this.state.koronaResult}
          </div>
          <div style={{ marginTop: "20px" }}>
            <span style={{ fontSize: "22px" }}>Коронавирус собирается мутировать, выберите вакцину, да бы защитить свой народ</span>
          </div>
          <div style={{ marginTop: "30px" }}>

            <Button onClick={this.selectUKVactine} className="btn btn-primary"
              style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px", marginLeft: "40%" }}>
              Вакцина Украинская
            </Button>
            <p>
              Вакцина разрабатывалась лучшими умами Человечества, потом и кровью студентов первого курса Харьковского национального медицинского университета после посещения "Радмира".
            </p>
            <p>
              {this.set100Chanse(0)}
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>

            <Button onClick={this.selectGRVactine} className="btn btn-primary"
              style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px", marginLeft: "40%" }}>
              Вакцина Грузинская
            </Button>
            <p>
              Высоко-высоко в горах, о которых было написано в произведении величайшего Кобзаря Т.Г. Шевченка была разработана самая грузинская из грузинских вакцин - "Грузиночка"
            </p>
            <p>
              {this.set100Chanse(1)}
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>

            <Button onClick={this.selectEUVactine} className="btn btn-primary"
              style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px", marginLeft: "40%" }}>
              Вакцина Европейская
            </Button>
            <p>
              Хотя Украина и самая большая страна Европы, не стоит забывать и наших младших товарищах, у которых можно попросить помощи.
              Как завещал Макрон, Украина стала первой страной получившей вакцину от Европы(нет).
            </p>
            <p>
              {this.set100Chanse(2)}
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>

            <Button onClick={this.selectRUVactine} className="btn btn-primary"
              style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px", marginLeft: "40%" }}>
              Вакцина Российская
            </Button>
            <p>
              Меньше слов, больше дела. Пообещали дать и дали.
            </p>
            <p>
              {this.set100Chanse(3)}
            </p>
          </div>
        </div>
      );
    } else if (this.state.winPage) {
      return (
        <div style={{ height: "1000%", width: "100%", background: "" }} >
          <div className="container" >
            <div>
              <img style={{ height: "68%", width: "68%", marginLeft: "16%" }} src="./ZeWin.jpg" alt="Зеля"></img>
              <h2 style={{ textAlign: "center" }}>
                Ворог переможений!!!
              </h2>
              <p>
                Коронавирус был повержен Вождем народа и канул в нибытие. Народ жил долго и счастливо и продолжал строил дороги.
           </p>
              <Button onClick={this.changeMainMenu} className="btn btn-primary"
                style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px", marginLeft: "40%" }}>
                В главное меню
              </Button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.losePage) {
      return (
        <div style={{ height: "1000%", width: "100%", background: "" }} >
          <div className="container" >
            <div>
              <img style={{ height: "68%", width: "68%", marginLeft: "16%" }} src="./ZeLose.jpg" alt="Зеля"></img>
              <h2 style={{ textAlign: "center" }}>
                Ворог виявився непереможний!!!
              </h2>
              <p>
                Коронавирус заразил огромнуя часть населения, Вождь не справился со своей задачей. Народ расстроен и опечален происходящии событиями.
           </p>
              <Button onClick={this.changeMainMenu} className="btn btn-primary"
                style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px", marginLeft: "40%" }}>
                В главное меню
              </Button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.settingsPage) {
      return (
        <div style={{ height: "1000%", width: "100%", background: "" }} >
          <div className="container" >
            <div>
              <Button onClick={this.changeMainMenu} className="btn btn-primary"
                style={{ width: '20%', backgroundColor: '#87ceeb', marginBottom: "20px", margin: "5px", marginLeft: "40%" }}>
                Вернуться в главное меню
              </Button>
            </div>
            <div className="container" >
              <Table striped bordered hover>
                <tr>
                  <td>
                    Вакцины/Мутации
                  </td>
                  <td>
                    "Мутации Мимикрия"
                  </td>
                  <td>
                    "Мутации Утечка"
                  </td>
                  <td>
                    "Мутации Урбофил"
                  </td>
                  <td>
                    "Мутации Дарвинист"
                  </td>
                  <td>
                    MaxMin
                  </td>
                </tr>
                <tr>
                  <td>
                    Вакцина Украинская
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[0][0]} onChange={this.changeMatrix00} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[0][1]} onChange={this.changeMatrix01} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[0][2]} onChange={this.changeMatrix02} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[0][3]} onChange={this.changeMatrix03} />
                  </td>
                  <td style={{ backgroundColor: this.colorCellMaxMin(this.state.maxMin[0]) }}>
                    {this.state.maxMin[0]}
                  </td>
                </tr>
                <tr>
                  <td>
                    Вакцина Грузинская
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[1][0]} onChange={this.changeMatrix10} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[1][1]} onChange={this.changeMatrix11} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[1][2]} onChange={this.changeMatrix12} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[1][3]} onChange={this.changeMatrix13} />
                  </td>
                  <td style={{ backgroundColor: this.colorCellMaxMin(this.state.maxMin[1]) }}>
                    {this.state.maxMin[1]}
                  </td>
                </tr>
                <tr>
                  <td>
                    Вакцина Европейская
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[2][0]} onChange={this.changeMatrix20} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[2][1]} onChange={this.changeMatrix21} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[2][2]} onChange={this.changeMatrix22} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[2][3]} onChange={this.changeMatrix23} />
                  </td>
                  <td style={{ backgroundColor: this.colorCellMaxMin(this.state.maxMin[2]) }}>
                    {this.state.maxMin[2]}
                  </td>
                </tr>
                <tr>
                  <td>
                    Вакцина Российская
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[3][0]} onChange={this.changeMatrix30} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[3][1]} onChange={this.changeMatrix31} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[3][2]} onChange={this.changeMatrix32} />
                  </td>
                  <td>
                    <input type="text" style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }} value={this.state.matrix[3][3]} onChange={this.changeMatrix33} />
                  </td>
                  <td style={{ backgroundColor: this.colorCellMaxMin(this.state.maxMin[3]) }}>
                    {this.state.maxMin[3]}
                  </td>
                </tr>
                <tr>
                  <td>
                    MinMax
                </td>
                  <td style={{ backgroundColor: this.colorCellMinMax(this.state.minMax[0]) }}>
                    <span style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }}> {this.state.minMax[0]} </span>
                  </td>
                  <td style={{ backgroundColor: this.colorCellMinMax(this.state.minMax[1]) }}>
                    <span style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }}> {this.state.minMax[1]} </span>
                  </td>
                  <td style={{ backgroundColor: this.colorCellMinMax(this.state.minMax[2]) }}>
                    <span style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }}> {this.state.minMax[2]} </span>
                  </td>
                  <td style={{ backgroundColor: this.colorCellMinMax(this.state.minMax[3]) }}>
                    <span style={{ width: '20%', margin: "5px", marginLeft: "40%", border: "0px" }}> {this.state.minMax[3]} </span>
                  </td>
                </tr>
              </Table >
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MOTI_Lab4;