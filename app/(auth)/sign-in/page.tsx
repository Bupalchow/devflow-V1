"use client";

import AuthForm from "@/components/ui/Forms/AuthForm";
import React from "react";

import { SignInSchema } from "@/lib/validation";
const signIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default signIn;
