import React from "react"
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from "./home";
import About from "../router1/about";
import Topic from "../router1/topic";
import Main from "./main";

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Route path="/main" render={() =>
                        <Main>
                            <Route path="/main/a" component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}