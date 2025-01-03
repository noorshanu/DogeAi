import CoinMarquee from "./components/CoinMarquee";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import BelowSec from "./sections/BelowSec";
import Cta from "./sections/Cta";
import Hero2 from "./sections/Hero2";
import HowToBuy from "./sections/HowToBuy";
import Services from "./sections/Services";
import Tokenomics from "./sections/Tokenomics";


function App() {
  return (
    <>
      <div className=" overflow-visible sm:overflow-x-clip ">
        <div className="css-1vx3a4p"></div>
        <Navbar />

        {/* <Hero /> */}
        <Hero2 />

        <div className=" mb-4">
          <BelowSec />
        </div>

        <About />

        <div className=" h-[30px]"></div>
        <Tokenomics/>
        <div className=" h-[30px]"></div>

        <Services />
        <div className=" h-[30px]"></div>

        <div>
         <HowToBuy/>
        </div>
        <CoinMarquee />
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
