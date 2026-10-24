import send_icon from "../assets/send-icon.png";
import right_arrow_blod from "../assets/right-arrow-bold.png";
import right_arrow_blod_dark from "../assets/right-arrow-bold-dark.png";
import pdf from "../assets/profile.pdf";
const Work = () => {
  const downloadPortfolio = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "VanessaJaneElisson-Portfolio.pdf";
    link.click();
  };
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-sm uppercase tracking-[0.2em] text-[#b820e6] font-semibold">My mission</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo tracking-tight">My goals</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Here you’ll find a showcase of projects and insights in business
        development, wealth management, and crypto investment—highlighting
        strategies that drive growth and create sustainable value.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        <div className="aspect-square bg-[url('https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?cs=srgb&dl=pexels-worldspectrum-844124.jpg&fm=jpg')] bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="bg-white/95 w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold"> Crypto Investment</h2>
              <p className="text-sm text-gray-700">Expert</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        <div className="aspect-square bg-[url('https://media.istockphoto.com/id/1248674191/photo/bitcoin-gold-cryptocurrency-trading-chart.jpg?s=612x612&w=0&k=20&c=Zj-t9bYp9FChMLXGMRqt2l41KGjYp1jZaehbCKjJWcw=')] bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="bg-white/95 w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Wealth Management</h2>
              <p className="text-sm text-gray-700">Expert</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        <div className="aspect-square bg-[url('https://media.licdn.com/dms/image/v2/C4E12AQHVCaJxFDA82A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1593166122931?e=2147483647&v=beta&t=RXdejFbczGvUdjKP5FKD6kb8tTnPloi0-U6ousIerPk')] bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="bg-white/95 w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Business Management </h2>
              <p className="text-sm text-gray-700">Expert</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        <div className="aspect-square bg-[url('https://expertateverything.in/wp-content/uploads/2021/09/What_is_Cryptocurrency_Expertateverything.in_-scaled.jpg')] bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="bg-white/95 w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Risk Management</h2>
              <p className="text-sm text-gray-700">Expert</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
      </div>
      <a
        onClick={downloadPortfolio}
        style={{ cursor: "pointer" }}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        My Portfolio
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
        <img
          src={right_arrow_blod_dark}
          alt=""
          className="w-4 hidden dark:block"
        />
      </a>
    </div>
  );
};

export default Work;
