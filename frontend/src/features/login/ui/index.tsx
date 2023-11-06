import { FC, HTMLAttributes } from 'react';
import { Card, Form, Input } from 'antd';
import classNames from 'classnames';

import classes from './index.module.scss';

interface LoginProps extends HTMLAttributes<HTMLDivElement> {}

export const Login: FC<LoginProps> = ({ className }) => {
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card
      className={classNames(classes.login, className)}
      bordered={false}
      style={{ width: 700 }}
    >
      <Form
        name="Login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Card>
  );
};
