import web_icon from "../assets/bitcoin_8.png";
import mobile_icon from "../assets/bitcoin_9.png";
import ui_icon from "../assets/cryptocurrency6.png";
import graphics_icon from "../assets/bitcoinLogo.png";
import right_arrow from "../assets/right-arrow.png";
import videoL from "../assets/cryptovideo.mp4";
const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-sm uppercase tracking-[0.2em] text-[#b820e6] font-semibold">What I offer</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo tracking-tight">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Vanessa Jane Elisson provides financial consulting focused on
        cryptocurrency and related financial markets.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        <div
          className="border border-gray-200 bg-white/70 rounded-2xl px-8 py-10 shadow-sm
        hover:shadow-lg hover:border-[#b820e6]/40 hover:-translate-y-1 duration-300 dark:bg-darkHover/30 dark:border-white/10 dark:hover:bg-darkHover"
        >
          <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center dark:bg-white/10"><img src={web_icon} alt="" className="w-9" /></div>
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Wealth Management
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            A professional service that helps individuals and families manage,
            grow, and protect their assets through financial planning,
            investment strategies, and risk management.
          </p>
          <a href="#contact" className="flex items-center gap-2 text-sm mt-5 text-[#b820e6]">
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
        <div
          className="border border-gray-200 bg-white/70 rounded-2xl px-8 py-10 shadow-sm
        hover:shadow-lg hover:border-[#b820e6]/40 hover:-translate-y-1 duration-300 dark:bg-darkHover/30 dark:border-white/10 dark:hover:bg-darkHover"
        >
          <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center dark:bg-white/10"><img src={mobile_icon} alt="" className="w-9" /></div>
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Business Planning
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            The process of creating a roadmap for a company’s growth and
            operations, including goals, strategies, financial forecasts, and
            plans to attract investors or secure funding.
          </p>
          <a href="#contact" className="flex items-center gap-2 text-sm mt-5 text-[#b820e6]">
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
        <div
          className="border border-gray-200 bg-white/70 rounded-2xl px-8 py-10 shadow-sm
        hover:shadow-lg hover:border-[#b820e6]/40 hover:-translate-y-1 duration-300 dark:bg-darkHover/30 dark:border-white/10 dark:hover:bg-darkHover"
        >
          <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center dark:bg-white/10"><img src={ui_icon} alt="" className="w-9" /></div>
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Sustainable Investing
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            An investment approach that considers environmental, social, and
            governance (ESG) factors alongside financial returns, focusing on
            companies that promote long-term sustainability.
          </p>
          <a href="#contact" className="flex items-center gap-2 text-sm mt-5 text-[#b820e6]">
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
        <div
          className="border border-gray-200 bg-white/70 rounded-2xl px-8 py-10 shadow-sm
        hover:shadow-lg hover:border-[#b820e6]/40 hover:-translate-y-1 duration-300 dark:bg-darkHover/30 dark:border-white/10 dark:hover:bg-darkHover"
        >
          <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center dark:bg-white/10"><img src={graphics_icon} alt="" className="w-9" /></div>
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Crypto exchanges and Crypto wallets
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Online platforms where users can buy, sell, and trade
            cryptocurrencies such as Bitcoin, Ethereum, and others, often with
            fiat currency or other digital assets.
          </p>
          <a href="#contact" className="flex items-center gap-2 text-sm mt-5 text-[#b820e6]">
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
      </div>

      <div className="w-full mt-16 flex flex-col items-center">
        <h3 className="text-3xl font-Ovo mb-6 text-center">
          Watch My Investment Strategy Overview
        </h3>

        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10">
          <video
            className="w-full h-full object-cover"
            controls
            // poster="/crypto-video-cover.jpg"
          >
            <source src={videoL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-center max-w-2xl mx-auto mt-5 font-Ovo  dark:text-white/80">
          A quick introduction to how I help clients invest safely and
          profitably in the cryptocurrency markets.
        </p>
      </div>
    </div>
  );
};

export default Services;
