import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
        <BrowserRouter>
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <div className="container">
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </div>
        </BrowserRouter>
        )
    }
};

export default connect(null, actions)(App);