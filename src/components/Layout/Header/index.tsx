"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial hash

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 ${
          sticky ? " shadow-lg bg-background pt-5" : "shadow-none pt-7"
        }`}
      >
        <div className="lg:py-0 py-2">
          <div className="container px-4 flex items-center justify-between">
            <div onClick={() => setActiveHash("")} className="cursor-pointer">
              <Logo />
            </div>
            <nav className="hidden lg:flex grow items-center gap-8 justify-center">
              {headerData.map((item, index) => (
                <HeaderLink
                  key={index}
                  item={item}
                  activeHash={activeHash}
                  setActiveHash={setActiveHash}
                />
              ))}
            </nav>
            <div className="lg:flex hidden gap-4 h-10">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setSignInOpen(true)}
                className="bg-transparent border border-primary! text-primary px-4 py-2 rounded-lg hover:bg-primary! hover:text-white h-full transition-all duration-300"
              >
                Sign In
              </Button>
              <Button
                size="lg"
                onClick={() => setSignUpOpen(true)}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-primary h-full transition-all duration-300 font-medium hover:border hover:border-primary"
              >
                Sign Up
              </Button>
            </div>

            <Sheet open={navbarOpen} onOpenChange={setNavbarOpen}>
              <SheetTrigger
                render={
                  <button
                    className="block lg:hidden p-2 rounded-lg"
                    aria-label="Toggle mobile menu"
                  />
                }
              >
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
                <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-background border-l border-border p-0"
              >
                <div className="flex items-center justify-between p-4">
                  <div
                    onClick={() => setActiveHash("")}
                    className="cursor-pointer"
                  >
                    <Logo />
                  </div>
                </div>
                <nav className="flex flex-col items-start p-4">
                  {headerData.map((item, index) => (
                    <MobileHeaderLink
                      key={index}
                      item={item}
                      activeHash={activeHash}
                      setActiveHash={setActiveHash}
                      onClick={() => setNavbarOpen(false)}
                    />
                  ))}
                  <div className="mt-4 flex flex-col gap-4 w-full">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        setNavbarOpen(false);
                        setSignInOpen(true);
                      }}
                      className="w-full bg-transparent border border-primary! text-primary rounded-lg hover:bg-primary! hover:text-white"
                    >
                      Sign In
                    </Button>

                    <Button
                      size="lg"
                      onClick={() => {
                        setNavbarOpen(false);
                        setSignUpOpen(true);
                      }}
                      className="w-full bg-primary text-white rounded-lg hover:bg-transparent hover:text-primary border border-primary font-medium"
                    >
                      Sign Up
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
        <DialogContent className="bg-background border-border max-w-md w-full overflow-y-auto max-h-screen">
          <Signin />
        </DialogContent>
      </Dialog>
      <Dialog open={signUpOpen} onOpenChange={setSignUpOpen}>
        <DialogContent className="bg-background border-border max-w-md w-full overflow-y-auto max-h-screen">
          <SignUp />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
