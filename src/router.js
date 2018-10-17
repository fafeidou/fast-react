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
import FormLogin from "./pages/form/login"
import FormRegister from "./pages/form/register"
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from "antd";
import BasicTable from "./pages/table/basicTable";
import HighTable from "./pages/table/HighTable";
import City from "./pages/city";

export default class Router extends React.Component {

    render() {
        return (
            <LocaleProvider locale={zhCN}>
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
                                <Route path="/admin/form/login" component={FormLogin}></Route>
                                <Route path="/admin/form/reg" component={FormRegister}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>
                                <Route path="/admin/table/high" component={HighTable}></Route>
                                <Route path="/admin/city" component={City}></Route>
                            </Admin>
                        }></Route>
                    </App>
                </HashRouter>
            </LocaleProvider>
        );
    }

}