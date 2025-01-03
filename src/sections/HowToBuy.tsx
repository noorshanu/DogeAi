import React from "react";

function HowToBuy() {
  return (
    <section>
          <div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[2%]  mt-8 ">
        <h1 className=" txt-s font-pixel text-white text-5xl sm:text-[100px] text-center">
        How TO Buy
        </h1>
      </div>
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="relative border-[#757575] border py-4 px-6 rounded-xl nft no-transitionshadow-lg min-h-[250px]">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center font-pixel">
              CREATE WALLET
            </h3>
            <p className="text-[14px] sm:text-[16px] mb-2 text-black  text-center  ">
              DOWNLOAD PHANTOM OR YOUR WALLET OF CHOICE FROM THE APP STORE OR
              GOOGLE PLAY FOR FREE. DESKTOP USERS: DOWNLOAD THE GOOGLE CHROME
              EXTENSION BY GOING TO PHANTOM.
            </p>
            <a
              className="flex justify-center  shadow-xl   py-2 px-4 font-archo text-center text-base rounded-3xl font-manbold font-bold   bg-[#005dff] hover:bg-[#0000] hover:border"
              href="https://phantom.app/"
            >
              GET PHANTOM
            </a>
          </div>
          <div className="relative border-[#757575] border py-4 px-6 rounded-xl nft no-transitionshadow-lg min-h-[250px]">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center font-pixel">
              GET SOME SOL
            </h3>
            <p className="text-[14px] sm:text-[16px] mb-2 text-black  text-center ">
              HAVE SOL IN YOUR WALLET TO SWITCH TO $CHILLGUY. IF YOU DON'T HAVE
              ANY SOL, YOU CAN BUY DIRECTLY ON PHANTOM, TRANSFER FROM ANOTHER
              WALLET, OR BUY ON ANOTHER EXCHANGE AND SEND IT TO YOUR WALLET.
            </p>
            <a
              className="flex justify-center  shadow-xl   py-2 px-4 font-archo text-center text-base rounded-3xl font-manbold font-bold   bg-[#005dff] hover:bg-[#0000] hover:border "
              href="https://phantom.app/"
            >
              BUY SOL
            </a>
          </div>
          <div className="relative border-[#757575] border py-4 px-6 rounded-xl nft no-transitionshadow-lg min-h-[250px]">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center font-pixel">
              GO TO JUPITER
            </h3>
            <p className="text-[14px] sm:text-[16px] mb-2 text-black f text-center ">
              CONNECT TO JUPITER. CONNECT YOUR WALLET IN CHROME, PASTE THE
              $CHILLGUY TOKEN ADDRESS, SELECT TRADE, AND CONFIRM. WHEN PHANTOM
              PROMPTS YOU FOR A WALLET SIGNATURE, SIGN.
            </p>
            <a
              className=" flex justify-center shadow-xl   py-2 px-4 font-archo text-center text-base rounded-3xl font-manbold font-bold   bg-[#005dff] hover:bg-[#0000] hover:border "
              href="https://jup.ag/swap/SOL-Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump"
            >
              BUY NOW
            </a>
          </div>
          <div className="relative border-[#757575] border py-4 px-6 rounded-xl nft no-transitionshadow-lg min-h-[250px]">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center font-pixel">
              SWAP FOR DOGEAI
            </h3>
            <p className="text-[14px] sm:text-[16px] mb-2 text-black text-center ">
              SWITCH SOL FOR $DogeAI. WE HAVE ZERO TAXES SO YOU DON'T NEED TO
              WORRY ABOUT BUYING WITH A SPECIFIC SLIPPAGE. IF YOU DON'T HAVE ANY
              SOL, YOU CAN BUY DIRECTLY ON PHANTOM.
            </p>
            <a
              className=" shadow-xl  flex justify-center  py-2 px-4 font-archo text-center text-base rounded-3xl font-manbold font-bold   bg-[#005dff] hover:bg-[#0000] hover:border  "
              href="https://jup.ag/swap/SOL-Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump"
            >
              SWAP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
