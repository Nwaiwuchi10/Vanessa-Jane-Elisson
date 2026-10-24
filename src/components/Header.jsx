import profile_img from "../assets/vennessa/venessa-pix.jpeg";
import right_arrow_white from "../assets/right-arrow-white.png";
import whatsapp from "../assets/whatsapp.png";
import "./Hero.css";
import { PhoneNumber } from "./PhoneNumber";

const Header = () => {
  const phoneNumber = PhoneNumber;

  const WhatsAppClick = () => {
    const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
    const url = `https://wa.me/${cleanNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full text-md text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 pt-32 pb-12 px-4">
      {/* Hero Image */}
      <div className="w-full mx-auto">
        <img
          src={profile_img}
          alt="Vanessa Jane Elisson"
          className="mx-auto shadow-xl object-cover object-[center_20%] rounded-2xl ring-1 ring-black/10

  w-[95%] h-[420px]
  sm:w-[90%] sm:h-[520px]
  md:w-[85%] md:h-[600px]
  lg:w-[80%] lg:h-[720px]
  xl:w-[70%] xl:h-[760px]"
        />
      </div>

      {/* Text Content */}
      <div className="mt-8">
        <h3 className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
          Hi! I&apos;m Vanessa Jane Elisson{" "}
          <img src="./assets/hand-icon.png" alt="" className="w-6" />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo tracking-tight">
          Financial Consultant
        </h1>

        <p className="max-w-2xl mx-auto font-Ovo mt-4">
          I provide financial consulting focused on cryptocurrency and related
          markets, with an emphasis on thoughtful strategy, risk management,
          and clear guidance.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-300 dark:border-transparent"
        >
          contact me <img src={right_arrow_white} alt="" className="w-4" />
        </a>
      </div>

      {/* WhatsApp Icon */}
      <div className="whatsapp-img-div mt-6">
        <div
          className="whatsapp-img-size cursor-pointer"
          onClick={WhatsAppClick}
        >
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
