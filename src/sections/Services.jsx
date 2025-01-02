import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

function Services() {
  const wrapper = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.querySelectorAll(".service-card").forEach((card) => {
            card.classList.remove("no-transition");
          });
        },
        delay: 0.1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
          onLeaveBack: () => {
            document.querySelectorAll(".service-card").forEach((card) => {
              card.classList.add("no-transition");
            });
          },
        },
      });

      tl.fromTo(
        [text1.current, text2.current, text3.current],
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.3 }
      );

      tl.fromTo(
        ".service-card",
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
        "-=0.3"
      );
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <div className="mt-20 relative py-8" id="services">
      <div className="css-wee"></div>
      <div ref={wrapper} className=" container-wrapper">
        <div>
          <p ref={text1} className=" text-center text-prime">
            cutting-edge algorithms and real-time updates, Doge AI
          </p>

          <h1
            ref={text2}
            className=" text-center text-3xl sm:text-5xl font-manbold font-bold py-2"
          >
            Our products
          </h1>
        </div>

        <div className=" mt-4 justify-center gap-6 items-center grid grid-cols-1 sm:grid-cols-3">
          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/alpha.jpeg"
              alt=""
              className=" mx-auto rounded-xl h-[250px]"
            />
            <h2 className=" text-center text-2xl font-manbold font-bold text-prime pb-2">
              Alpha AI Bot
            </h2>

            <p className=" text-start pb-1 font-light">
              Decode Private alphas. Provides insider market signals from crypto
              KOLs and private alpha groups using AI-powered analysis.
            </p>

            <div className="flex justify-center items-center py-3">
              <a
                href="#"
                target="_blank"
                className="  rounded-3xl  py-1 px-4 text-center font-inter font-semibold mx-auto underline flex items-center gap-2"
              >
                Buy Now <FaArrowTrendUp className=" underline" />
              </a>
            </div>
          </div>

          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/pump.jpeg"
              alt=""
              className=" mx-auto rounded-xl"
            />
            <h2 className=" text-center text-2xl font-inter font-bold  text-prime pb-2">
              PumpScout AI
            </h2>

            <p className=" text-start pb-1 font-light">
              Spot the next moonshot. Tracks market trends, high volume token
              and whale activity to predict meme coin pumps early.
            </p>

            <div className="flex justify-center items-center py-3">
              <a
                href="https://t.me/"
                target="_blank"
                className="  rounded-3xl  py-1 px-4 text-center font-inter font-semibold mx-auto underline flex items-center gap-2"
              >
                Buy Now <FaArrowTrendUp className=" underline" />
              </a>
            </div>
          </div>

          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/safe.jpeg"
              alt=""
              className=" mx-auto rounded-xl"
            />
            <h2 className=" text-center text-2xl font-manbold font-bold text-prime pb-2">
              SafeMeme AI
            </h2>

            <p className=" text-start pb-1">
              Help to Trade smart andstay safe. It uses AI to detect scams, rug
              pulls, and risky tokens in real time.
            </p>

            <div className="flex justify-center items-center  py-4">
              <a
                href="https://t.me/"
                target="_blank"
                className="  rounded-3xl  py-1 px-4 text-center font-inter font-semibold mx-auto underline flex items-center gap-2"
              >
                Buy Now <FaArrowTrendUp className=" underline" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
