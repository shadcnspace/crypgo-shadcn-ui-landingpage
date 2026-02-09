"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pricedeta } from "@/app/api/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const CardSlider = () => {
  const [prices, setPrices] = useState<Record<string, { usd: number }>>({});

  useEffect(() => {
    const fetchPrices = async () => {
      const ids = pricedeta.map((item) => item.title.toLowerCase()).join(",");
      const response = await fetch(
        `/api/crypto-price?ids=${ids}&vs_currency=usd`,
      );
      const data = await response.json();
      setPrices(data);
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="pt-14 flex flex-col gap-10">
      <div className="flex flex-col gap-3 items-center justify-center text-center">
        <p className="text-white font-medium">
          Featured <span className="text-primary">crypto coins</span>
        </p>
        <h2 className="sm:text-5xl text-3xl text-white font-medium">
          Top crypto coins updates
        </h2>
      </div>

      <Slider {...settings}>
        {pricedeta.map((item, index) => (
          <div key={index} className="pr-6">
            <Card className="bg-white/5 border-none shadow-none rounded-xl p-0">
              <CardContent className="px-5 py-6">
                <div className="flex flex-col items-center gap-5">
                  <div
                    className={`${item.background} ${item.padding} rounded-full`}
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                  <p className="text-white text-xs font-normal ">
                    <span className="text-16 font-bold mr-2">{item.title}</span>
                    {item.short}
                  </p>
                </div>
                <div className="flex justify-center mt-2">
                  <div>
                    <p className="text-xl font-bold text-white mb-0 leading-none">
                      $
                      {(() => {
                        const key = Object.keys(prices).find(
                          (priceKey) =>
                            priceKey.toLowerCase() === item.title.toLowerCase(),
                        );
                        return key ? prices[key].usd : "Loading...";
                      })()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
