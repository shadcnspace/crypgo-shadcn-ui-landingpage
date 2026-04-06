"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);

  const loginUser = (e: any) => {
    e.preventDefault();

    setLoading(true);
    signIn("credentials", { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
          console.log(callback?.error);
          setLoading(false);
          return;
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
          setLoading(false);
          router.push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>
      <SocialSignIn />
      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-[40%] before:bg-border before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-[40%] after:bg-border after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-white">
          OR
        </span>
      </span>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full rounded-md border border-border border-solid bg-transparent px-5 py-3 h-auto text-base text-white placeholder:text-grey focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none transition"
          />
        </div>
        <div className="mb-[22px]">
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full rounded-md border border-border border-solid bg-transparent px-5 py-3 h-auto text-base text-white placeholder:text-grey focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none transition"
          />
        </div>
        <div className="mb-9">
          <Button
            onClick={loginUser}
            type="submit"
            className="bg-primary text-background w-full py-6 rounded-lg text-lg font-medium border border-primary hover:text-primary hover:bg-transparent transition-all duration-300"
          >
            Sign In {loading && <Loader />}
          </Button>
        </div>
      </form>
      <Link
        href="/forgot-password"
        className="mb-2 inline-block text-base text-dark hover:text-primary text-white dark:hover:text-primary text-center"
      >
        Forgot Password?
      </Link>
      <p className="text-body-secondary text-white text-base text-center">
        Not a member yet?{" "}
        <Link href="/" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Signin;
