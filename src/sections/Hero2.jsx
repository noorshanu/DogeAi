import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaFacebook, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import CopyAddress from "./CopyAddress";

const Hero2 = () => {
  const heading = useRef();
  const wrapper = useRef();
  const mobile = useRef();
  const span1 = useRef();
  const span2 = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set([mobile.current], {
      top:
        wrapper.current.getBoundingClientRect().height -
        mobile.current.getBoundingClientRect().height,
      opacity: 0,
    });

    gsap.set([span1.current], {
      marginRight: "0.29em",
    });

    gsap.set([span1.current, span2.current], {
      translateZ: 140,
      rotateX: "70deg",
      opacity: 0,
    });

    tl.to([span1.current, span2.current], {
      rotateX: "0deg",
      opacity: 1,
      duration: 0.9,
      stagger: 0.35,
    });

    tl.to([span1.current, span2.current], {
      marginRight: 0,
      translateZ: 0,
      ease: "power3.out",
      duration: 2,
    });

    tl.to(
      mobile.current,
      {
        ease: "power3.out",
        duration: 1.25,
        top: "auto",
      },
      "<"
    );
    tl.to(
      mobile.current,
      { ease: "power3.out", duration: 0.4, opacity: 1 },
      "<"
    );
  }, []);

  const handleMouseMove = (e) => {
    gsap.to(heading.current, {
      x: -((e.clientX / window.innerWidth - 0.5) * 15),
      y: -((e.clientY / window.innerHeight - 0.5) * 15),
    });

    gsap.to([mobile.current], {
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={wrapper} className="flex flex-col w-full items-center">
      <div className=" h-[70vh] lg:h-[80vh] sm:h-[100vh] w-full relative text-[min(16.5vw,220px)] sm:text-[min(14vw,220px)] lg:text-[min(12.5vw,220px)] -mb-[0.29em]">
        <div className="min-h-[300px] sm:min-h-[88vw] lg:min-h-[min(800px,60vw)] h-screen absolute top-0 left-0 w-full flex items-center justify-center">
          <div
            ref={mobile}
            className="absolute z-10 w-full max-w-[320px] sm:max-w-[600px] lg:max-w-[min(800px,20vw)] flex justify-center items-center isolate"
          >
         
            <img
              draggable={false}
             
              src="/images/doge.png"
              className="w-full h-full"
            />
          </div>
        </div>
        <div
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          className="sticky top-[50dvh] -translate-y-1/2 w-full flex justify-center items-center"
        >
          <h1
            ref={heading}
            style={{ transformStyle: "preserve-3d" }}
            className="inter font-bold txt-grad leading-none whitespace-nowrap"
          >
            <span ref={span1} className="inline-block txt-grad font-pixel">
              Meet
            </span>{" "}
            <span ref={span2} className="inline-block txt-grad font-pixel">
              DOGEAI
            </span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center text-center max-w-[1280px] px-[4vw] gap-8 mb-36 z-10">
        <p className="text-lg sm:text-xl font-manreg leading-[1.6]">
        Doge AI: Ignite the Power of Insider Alpha for Explosive Gains!

Unlock the future of intelligent trading with Doge AI – your ultimate companion in harnessing insider insights and market alpha.
</p>
        <div className="flex gap-7 text-[42px]">
          <a
            target="_blank"
            href="https://www.dextools.io/app/en/solana/pair-explorer/G6q8x9BY18dFcPF3PMawhGVKoHJwgph5UKDSaLeooi1V?t=1736346853012"
            className="hover:text-prime transition-all duration-200"
          >
          <img src="images/dextools.svg" alt="" className=" w-auto h-[44px]"/>
          </a>

          <a
            target="_blank"
            href="https://x.com/DogeAiagents"
            className="hover:text-prime transition-all duration-200"
          >
            <FaTwitter />
          </a>

          <a
            target="_blank"
            href="https://t.me/DogeAI_AgentSol" 
            className="hover:text-prime transition-all duration-200"
          >
          <FaTelegramPlane/>
          </a>
        </div>
        <div  
           className=" flex mt-4 mb-2 items-center justify-center gap-2  relative z-20 py-1 bg-black border-t-2 border-l-2 border-r-2 border-prime rounded-2xl w-full max-w-full sm:max-w-xl px-4 mx-auto">
          <CopyAddress />{" "}
        
        </div>
      </div>
    </div>
  );
};

export default Hero2;
