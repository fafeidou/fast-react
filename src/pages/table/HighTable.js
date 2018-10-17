import React from 'react';
import axios from './../../axios/index'
import {Badge, Button, Card, message, Modal, Popconfirm, Table, Radio, Form} from "antd";
import "antd/dist/antd.css";
const FormItem = Form.Item;
export default class HighTable extends React.Component {
    state = {
        loading: true,
        size: 'default'
    }
    params = {
        page: 1
    }

    componentDidMount() {
        this.request();
    }

    // 动态获取mock数据
    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            if (res.code == 0) {
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource: res.result.list,
                    loading: false
                })
            }
        })
    }

    handleChange = (pagination, filters, sorter) => {
        console.log("::" + sorter);
        this.setState({
            sortOrder: sorter.order
        })
    }

    handleDelete = (item) => {
        let id = item.id;
        Modal.confirm({
            title: '确认',
            content: '您确认要删除此条数据吗？',
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    }

    handleSizeChange = (size) => {
        this.setState({
            size: size.target.value
        });
    }

    render() {
        const columns = [
            {
                title: 'id',
                key: 'id',
                width: 80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                width: 80,
                dataIndex: 'username'
            },
            {
                title: '性别',
                key: 'sex',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                width: 80,
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                width: 80,
                dataIndex: 'time'
            }
        ]

        const columns2 = [
            {
                title: 'id',
                key: 'id',
                width: 80,
                dataIndex: 'id',
                fixed: 'left'
            },
            {
                title: '用户名',
                key: 'userName',
                width: 80,
                dataIndex: 'username',
                fixed: 'left'
            },
            {
                title: '性别',
                key: 'sex',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                width: 80,
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday1',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                key: 'birthday2',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                key: 'birthday3',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                key: 'birthday4',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                key: 'birthday5',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                key: 'birthday6',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                key: 'birthday7',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                key: 'birthday8',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                key: 'birthday9',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                key: 'birthday10',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                width: 120,
                dataIndex: 'address',
                fixed: 'right'
            },
            {
                title: '早起时间',
                key: 'time',
                width: 80,
                dataIndex: 'time',
                fixed: 'right'
            }
        ]

        const columns3 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'username'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]

        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age'
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': <Badge status="success" text="成功"/>,
                        '2': <Badge status="error" text="报错"/>,
                        '3': <Badge status="default" text="正常"/>,
                        '4': <Badge status="processing" text="进行中"/>,
                        '5': <Badge status="warning" text="警告"/>
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render: (text, item) => {
                    return <Button size="small" onClick={(item) => {
                        this.handleDelete(item)
                    }}>删除</Button>
                }
            }, {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    return (
                        this.state.dataSource.length >= 1
                            ? (
                                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record)}>
                                    <a href="javascript:;"><Button size="small" type="danger">删除</Button></a>
                                </Popconfirm>
                            ) : null
                    );
                }
            }
        ]
        const columns5 = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '12%',
        }, {
            title: 'Address',
            dataIndex: 'address',
            width: '30%',
            key: 'address',
        }];

        const data = [{
            key: 1,
            name: 'John Brown sr.',
            age: 60,
            address: 'New York No. 1 Lake Park',
            children: [{
                key: 11,
                name: 'John Brown',
                age: 42,
                address: 'New York No. 2 Lake Park',
            }, {
                key: 12,
                name: 'John Brown jr.',
                age: 30,
                address: 'New York No. 3 Lake Park',
                children: [{
                    key: 121,
                    name: 'Jimmy Brown',
                    age: 16,
                    address: 'New York No. 3 Lake Park',
                }],
            }, {
                key: 13,
                name: 'Jim Green sr.',
                age: 72,
                address: 'London No. 1 Lake Park',
                children: [{
                    key: 131,
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 2 Lake Park',
                    children: [{
                        key: 1311,
                        name: 'Jim Green jr.',
                        age: 25,
                        address: 'London No. 3 Lake Park',
                    }, {
                        key: 1312,
                        name: 'Jimmy Green sr.',
                        age: 18,
                        address: 'London No. 4 Lake Park',
                    }],
                }],
            }],
        }, {
            key: 2,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];

        return (
            <div>
                <Card title="头部固定">
                    <FormItem label="Size">
                        <Radio.Group size="default" value={this.state.size} onChange={this.handleSizeChange}>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="middle">Middle</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                        </Radio.Group>
                    </FormItem>
                    <Table
                        {...this.state}
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y: 240}}
                    />
                </Card>
                <Card title="左侧固定" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x: 1840}}
                    />
                </Card>
                <Card title="表格排序" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="树形展示" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns5}
                        dataSource={data}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}