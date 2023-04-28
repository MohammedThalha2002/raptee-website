import Link from "next/link";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/images/updates/5.png",
    title:
      "OUR CEO, DINESH ARJUN, WAS PART OF THE PANEL DISCUSSION AT UMAGINE CHENNAI",
    desc: `We were part of the panel discussion at Umagine Chennai,
     one of India's most prominent tech summits. The panel discussion was on how
      'Tamilnadu is emerging as a leader in Electric vehicle(EV) technology in South Asia'
       by panellists Dinesh Arjun: CEO - Raptee; Moderator T.R Kesavan: TAFE - President- MCCI 
       & Group President; Balasubramanian N: VP - Renault Nissan; Sunjay Kapur: President, Sona Comstar;
        Horst Hammerer: CEO - Avla Marketing.`,
    link: "https://www.instagram.com/p/CqNsMGmNpRj/?utm_source=ig_web_copy_link",
    alt: "Raptee India at panel discussion at Umagine Chennai",
  },
  {
    id: 2,
    img: "/images/updates/6.png",
    title:
      "WE APPOINTED OUR OFFICIAL CHIEF BUSINESS OFFICER, MR. JAYAPRADEEP VASUDEVAN",
    desc: `Meet Mr. Jayapradeep Vasudevan, commonly called Mr. JP. He comes with 25 years
     of work experience in the automobile industry, most recently as India's Business Head 
     at Royal Enfield. Apart from bringing his experience to the table, you know what else
      really makes him cool? It's his down-to-earth demeanour and his out-of-box ideas.`,
    link: "https://www.instagram.com/p/CpUMrtIv_RR/?utm_source=ig_web_copy_link",
    alt: "Raptee - OUR OFFICIAL CHIEF BUSINESS OFFICER, MR. JAYAPRADEEP VASUDEVAN",
  },
  {
    id: 3,
    img: "/images/updates/1.png",
    title:
      "THIS JANUARY, RAPTEE WAS PART OF THE INDIA'S SUSTAINABILITY PANEL AT DAVOS, SWITZERLAND",
    desc: `Our CEO, Dinesh Arjun, represented as a speaker for the Sustainability Panel at
            Davos to shed light on the importance of sustainability in current times.
            While they discussed the topic of 'Climate Change and Innovation,'
            we could not help but notice how diverse the panel was.`,
    link: "https://medium.com/raptee-energy/world-economic-forum-heres-what-happened-at-davos-2023-69e2b297d6d3",
    alt: "Raptee India was at Davos 2023, World Economic forum",
  },
  {
    id: 4,
    img: "/images/updates/2.png",
    title:
      "WE BECAME THE FIRST OEM COMPANY TO RECEIVE A GRANT FROM ARAI AT DELHI, INDIA",
    desc: `Our CEO, Dinesh Arjun, represented as a speaker for the Sustainability Panel
     at Davos to shed light on the importance of sustainability in current times. While they discussed the topic of
     'Climate Change and Innovation,' we could not help but notice how diverse the panel was.`,
    link: "https://www.linkedin.com/posts/peddia_congratulations-to-all-the-10-companies-selected-activity-7021857930278748160-6DsT?utm_source=share&utm_medium=member_desktop",
    alt: "Raptee, Chennai EV manufacturers first OEM company in India to receive grant from ARAI ",
  },
  {
    id: 5,
    img: "/images/updates/3.png",
    title:
      "WE EXHIBITED IN THE PRESENCE OF MR. PIYUSH GOYAL & MR. SOM PARKASH, HON'BLE MINISTERS OF COMMERCE & INDUSTRY",
    desc: `On national startup day, we had the honor to exhibit in the grace of Piyush Goyal,
     Hon'ble Minister of Commerce and Industry, consumer affairs, food & public distribution,
      & Shri Som Parkash, Hon'ble Union minister of state for commerce & industry,
       along with representatives from DPIIT.`,
    link: "https://www.instagram.com/p/CnjmfC6s1kd/?igshid=NmE0MzVhZDY=",
    alt: "Raptee EV company exhibiting for Mr. Piyush Goyal, Hon'ble Minister of Commerce and Industry, consumer affairs, food & public distribution, & Shri Som Parkash, Hon'ble Union minister of state for commerce & industry & DPIIT.",
  },
  {
    id: 6,
    img: "/images/updates/4.png",
    title:
      "LATE LAST YEAR, WE WON THE 'ASPIRATIONAL INNOVATIVE STARTUP OF THE YEAR 2022' AWARD",
    desc: `Raptee was awarded the 'Aspirational Innovative Startup of the Year 2022" powered by the Federation Of Indian Chambers Of Commerce (FCCI) & Industry and The Indian Express. As a startup with a team that thrives at the thought of innovation,
     this acknowledgment has strengthened our resolve more than ever.`,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7007336007679303680",
    alt: "Chennai EV company, Raptee wins Innovative Startup of the year award",
  },
];

