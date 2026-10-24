import user_image from "../assets/vennessa/vennessa.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-sm uppercase tracking-[0.2em] text-[#b820e6] font-semibold">Introduction</h4>

      <h2 className="text-center text-4xl sm:text-5xl font-Ovo tracking-tight">About Me</h2>

      <div className="max-w-7xl mx-auto">
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          {/* Image Section – Original Big Responsive Style */}
          <div className="w-full lg:w-[38%] mx-auto lg:mx-0 flex justify-center">
            <img
              src={user_image}
              alt="Vanessa Jane Elisson"
              className="
                   rounded-3xl shadow-xl ring-1 ring-black/10 object-cover
         
                   w-[94%] h-[400px]
                   sm:w-[90%] sm:h-[520px]
                   md:w-[85%] md:h-[620px]
                   lg:w-full lg:h-[720px]"
            />
          </div>

          {/* Text Content – Back to Original Fonts */}
          <div className="flex-1 text-left">
            <p className="mb-10 max-w-2xl font-Ovo">
              Vanessa Jane Elisson provides financial consulting focused on
              cryptocurrency and related markets. Her approach centers on
              understanding market trends, considering risk, and making
              financial concepts easier to navigate.
              <br />
              <br />
              This site shares information about her services, investment
              perspectives, and areas of focus, including crypto markets,
              portfolio strategy, and risk management.
            </p>

            {/* Skill Badges – Unchanged */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 rounded-full border border-gray-200 bg-white/70 shadow-sm text-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-darkHover/40 dark:border-white/10">
                Technical Analysis
              </span>
              <span className="px-4 py-2 rounded-full border border-gray-200 bg-white/70 shadow-sm text-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-darkHover/40 dark:border-white/10">
                Crypto Markets
              </span>
              <span className="px-4 py-2 rounded-full border border-gray-200 bg-white/70 shadow-sm text-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-darkHover/40 dark:border-white/10">
                Risk Management
              </span>
              <span className="px-4 py-2 rounded-full border border-gray-200 bg-white/70 shadow-sm text-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-darkHover/40 dark:border-white/10">
                Portfolio Strategy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
