import React from "react";
import styles from "@/components/Button.module.css";
const Login = () => {
  return (
    <div>
      <h1>Login Form</h1>
      <button type="submit" className={styles.button}>
        Login
      </button>
    </div>
  );
};

export default Login;
