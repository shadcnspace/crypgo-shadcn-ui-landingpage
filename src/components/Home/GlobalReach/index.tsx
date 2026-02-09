"use client";
import { GlobalReachData } from "./data";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

const GlobalReach = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section>
      <div className="container">
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
          {GlobalReachData.map((item, index) => {
            return (
              <Card
                key={index}
                className="flex flex-col items-center border border-white/10 gap-4 bg-white/5 py-4 md:py-8 px-5 md:px-6 rounded-md ring-0 shadow-none"
              >
                <CardContent className="p-0 flex flex-col items-center gap-4">
                  <h3 ref={ref} className="text-3xl font-black text-primary">
                    {item.prefix && item.prefix}
                    {item.count == 247 ? (
                      "24/7"
                    ) : inView ? (
                      <CountUp start={0} end={item.count} duration={3} />
                    ) : (
                      "0"
                    )}
                    {item.postfix && item.postfix}
                  </h3>
                  <p className="text-white/80">{item.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
