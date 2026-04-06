import { perksData } from "@/app/api/data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Perks = () => {
  return (
    <section className="pb-28 relative">
      <div className="container px-4 relative z-2">
        <div className="text-center">
          <div className="flex flex-col gap-4">
            <p className="text-muted text-base relative">
              Always By <span className="text-primary">your side</span>
            </p>
            <h2 className="text-white sm:text-5xl text-3xl font-medium">
              Be the first to use our Cryogo!
            </h2>
          </div>
          <div className="mt-16 border border-border grid lg:grid-cols-3 sm:grid-cols-2 py-16 gap-10 px-20 rounded-3xl sm:bg-perk bg-dark_grey/35 lg:bg-bottom bg-center bg-no-repeat">
            {perksData.map((item, index) => (
              <Card
                key={index}
                className="text-center flex items-center justify-end flex-col bg-transparent border-none shadow-none ring-0 p-0"
              >
                <CardContent className="p-0 flex flex-col items-center justify-end">
                  <div className="bg-primary/25 backdrop-blur-xs p-4 rounded-full w-fit">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <h3 className={`text-white text-28 mb-4 ${item.space}`}>
                    {item.title}
                  </h3>
                  <div
                    className="text-muted/60"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-linear-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 z-0 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 absolute sm:-left-48 opacity-60"></div>
    </section>
  );
};

export default Perks;
