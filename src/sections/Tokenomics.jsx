import React from "react";

function Tokenomics() {
  return (
    <section id="token">
      <div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[2%]  mt-8 ">
        <h1 className=" txt-s font-pixel text-white text-5xl sm:text-[100px] text-center">
          Tokenomics
        </h1>
      </div>

      <div className=" container-wrapper">
        <div className=" flex flex-col sm:flex-row justify-evenly gap-4 bg-white border-4 border-black rounded-3xl box-s2 py-4 px-4">
          <div className="" data-aos="fade-up" data-aos-duration="1500">
            <img
              src="images/tax.jpeg"
              alt=""
              className=" sm:w-auto w-[200px] mb-4 h-[200px] sm:h-[250px] mx-auto box-s rounded-3xl border-4 border-black"
            />
            <h1 className=" font-pixel text-4xl sm:text-6xl font-bold py-1 text-center">
              TAX
            </h1>
            <h2 className="font-pixel text-3xl font-bold py-1 text-center">
              0% Tax
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <img
              src="images/supply.jpeg"
              alt=""
              className=" sm:w-auto w-[200px] mb-4 h-[200px] sm:h-[250px] mx-auto box-s rounded-3xl border-4 border-black "
            />
            <h1 className="font-pixel text-4xl sm:text-6xl font-bold py-1 text-center">
              SUPPLY
            </h1>
            <h2 className="font-pixel text-3xl font-bold py-1 text-center">
              1 Billion
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <img
              src="images/lp.jpeg"
              alt=""
              className=" sm:w-auto w-[200px]  mb-4 h-[200px] sm:h-[250px] mx-auto box-s rounded-3xl border-4 border-black"
            />
            <h1 className=" font-pixel text-3xl sm:text-6xl font-bold py-1 text-center">
              LP
            </h1>
            <h2 className="font-pixel text-3xl font-bold py-1 text-center">
              100% BURN
            </h2>
          </div>
        </div>

        <img src="images/disco.png" alt="" className=" mx-auto mt-8" />
      </div>
    </section>
  );
}

export default Tokenomics;
