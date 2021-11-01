
import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import OnePageComponent from"../pages/homePage";
import SoonPageComponent from "../pages/soonPage"
import {ONE_PAGE, TWO_PAGE} from "../constants/routePaths";


class RoutesComponent extends Component{
    render() {
        return (
            <div>                
                <Route exact path={ONE_PAGE} component={OnePageComponent}/>
                <Route exact path={TWO_PAGE} component={SoonPageComponent}/>

            </div>
        );
    }
}

export default RoutesComponent;