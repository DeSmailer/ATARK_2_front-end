import React, { Component } from 'react';
import LogIn from './SignInComponent/SignInComponent';
import Header from './HeaderComponent/HeaderComponent';
import SignUp from './SignUpComponent/SignUpComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route path="/home"></Route>
                    <Route to="/signUp"><SignUp></SignUp></Route>
                    <Redirect to="/login"><LogIn></LogIn></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Main
// export default (connect(mapStateToProps, mapDispatchToProps)(Main));