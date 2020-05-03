import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./container/HomePage";
import ProfilePage from "./container/ProfilePage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/profile" component={ProfilePage} exact={true} />
            </Switch>
        </Router>
    );
};

export default App;
