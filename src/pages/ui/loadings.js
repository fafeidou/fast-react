import React from 'react'
import "./ui.less"
import {Alert, Card, Icon, Spin} from "antd";

export default class Loadings extends React.Component {
    render() {
        const icon = <Icon type="loading" style={{fontSize: 24}}/>
        const iconLoading = <Icon type="loading" style={{fontSize: 24}}/>
        return (
            <div>
                <Card title="Span的用法" className="card-warp">
                    <Spin size="small"></Spin>
                    <Spin style={{margin: '0 10px'}}></Spin>
                    <Spin size="large"></Spin>
                    <Spin indicator={icon} style={{marginLeft: 10}}></Spin>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="fast-react学习"
                        type="info"
                        style={{marginBottom: 10}}
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="fast-react学习"
                            type="warning"
                            style={{marginBottom: 10}}
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="fast-react学习"
                            type="warning"
                            style={{marginBottom: 10}}
                        />
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message="React"
                            description="fast-react学习"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}