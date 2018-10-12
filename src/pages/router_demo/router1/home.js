import React from "react"
import {HashRouter, Link, Route, Switch} from "react-router-dom"
import Main from "./main"
import About from "./about"
import Topic from "./topic"

export default class Home extends React.Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <ur>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topic</Link>
                        </li>
                    </ur>
                    <hr/>
                    <Switch>
                        <Route exact={true} path="/" component={Main}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topic}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }

}