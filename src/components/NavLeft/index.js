import React from 'react'
import {Button, Icon, Menu, Switch} from "antd";
import "./index.less";
import MenuConfig from './../../config/menuConfig'
import "antd/dist/antd.css";
import NavLink from "react-router-dom/es/NavLink";

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            mode: 'inline',
            theme: 'dark',
            collapsed: false,
            menuTreeNode
        })
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }

    changeMode = (value) => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.type}/><span>{item.title}</span></span>}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}><Icon type={item.type}/><span>{item.title}</span></NavLink>
            </Menu.Item>
        })

    }

    render() {
        return (
            <div>
                <Switch onChange={this.changeMode}
                        checkedChildren="Inline"
                        unCheckedChildren="Vertical"
                />
                <span className="ant-divider" style={{margin: '0 1em'}}/>
                <Switch
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                </Button>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Fast MS</h1>
                </div>
                <Menu
                    defaultSelectedKeys={['/admin/ui/buttons']}
                    defaultOpenKeys={['/admin/ui/buttons']}
                    mode={this.state.mode}
                    theme={this.state.theme}
                    inlineCollapsed={this.state.collapsed}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>);
    }
}