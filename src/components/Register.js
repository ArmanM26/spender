import { useState } from "react";
import { Form, Input, Button } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/spender"); // Redirect to Spender page after registration
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleRegister}
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
              pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message:
                "Password must be 6-16 characters and include a number and a special character.",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default Register;
