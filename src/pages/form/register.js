import React from "react"
import {Card, Form} from "antd";

const FormItem = Form.Item;

class FormRegister extends React.Component {

    state = {}

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <FormItem label="用户名" {...formItemLayout}>
                        {
                            getFieldDecorator('userName', {
                                initialValue: '',
                                rules: [
                                    {
                                        required: true,
                                        message: '用户名不能为空'
                                    }
                                ]
                            })(
                                <Input placeholder="请输入用户名"/>
                            )
                        }
                    </FormItem>
                </Card>
            </div>
        )
    }

}

export default Form.create()(FormRegister)