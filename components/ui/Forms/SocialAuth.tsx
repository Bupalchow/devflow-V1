"use client";
import React from "react";
import { Button } from "../button";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuth = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 rounded-2 px-4 flex-1 py-3.5 hover:opacity-90 transition-opacity duration-200";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (e) {
      console.log(e);
      toast({
        title: "Sign In failed",
        description:
          e instanceof Error ? e.message : "An error occured while sign in ",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className={buttonClass}
        onClick={() => {
          handleSignIn("github");
        }}
      >
        <Image
          src="/icons/github.svg"
          alt="Github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with GitHub</span>
      </Button>

      <Button
        className={buttonClass}
        onClick={() => {
          handleSignIn("google");
        }}
      >
        <Image
          src="/icons/google.svg"
          alt="Github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuth;
