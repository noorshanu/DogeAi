import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <section className=" relative mt-1">
      <div className=" container-wrapper border-t border-[#005eff9d]">
        <div className=" flex justify-between flex-col sm:flex-row items-center mt-4 ">
        <div className="flex items-center flex-shrink-0 gap-4 mr-6">
            <img src="images/logo.jpeg" alt="" className=" h-[140px] rounded-full" />
            <p className=" font-pixel text-2xl font-bold">DOGEAI</p>
          </div>

          <div className=" flex items-center justify-center flex-col sm:flex-row gap-4">
          © 2024 DogeAI All rights reserved
          </div>

          <div>
            <div className="flex gap-7 text-[42px]">
              <a
                target="_blank"
                href="https://www.instagram.com/mark8.io/"
                className="hover:text-prime transition-all duration-200"
              >
                <FaInstagram />
              </a>

              <a
                target="_blank"
                href="https://twitter.com/Mark_8_"
                className="hover:text-prime transition-all duration-200"
              >
                <FaTwitter />
              </a>

              <a
                target="_blank"
                href="https://t.me/Mark8_Io"
                className="hover:text-prime transition-all duration-200"
              >
                <BsTelegram />
              </a>

              {/* <a
                target="_blank"
                href="#"
                className="hover:text-prime transition-all duration-200"
              >
                <FaFacebook />
              </a> */}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Footer;
