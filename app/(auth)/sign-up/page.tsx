"use client";

import AuthForm from "@/components/ui/Forms/AuthForm";
import { SignUpSchema } from "@/lib/validation";
import React from "react";

const signUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default signUp;
