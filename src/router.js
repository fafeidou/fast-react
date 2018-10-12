import React from "react"
import {HashRouter, Route} from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Login from "./pages/login/Login";
import Buttons from "./pages/ui/Buttons";
import Models from "./pages/ui/Models";
import Loadings from "./pages/ui/loadings";
import Notice from "./pages/ui/Notice";
import Messages from "./pages/ui/Messages";
import Tabs from "./pages/ui/Tabs";
import Carousels from "./pages/ui/Carousels";
import Gallery from "./pages/ui/Gallery";

export default class Router extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons}></Route>
                            <Route path="/admin/ui/modals" component={Models}></Route>
                            <Route path="/admin/ui/loadings" component={Loadings}></Route>
                            <Route path="/admin/ui/loadings" component={Loadings}></Route>
                            <Route path="/admin/ui/notification" component={Notice}></Route>
                            <Route path="/admin/ui/messages" component={Messages}></Route>
                            <Route path="/admin/ui/tabs" component={Tabs}></Route>
                            <Route path="/admin/ui/carousel" component={Carousels}></Route>
                            <Route path="/admin/ui/gallery" component={Gallery}></Route>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        );
    }

}