import React from "react";
import BottomLoader from "../../widgets/BottomLoader";
import ReserveBtn from "../../widgets/ReserveBtn";
import Image from "next/image";

function EvolutionSection(props) {
  return (
    <div>
      {/* Evoloution SECTION  - DESKTOP*/}
      <section
        className="bg-black h-screen snap-center relative sm:hidden"
        id="homepage-id"
        ref={props.evolSection}
      >
        <div className=" h-12 "></div>
        <div>
          <Image
            src="/images/4.png"
            width="1920"
            height="1080"
            priority={true}
            alt="Raptee Motors"
            className="scale-[0.8]"
          />
          <div className="absolute right-0 top-20 pr-14 pt-2">
            <div
              className="content text-right flex flex-col items-end"
              ref={(el) => (props.titlesAnim.current[0] = el)}
            >
              <h3 className="text-2xl font-oswald tracking-wide">Join the</h3>
              <h1 className="text-7xl font-oswald tracking-wide">EV-olution</h1>
              <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
            </div>
          </div>
          <ReserveBtn
            name={"Enquire Now"}
            route={false}
            link={"https://form.jotform.com/230313370313036"}
          ></ReserveBtn>
          <BottomLoader></BottomLoader>
        </div>
      </section>
      {/* Evoloution SECTION  - MOBILE */}
      <section className="bg-black hidden sm:block">
        <div className="relative">
          <div
            className="h-40rem w-full
                bg-homebg bg-cover bg-no-repeat bg-left ease-in duration-500"
          >
            <div className="absolute left-4 top-20 pt-2">
              <div className="content text-left flex flex-col items-start">
                <h3 className="text-xl font-oswald tracking-wide">Join the</h3>
                <h1 className="text-4xl font-oswald tracking-wide">
                  EV-olution
                </h1>
                <div className="underline w-14 h-0.5 rounded-xl my-2 mx-1 bg-highlight"></div>
              </div>
            </div>
          </div>
          <ReserveBtn
            name={"Enquire Now"}
            route={false}
            link={"https://6bsocgdg2tv.typeform.com/to/L7qWu6fY"}
          ></ReserveBtn>
        </div>
      </section>
      {/*  */}
    </div>
  );
}

export default EvolutionSection;
