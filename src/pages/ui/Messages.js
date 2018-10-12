import React from 'react'
import {Button, Card, message} from 'antd'
import './ui.less'

export default class Messages extends React.Component {

    showMessage = (type, duration) => {
        if (duration) {
            message.config({
                duration: duration
            })
        }
        message[type]("恭喜你，React课程晋级成功");
    }

    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.showMessage('loading')}>Loading</Button>
                </Card>
                <Card title="全局提示框(设置时间)" className="card-wrap">
                    <Button type="primary" onClick={() => this.showMessage('success', 1)}>Success-1s</Button>
                    <Button type="primary" onClick={() => this.showMessage('info', 5)}>Info-5s</Button>
                    <Button type="primary" onClick={() => this.showMessage('warning', 10)}>Warning-10s</Button>
                    <Button type="primary" onClick={() => this.showMessage('error', 15)}>Error-15s</Button>
                </Card>
            </div>
        );
    }
}