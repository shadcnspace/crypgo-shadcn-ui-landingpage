import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../ui/Modal";

const BuyCrypto = () => (
  <div className="text-white text-center">
    <h2 className="text-2xl font-bold mb-4 text-primary">Buy Crypto</h2>
    <p className="text-white/60 mb-6">Connect your wallet to buy cryptocurrency.</p>
    <button className="bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors">
      Connect Wallet
    </button>
  </div>
);

const SellCrypto = () => (
  <div className="text-white text-center">
    <h2 className="text-2xl font-bold mb-4 text-primary">Sell Crypto</h2>
    <p className="text-white/60 mb-6">Connect your wallet to sell cryptocurrency.</p>
    <button className="bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors">
      Connect Wallet
    </button>
  </div>
);

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);

  return (
    <section className="relative py-24 pt-48 overflow-hidden z-[1]" id="main-banner">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-10"
          >
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="flex gap-6 items-center lg:justify-start justify-center">
                <span className="text-base py-1.5 px-4 bg-primary/10 rounded-full border border-white/10 text-primary font-medium h-9 inline-flex items-center">
                  Future of crypto trading
                </span>
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
              <a
                href="/#work"
                className="text-base bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-background py-3 px-7 cursor-pointer transition-colors"
              >
                Explore More
                <img src="/images/icons/icon-arrow.svg" alt="arrow-icon" width={20} height={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="justify-self-center"
          >
            <div className="w-full h-full">
              <img
                src="/images/hero/hero-banner-img.png"
                alt="Banner"
                width={584}
                height={582}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {isBuying && (
        <Modal onClose={() => setIsBuyingOpen(false)}>
          <BuyCrypto />
        </Modal>
      )}
      {isSelling && (
        <Modal onClose={() => setIsSellingOpen(false)}>
          <SellCrypto />
        </Modal>
      )}
    </section>
  );
};

export default Hero;
