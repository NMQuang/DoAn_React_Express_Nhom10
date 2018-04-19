import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Card } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const registerFormContainer = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const registerFormStyle = {
  textAlign: 'center',
  margin: '0 auto',
  width: 500,
  minWidth: 400,
}

const registerFormButton = {
  width: '100%',
}

const FormItem = Form.Item;

class SignUp extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 24,
          offset: 0,
        },
      },
    };

    return (
      <div style={registerFormContainer}>
        <Card style={registerFormStyle}>
          <h1><Icon type="api" /> Infinity Member</h1>
          <Form>
            <FormItem
              {...formItemLayout}
              label="E-mail"
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Password"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Confirm"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>I have read the <a href="">agreement</a></Checkbox>
              )}
            </FormItem>
            <FormItem>
              <Link to="/">
                <Button type="primary" htmlType="submit" style={registerFormButton}>
                  Register
                </Button>
              </Link>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(SignUp);
