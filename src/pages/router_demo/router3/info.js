import React from 'react'

export default class Info extends React.Component {

    render() {
        return (
            <div>
                动态路由:{this.props.match.params.value}
            </div>
        );
    }
}