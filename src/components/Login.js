import { useState } from "react";
import { Form, Input, Button } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";
import "../index.css"; // Import the CSS styles

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/spender"); // Redirect to the Spender page after login
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleLogin}
        className="form-group"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email" }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password" },
            {
              pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zAZ0-9!@#$%^&*]{6,16}$/,
              message:
                "Password must be 6-16 characters and include a number and a special character.",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Sign in
        </Button>
        <Link to="/register" className="link">
          Sign up
        </Link>
      </Form>
    </div>
  );
};

export default Login;
