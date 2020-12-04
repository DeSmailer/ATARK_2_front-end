import React, { Component } from 'react';
import SignIn from './SignInComponent/SignInComponent';
import Header from './HeaderComponent/HeaderComponent';
import SignUp from './/SignUpComponent/SignUpComponent';
import ClosedWaterSupplyInstallation from './ClosedWaterSupplyInstallationComponent/ClosedWaterSupplyInstallationComponent'
import Fish from './FishComponent/FishComponent'
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route path="/signUp" component={SignUp}></Route>
                    <Route path="/signIn" component={SignIn}></Route>
                    <Route path="/CWSI" component={ClosedWaterSupplyInstallation}></Route>
                    <Route path="/fish" component={Fish}></Route>
                    <Redirect to="/signIn" component={SignIn}></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Main
// export default (connect(mapStateToProps, mapDispatchToProps)(Main));