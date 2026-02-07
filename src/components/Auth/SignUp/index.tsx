"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useState } from "react";
import Loader from "@/components/Common/Loader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());
    const finalData = { ...value };

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully registered");
        setLoading(false);
        router.push("/signin");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>
      <SocialSignUp />
      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-[40%] before:bg-border before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-[40%] after:bg-border after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-white">
          OR
        </span>
      </span>
      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <Input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full rounded-md border border-border border-solid bg-transparent px-5 py-3 h-auto text-base text-white placeholder:text-grey focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none transition"
          />
        </div>
        <div className="mb-[22px]">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full rounded-md border border-border border-solid bg-transparent px-5 py-3 h-auto text-base text-white placeholder:text-grey focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none transition"
          />
        </div>
        <div className="mb-[22px]">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="w-full rounded-md border border-border border-solid bg-transparent px-5 py-3 h-auto text-base text-white placeholder:text-grey focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none transition"
          />
        </div>
        <div className="mb-9">
          <Button
            type="submit"
            className="flex w-full items-center text-lg font-medium justify-center rounded-md bg-primary px-5 py-6 text-background transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border-primary border "
          >
            Sign Up {loading && <Loader />}
          </Button>
        </div>
      </form>
      <p className="text-body-secondary mb-4 text-white text-base max-w-2xs mx-auto text-center">
        By creating an account you are agree with our{" "}
        <a href="/#" className="text-primary hover:underline">
          Privacy
        </a>{" "}
        and{" "}
        <a href="/#" className="text-primary hover:underline">
          Policy
        </a>
      </p>
      <p className="text-body-secondary text-white text-base text-center">
        Already have an account?
        <Link href="/" className="pl-2 text-primary hover:underline">
          Sign In
        </Link>
      </p>
    </>
  );
};

export default SignUp;
