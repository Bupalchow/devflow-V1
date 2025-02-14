import React from "react";
import NavLinks from "./navbar/NavLinks";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar no-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-32 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-3">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3 mt-8">
        <Link href={ROUTES.SIGN_IN}>
          <Button className="small-medium rounded-lg btn-secondary min-h-[41px] w-full px-4 py-3 shadow-none">
            <Image
              src="/icons/account.svg"
              alt="account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Button>
        </Link>

        <Link href={ROUTES.SIGN_UP}>
          <Button className="small-medium rounded-lg btn-tertiary border light-border-2 text-dark400_light900 min-h-[41px] w-full px-4 py-3 shadow-none">
            <Image
              src="/icons/sign-up.svg"
              alt="sign-up"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeftSidebar;
