import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign In | Property",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />
      <div className="max-w-2xl mx-auto">
        <Signin />
      </div>
    </>
  );
};

export default SigninPage;
