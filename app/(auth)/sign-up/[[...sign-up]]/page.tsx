import { SignUp } from "@clerk/nextjs";
import React from "react";

const Register = () => {
  return (
    <div>
      <SignUp routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default Register;
