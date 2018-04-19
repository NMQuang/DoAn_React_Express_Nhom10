import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Card } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const loginFormContainer = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const loginFormStyle = {
  margin: '0 auto',
  maxWidth: 300,
}

const loginFormButton = {
  width: '100%',
}

const forgotPasswordStyle = {
  float: 'right',
}

const FormItem = Form.Item;

class SignIn extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={loginFormContainer}>
        <Card style={loginFormStyle}>
          <h1><Icon type="api" /> Infinity Admin</h1>
          <Form>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <Link style={forgotPasswordStyle} to="/forgot">Forgot password</Link>
              <Link to="/app">
                <Button type="primary" htmlType="submit" style={loginFormButton}>
                  Log in
                </Button>
              </Link>
              Or <Link to="/signup">register now!</Link>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(SignIn);
