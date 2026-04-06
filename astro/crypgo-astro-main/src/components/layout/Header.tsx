"use client";
import { useEffect, useState } from "react";
import { headerData } from "../../data/index";
import SignInModal from "../auth/SignInModal";
import SignUpModal from "../auth/SignUpModal";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80);
    const handleHashChange = () => setActiveHash(window.location.hash);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 ${
          sticky ? "shadow-lg bg-background pt-5" : "shadow-none pt-7"
        }`}
      >
        <div className="lg:py-0 py-2">
          <div className="container px-4 flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              onClick={() => setActiveHash("")}
              className="cursor-pointer"
            >
              <img
                src="/images/logo/logo.svg"
                alt="logo"
                width={135}
                height={32}
                style={{ width: "auto", height: "auto" }}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex grow items-center gap-8 justify-center">
              {headerData.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setActiveHash(item.href.includes("#") ? "#" + item.href.split("#")[1] : "")}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    activeHash === "#" + item.href.split("#")[1]
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="lg:flex hidden gap-4 h-10">
              <button
                onClick={() => setSignInOpen(true)}
                className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white h-full transition-all duration-300 text-sm font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => setSignUpOpen(true)}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-primary h-full transition-all duration-300 font-medium hover:border hover:border-primary text-sm"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="block lg:hidden p-2 rounded-lg flex flex-col gap-1.5"
              aria-label="Toggle mobile menu"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col h-full w-full max-w-xs ml-auto bg-background border-l border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <a href="/" onClick={() => { setActiveHash(""); setNavbarOpen(false); }}>
                  <img src="/images/logo/logo.svg" alt="logo" width={120} height={28} />
                </a>
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="text-white text-xl p-1"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {headerData.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setNavbarOpen(false)}
                    className="text-white hover:text-primary text-base font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-4 flex flex-col gap-4">
                  <button
                    onClick={() => { setNavbarOpen(false); setSignInOpen(true); }}
                    className="w-full bg-transparent border border-primary text-primary rounded-lg py-3 hover:bg-primary hover:text-white transition-all"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => { setNavbarOpen(false); setSignUpOpen(true); }}
                    className="w-full bg-primary text-white rounded-lg py-3 hover:bg-transparent hover:text-primary border border-primary font-medium transition-all"
                  >
                    Sign Up
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modals */}
      {signInOpen && <SignInModal onClose={() => setSignInOpen(false)} />}
      {signUpOpen && <SignUpModal onClose={() => setSignUpOpen(false)} />}
    </>
  );
};

export default Header;
