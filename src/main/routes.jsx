import React from "react";
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import Dashboard from '../dashboard/DashBoard';
import BillingCycles from '../billingCycles/BillingCycles';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="billingCycles" component={BillingCycles} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
)