function UpdatesSection() {
  const desktopSlider = useRef();
  const mobileSlider = useRef();

  const slideLeftDesktop = () => {
    let slider = desktopSlider.current;
    slider.scrollLeft = slider.scrollLeft - window.innerWidth / 2;
  };

  const slideRightDesktop = () => {
    let slider = desktopSlider.current;
    slider.scrollLeft = slider.scrollLeft + window.innerWidth / 2;
  };
  const slideLeftMobile = () => {
    let slider = mobileSlider.current;
    slider.scrollLeft = slider.scrollLeft - window.innerWidth * 0.8;
  };

  const slideRightMobile = () => {
    let slider = mobileSlider.current;
    slider.scrollLeft = slider.scrollLeft + window.innerWidth * 0.8;
  };

  return (
    <section>
      {/* DESKTOP VERSION */}
      <div className=" w-full h-[32rem] bg-black flex flex-col p-4  sm:hidden">
        <div className="ml-6 mt-2">
          <h1 className="text-4xl ml-10 mb-4 font-oswald">WHAT ARE WE UPTO?</h1>
          <div className="relative flex items-center">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeftDesktop}
              size={40}
            />
            <div
              ref={desktopSlider}
              className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {data.map((item, index) => (
                <Link key={index} href={item.link} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="inline-block w-[41rem] h-[25rem] p-2 mr-8 relative cursor-pointer hover:scale-105 ease-in-out duration-300">
                      <img
                        className="w-[41rem]"
                        src={item.img}
                        alt={item.alt}
                      />
                      {/* <Image
                        src={item.img}
                        layout="fill"
                        priority={true}
                        alt={item.alt}
                      /> */}
                      <div className="w-[41rem] h-[8rem] p-2 px-4 bg-black opacity-80 absolute bottom-0">
                        <h1
                          className="w-full font-oswald tracking-widest"
                          style={{
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            fontSize: "17px",
                            lineHeight: "20px",
                          }}
                        >
                          {item.title}
                        </h1>
                        <p
                          style={{
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                          }}
                          className="w-full text-xs"
                        >
                          {item.desc}
                          <span className="underline">Learn more...</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideRightDesktop}
              size={40}
            />
          </div>
        </div>
      </div>
      {/* MOBILE VERSION */}
      <div className=" w-full h-[28rem] bg-black p-2 hidden sm:block">
        <div className="">
          <h1 className="text-2xl ml-10 pt-2 font-oswald">WHAT ARE WE UPTO?</h1>
          <div className="relative flex items-center">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeftMobile}
              size={40}
            />
            <div
              ref={mobileSlider}
              className="w-full h-full overflow-x-scroll scroll snap-x whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {data.map((item, index) => (
                <Link key={index} href={item.link} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="inline-block p-2 relative cursor-pointer">
                      <img
                        className="w-full snap-center"
                        src={item.img}
                        alt={item.alt}
                      />
                      <div className="w-full h-[8rem] py-2 bg-black opacity-80">
                        <h1
                          className="w-full text-base font-oswald tracking-widest"
                          style={{
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                          }}
                        >
                          {item.title}
                        </h1>
                        <p
                          style={{
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                          }}
                          className="w-full text-xs mt-2"
                        >
                          {item.desc}
                          <span className="underline"> Learn more...</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideRightMobile}
              size={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;
