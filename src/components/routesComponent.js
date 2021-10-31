
import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import HomePageComponent from"../pages/homePage";
import {HOME_PAGE} from "../constants/routePaths";


class RoutesComponent extends Component{
    render() {
        return (
            <div>                
                <Route exact path={HOME_PAGE} component={HomePageComponent}/>
            </div>
        );
    }
}

export default RoutesComponent;