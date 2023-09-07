import { SignIn } from "@clerk/nextjs";
import React from "react";

const Login = () => {
  return (
    <div>
      <SignIn routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default Login;
