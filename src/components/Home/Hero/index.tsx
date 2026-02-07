"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import CardSlider from "./slider";
import { useEffect, useState, useCallback } from "react";
import BrandLogo from "../BrandLogo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative py-24 pt-48 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div {...leftAnimation} className="flex flex-col items-center lg:items-start gap-10">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="flex gap-6 items-center lg:justify-start justify-center">
                <Badge
                  variant="outline"
                  className="text-base py-1.5 px-4 bg-primary/10 rounded-full border border-white/10 text-primary font-medium h-9"
                >
                  Future of crypto trading
                </Badge>
              </div>
              <h1 className="font-medium xl:text-[72px] md:text-6xl sm:text-5xl text-4xl text-white">
                Fast and Secure Cryptocurrency Exchange
              </h1>
              <p className="text-white">
                Trade cryptocurrencies with ease, security, and advanced
                features on our cutting-edge platform.
              </p>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <Button
                render={<Link href="/#work" />}
                className="text-base bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-background py-6 px-7 cursor-pointer h-12"
              >
                Explore More
                <Image
                  src={"/images/icons/icon-arrow.svg"}
                  alt="arrow-icon"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="justify-self-center">
            <div className="w-full h-full">
              <Image
                src="/images/hero/hero-banner-img.png"
                alt="Banner"
                width={584}
                height={582}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
        <BrandLogo />
        <CardSlider />
      </div>

      {/* Dialogs for Buy and Sell */}
      <Dialog open={isBuying} onOpenChange={setIsBuyingOpen}>
        <DialogContent className="max-w-md bg-dark_grey/90 backdrop-blur-md border border-border p-8 pt-14 text-center">
          <BuyCrypto />
        </DialogContent>
      </Dialog>

      <Dialog open={isSelling} onOpenChange={setIsSellingOpen}>
        <DialogContent className="max-w-md bg-dark_grey/90 backdrop-blur-md border border-border p-8 pt-14 text-center">
          <SellCrypto />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
