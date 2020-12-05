import React, { Component } from 'react';
import LogIn from './LogInComponent/LogInComponent';
import Header from './HeaderComponent/HeaderComponent';
import SignUp from './/SignUpComponent/SignUpComponent';
import ClosedWaterSupplyInstallation from './ClosedWaterSupplyInstallationComponent/ClosedWaterSupplyInstallationComponent'
import Fish from './FishComponent/FishComponent'
import FishEditForm from './FishComponent/FishEditComponent'
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route path="/signUp" component={SignUp}></Route>
                    <Route path="/signIn" component={LogIn}></Route>
                    <Route path="/CWSI" component={ClosedWaterSupplyInstallation}></Route>
                    <Route path="/fishList" component={Fish}></Route>
                    <Route path="/fishEditForm/:FishId" component={FishEditForm}></Route>
                    <Redirect to="/signIn" component={LogIn}></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Main
// export default (connect(mapStateToProps, mapDispatchToProps)(Main));