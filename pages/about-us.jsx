import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="bg-black">
      {/* WHO ARE WE */}
      <section className="bg-black flex w-100vw relative">
        <div className="absolute top-[5%] left-[25%] text-lgreytext z-50 text-right">
          <h1 className="text-[7rem] ">Who are</h1>
          <h1 className="text-[8rem] font-bold leading-[3rem]">
            WE <span className="text-highlight">?</span>
          </h1>
        </div>
        <div className="w-[40%] px-8 flex justify-center items-center">
          <p className="w-[90%] mt-[55%] tracking-wide leading-[2.8rem] text-lgreytext text-[2rem] text-justify">
            This isn&apos;t your typical &apos;About Us&apos; redirect but rather a true
            narrative that drives us to revolutionize the future of the
            automotive sector. When the concept of Raptee was initially coined
            in 2019, the sole intention was to build a motorcycle that was
            effortless. Reminiscing, though we may not have known how this would
            pan out back in the day, we did see that we wanted to make a
            difference. A difference that transforms the contemporary concept of
            motorcycling in today&apos;s time. A change that inexorably ties
            innovation and sustainability together. We wanted to do what we did
            best, mindfully innovate!
          </p>
        </div>
        <div className="w-[60%]">
          <Image
            src="/images/aboutUs/1.png"
            width="1138"
            height="1662"
            priority={true}
            alt="EV-olution of electric motorcycles - New-gen innovation bike"
          />
        </div>
      </section>
      {/* SOMEONE */}
      <section className="bg-black flex w-100vw relative">
        <div className="w-[55%]">
          <Image
            src="/images/aboutUs/2.png"
            width="715"
            height="1300"
            priority={true}
            alt="EV-olution of electric motorcycles - New-gen innovation bike"
          />
        </div>
        <div className="w-[45%]">
          <p className="w-[90%] tracking-wide leading-[2.8rem] text-lgreytext text-[2rem] text-justify">
            Someone once said, &apos;A team of engineers can position to alter the
            world and not just study it,&apos; and we believe it stands true. Raptee
            is a full stack electric motorcycle startup with a very strong
            technical moat. The company is founded by four engineers from
            Chennai (Ex Tesla, Wipro), working on bringing a no-compromise
            electric motorcycle to an otherwise scooter-only EV market. In
            recent times, we&apos;ve received 4 Cr in grants from ARAI. We at Raptee
            are on a mission to craft a motorcycle that is more than just an EV;
            instead, an augmented machine built with an adaptive
            machine-learning algorithm to bring you an effortless experience.
          </p>
          <div className="text-right text-lgreytext">
            <h2 className="text-[4rem]">We are more than</h2>
            <h2 className="text-[4rem]">just the talk!</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
