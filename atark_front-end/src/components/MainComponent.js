import React, { Component } from 'react';
import LogIn from './LogInComponent/LogInComponent';
import Header from './HeaderComponent/HeaderComponent';
import SignUp from './/SignUpComponent/SignUpComponent';
import ClosedWaterSupplyInstallationListByOrganizationId from './ClosedWaterSupplyInstallation/ClosedWaterSupplyInstallationComponent';
import PoolListByOrganizationId from './PoolComponent/PoolListByOrganizationIdComponent';
import PoolListByCWIId from './PoolComponent/PoolListByCWIIdComponent';
import FishListByPoolId from './FishComponent/FishListByPoolIdComponent'
import FishEditForm from './FishComponent/FishEditComponent'
import KindOfFishList from './KindOfFishComponent/KindOfFishListComponent'
import HerdListByPoolId from './HerdComponent/HerdListByPoolIdComponent'
import MilkinhListByFishId from './MilkingComponent/MilkinhListByFishIdComponent'
import { Switch, Route, Redirect } from 'react-router-dom';
MilkinhListByFishId
class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route path="/signUp" component={SignUp}></Route>
                    <Route path="/signIn" component={LogIn}></Route>
                    <Route path="/ClosedWaterSupplyInstallationListByOrganizationId" component={ClosedWaterSupplyInstallationListByOrganizationId}></Route>
                    <Route path="/poolListByCWIId/:closedWaterSupplyInstallationId" component={PoolListByCWIId}></Route>
                    <Route path="/PoolListByOrganizationId" component={PoolListByOrganizationId}></Route>
                    <Route path="/FishListByPoolId/:poolId" component={FishListByPoolId}></Route>
                    <Route path="/HerdListByPoolId/:poolId" component={HerdListByPoolId}></Route>
                    <Route path="/KindOfFishList" component={KindOfFishList}></Route>
                    <Route path="/fishEditForm/:FishId" component={FishEditForm}></Route>
                    <Route path="/HerdListByPoolId/:FishId" component={HerdListByPoolId}></Route>
                    <Redirect to="/signIn" component={LogIn}></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Main
// export default (connect(mapStateToProps, mapDispatchToProps)(Main));