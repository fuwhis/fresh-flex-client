import React from 'react';
import { Form, Input, Button, Checkbox, Card, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less';

function LoginForm() {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Card className='card-form' style={{ width: 480 }}>
      {/* <h1 className='h1-text'>Sign In</h1> */}
      <Divider><h1>Sign In</h1></Divider>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="/abc">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <br /> Or  <br />
          <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default LoginForm;