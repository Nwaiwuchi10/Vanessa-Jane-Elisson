import why_invest_img from "../assets/vennessa/WhatsApp Image 2026-10-19 at 9,03,06 AM-Picsart-AiImageEnhancer (1).jpeg";
const WhyInvest = () => {
  return (
    <div className="w-full text-center mx-auto py-16 px-[10%] scroll-mt-20">
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo tracking-tight">Why Invest With Me</h2>

      <p className="font-Ovo text-lg mb-16 mt-4">
        Financial guidance from Vanessa Jane Elisson
      </p>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* First Container – Image */}
          <div className="w-full lg:w-[38%] mx-auto lg:mx-0 flex justify-center">
            <img
              src={why_invest_img}
              alt="Vanessa Jane Elisson"
              className="
          rounded-3xl shadow-xl ring-1 ring-black/10 object-cover

          w-[94%] h-[400px]
          sm:w-[90%] sm:h-[520px]
          md:w-[85%] md:h-[620px]
          lg:w-full lg:h-[720px]"
            />
          </div>

          {/* Second Container – Content */}
          <div className="flex-1 w-full">
            <h3 className="font-Ovo text-xl md:text-2xl mb-6">
              A thoughtful approach to financial guidance:
            </h3>

            <ul className="font-Ovo space-y-3 leading-relaxed">
              <li className="rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm dark:bg-darkHover/30 dark:border-white/10">
                <strong className="block mb-2">Market Perspective:</strong>
                Understand market trends and the factors that can influence
                investment decisions.
              </li>

              <li className="rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm dark:bg-darkHover/30 dark:border-white/10">
                <strong className="block mb-2">Crypto Expertise:</strong>
                Explore cryptocurrency topics including blockchain, Bitcoin,
                Ethereum, and digital assets.
              </li>

              <li className="rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm dark:bg-darkHover/30 dark:border-white/10">
                <strong className="block mb-2">
                  Strategic Investment Approach:
                </strong>
                Consider risk and goals when evaluating an investment strategy.
              </li>

              <li className="rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm dark:bg-darkHover/30 dark:border-white/10">
                <strong className="block mb-2">
                  Personalized Client Guidance:
                </strong>
                Guidance can be shaped around individual goals and risk
                tolerance.
              </li>

              <li className="rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm dark:bg-darkHover/30 dark:border-white/10">
                <strong className="block mb-2">
                  Integrity and Transparency:
                </strong>
                Responsible investing, clear reporting and honest communication
                remain top priorities.
              </li>

              <li className="rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm dark:bg-darkHover/30 dark:border-white/10">
                <strong className="block mb-2">Industry Influence:</strong>
                Regular conference speaker and contributor to leading financial
                publications, always ahead of emerging trends.
              </li>
            </ul>

            {/* Centered Caption */}
            <div className="mt-14 text-center">
              <span className="inline-block px-8 py-3 border border-[#b820e6]/30 bg-purple-50/60 rounded-full shadow-sm text-sm font-Ovo dark:bg-darkHover/40">
                “Your financial growth is my priority.”
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyInvest;
