import React from "react";
import Image from "next/image";
import BottomLoader from "../../widgets/BottomLoader";

function SafetySection(props) {
  return (
    <div>
      <section
        className="bg-black aspect-video snap-center relative sm:hidden"
        id="safety-id"
        ref={props.safetySection}
      >
        <div className="flex h-full">
          {/* SIDE CONTENTS */}
          <div className="w-2/6 flex flex-col justify-center pl-20 pr-4 z-10">
            <div className="title mb-14">
              <h2
                className=" font-oswald font-light text-4xl tracking-wide"
                ref={(el) => (props.titlesAnim.current[5] = el)}
              >
                Safety, like never before.
              </h2>
              <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
            </div>
            <div className="contents text-xl tracking-wide text-greytext">
              <p ref={(el) => (props.parasAnim.current[5] = el)}>
                Get safer rides with traction control that reduces vehicle slip
                and blind spot warning that helps avoid unexpected collisions.
                Over-the-air software upgrades increase the efficiency of
                individual components and track factors that cause a reduction
                in efficiency.
              </p>
            </div>
          </div>
          <div className="absolute flex items-end">
            <Image
              src="/images/10.png"
              width={1920}
              height={1080}
              priority={true}
              alt="Safest electric motorcycle with Bluetooth, traction control & collision detection"
            />
          </div>
        </div>
        <BottomLoader></BottomLoader>
      </section>
      {/* Safety SECTION - MOBILE*/}
      <section className="bg-black hidden sm:block">
        <div className="flex relative flex-col">
          <div className="mb-8">
            <div className="text-left pl-4 pr-8">
              <h2
                className="text-3xl font-light font-oswald 
                                    tracking-wide my-4"
              >
                Safety, like never before.
              </h2>
              <div className="underline w-8 h-0.5 rounded-xl my-2 bg-highlight"></div>
              <div className="contents text-lg tracking-wide text-greytext">
                <p>
                  Get safer rides with traction control that reduces vehicle
                  slip and blind spot warning that helps avoid unexpected
                  collisions. Over-the-air software upgrades increase the
                  efficiency of individual components and track factors that
                  cause a reduction in efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden shadow-edgeBlur">
            <div
              className="h-64 w-full top-0
                        bg-safetybg bg-cover bg-no-repeat bg-right scale-125 ease-in duration-500"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SafetySection;
