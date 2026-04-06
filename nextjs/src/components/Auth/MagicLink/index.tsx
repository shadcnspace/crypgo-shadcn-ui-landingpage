"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { validateEmail } from "../../../utils/validateEmail";
import Loader from "@/components/Common/Loader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MagicLink = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter your email address.");
    }

    setLoader(true);
    if (!validateEmail(email)) {
      setLoader(false);
      return toast.error("Please enter a valid email address.");
    } else {
      signIn("email", {
        redirect: false,
        email: email,
      })
        .then((callback) => {
          if (callback?.ok) {
            toast.success("Email sent");
            setEmail("");
            setLoader(false);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Unable to send email!");
          setLoader(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[22px]">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 h-auto text-base text-dark outline-hidden transition placeholder:text-dark-6 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-9">
        <Button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-[#102C46] px-5 py-6 text-base text-white transition duration-300 ease-in-out hover:bg-[#102C46] h-auto"
        >
          Send Magic Link {loader && <Loader />}
        </Button>
      </div>
    </form>
  );
};

export default MagicLink;
