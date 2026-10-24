import mail_icon from "../assets/mail_icon.png";
import mail_icon_dark from "../assets/mail_icon_dark.png";
import { PhoneNumber } from "./PhoneNumber";

const Footer = () => {
  return (
    <div className="mt-20 border-t border-gray-200 dark:border-white/10">
      <div className="text-center text-xl font-semibold py-10 ">
        Vanessa Jane Elisson
        {/* <img src={logo} alt="" className="w-36 mx-auto mb-2 dark:hidden" />
        <img
          src={logo_dark}
          alt=""
          className="w-36 mx-auto mb-2 hidden dark:block"
        /> */}
        <a
          href="mailto:vanessajaneelisson@gmail.com"
          className="w-max flex items-center gap-2 mx-auto text-base font-normal hover:text-[#b820e6] transition-colors"
        >
          <img src={mail_icon} alt="" className="w-6 dark:hidden" />
          <img src={mail_icon_dark} alt="" className="w-6 hidden dark:block" />
          vanessajaneelisson@gmail.com
        </a>
        <a
          href={`tel:${PhoneNumber}`}
          className="block mt-2 text-base font-normal hover:text-[#b820e6] transition-colors"
        >
          {PhoneNumber}
        </a>
      </div>
      <div className="text-center flex items-center justify-center border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="text-center">
          © 2026 Vanessa Jane Elisson. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
