import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LogIn from './components/LoginComponent/LoginComponent';
import Header from './components/HeaderComponent/HeaderComponent';

function App() {
  return (
      <div>
          <BrowserRouter>
          <Header></Header>
          <Switch>
              <Route path="/home"></Route>
             <Redirect to="/login"><LogIn></LogIn></Redirect>
          </Switch>
    </BrowserRouter>
          
      </div>
  );
  }

export default App;


// import React, { Component } from 'react';
// import Registration from './RegistrationComponent';
// import Quiz from './QuizComponent/QuizComponent';
// import Footer from './FooterComponent';
// import SuccessRegistration from './SuccessRegistration';
// import PersonalArea from './PersonalAreaComponent';
// import Roulette from './RouletteComponent';
// import Balance from './BalanceComponent/BalanceComponent';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createAccount, Login, GetQuestion, RefreshToken } from '../redux/ActionCreators';
// import { actions } from 'react-redux-form';
// import Header from './components/HeaderComponent/HeaderComponent';


// const mapStateToProps = state => {
//     return {};
// }

// const mapDispatchToProps = (dispatch) => ({
//     createAccount: (Email, Password, UserName) => dispatch(createAccount(Email, Password, UserName)),
//     Login: (Email, Password) => dispatch(Login(Email, Password)),
//     GetQuestion: () => dispatch(GetQuestion()),
//     RefreshToken: (Token, RefreshToken) => dispatch(RefreshToken(Token, RefreshToken))
// });

// class Main extends Component {
//     render() {
//         return (
//             <div>
//                 <Header></Header>
//                 <Switch>
//                     <Route path="/home"></Route>
//                     <Route path="/login" component={() => <LogIn Login={this.props.Login}></LogIn>}></Route>
//                     <Route exact path="/registration" component={() => <Registration createAccount={this.props.createAccount}></Registration>}></Route>
//                     <Route path="/successreg" component={SuccessRegistration}></Route>
//                     <Route path="/quiz" component={Quiz}></Route>
//                     <Route path="/personalarea" component={PersonalArea}></Route>
//                     <Route path="/roulette" component={Roulette}></Route>
//                     <Route path="/balance" component={Balance}></Route>
//                    <Redirect to="/login"></Redirect>
//                 </Switch>
//             </div>
//         );
//     }
// }

// export default (connect(mapStateToProps, mapDispatchToProps)(Main));