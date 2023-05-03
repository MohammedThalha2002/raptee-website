import React from "react";
import Image from "next/image";
import BottomLoader from "../../widgets/BottomLoader";

function TechHome(props) {
  return (
    <div>
      <section
        className="bg-black aspect-16/8 relative sm:hidden"
        id="techHome-id"
        ref={props.productsSection}
      >
        <div className=" h-12 "></div>
        <div>
          <Image
            src="/images/7.png"
            width="1920"
            height="1080"
            priority={true}
            alt="Technology redefining the future of mobility - electric E-bike"
            // className="scale-[0.9]"
          />
          <div className="absolute left-0 top-20 pl-20 pt-6 ">
            <div className="content text-left">
              <h1
                className="text-4xl font-light font-oswald 
                                    tracking-widest mb-4"
                ref={(el) => (props.titlesAnim.current[0] = el)}
              >
                Technology engineered beyond boundaries.
              </h1>
              <p
                className="text-2xl font-thin tracking-widest w-2/3"
                ref={(el) => (props.parasAnim.current[0] = el)}
              >
                With innovation in engineering being a crucial component of our
                mission, we&#39;ve ideated and developed almost all of the
                technology that goes into our vehicle in-house, which are
                strongly patent-backed.
              </p>
            </div>
          </div>
          <BottomLoader></BottomLoader>
        </div>
      </section>
      {/* OUR PRODUCTS SECTION - MOBILE*/}
      <section className="bg-black hidden sm:block">
        <div className=" h-12 "></div>
        <div>
          <div
            className="h-screen w-full top-0
                    bg-techstorybg bg-cover bg-no-repeat bg-techstorybp ease-in duration-500"
          >
            <div className="text-left pl-4 pr-4">
              <h3
                className="text-3xl font-light font-oswald 
                                    tracking-wide my-4"
              >
                Technology engineered beyond boundaries.
              </h3>
              <h4 className="text-base font-thin tracking-wide">
                With innovation in engineering being a crucial component of our
                mission, we&#39;ve ideated and developed almost all of the
                technology that goes into our vehicle in-house, which are
                strongly patent-backed.
              </h4>
            </div>
          </div>

          {/* <BottomLoader></BottomLoader> */}
        </div>
      </section>
    </div>
  );
}

export default TechHome;
