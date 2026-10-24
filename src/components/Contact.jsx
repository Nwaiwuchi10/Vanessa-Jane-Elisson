// export default Contact
import { useState } from "react";
import right_arrow_white from "../assets/right-arrow-white.png";
import { PhoneNumber } from "./PhoneNumber";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit handler (WhatsApp integration)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const hCaptcha = e.target.querySelector(
    //   "textarea[name=h-captcha-response]"
    // )?.value;
    // if (!hCaptcha) {
    //   setResult("Please fill out captcha field");
    //   return;
    // }

    setResult("Sending...");

    const whatsappNumber = PhoneNumber.replace(/[^\d]/g, ""); // Phone number without '+'
    const textMessage = `Hello, my name is ${formData.firstName}. My email is ${formData.email}. Here's my message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    window.open(whatsappURL, "_blank");
    setResult("Message sent! Redirecting to WhatsApp...");
    e.target.reset();
    setFormData({ firstName: "", email: "", message: "" });
  };

  // hCaptcha loader
  // function CaptchaLoader() {
  //   const captchadiv = document.querySelectorAll('[data-captcha="true"]');
  //   if (captchadiv.length) {
  //     captchadiv.forEach((item) => {
  //       if (!item.dataset.sitekey) {
  //         item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
  //       }
  //     });

  //     let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";

  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.async = true;
  //     script.defer = true;
  //     script.src = scriptSrc;
  //     document.body.appendChild(script);
  //   }
  // }

  // useEffect(() => {
  //   CaptchaLoader();
  // }, []);

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-sm uppercase tracking-[0.2em] text-[#b820e6] font-semibold">Connect with me</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo tracking-tight">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mb-8 font-Ovo">
        <a
          href="mailto:vanessajaneelisson@gmail.com"
          className="underline underline-offset-4 hover:text-[#b820e6] transition-colors"
        >
          vanessajaneelisson@gmail.com
        </a>
        <a
          href={`tel:${PhoneNumber}`}
          className="underline underline-offset-4 hover:text-[#b820e6] transition-colors"
        >
          {PhoneNumber}
        </a>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <input
          type="hidden"
          name="subject"
          value="Portfolio - New Form Submission"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border border-gray-300 rounded-lg bg-white transition focus:border-[#b820e6] focus:ring-2 focus:ring-[#b820e6]/20 dark:bg-darkHover/30 dark:border-white/30"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border border-gray-300 rounded-lg bg-white transition focus:border-[#b820e6] focus:ring-2 focus:ring-[#b820e6]/20 dark:bg-darkHover/30 dark:border-white/30"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border border-gray-300 rounded-lg bg-white mb-6 transition focus:border-[#b820e6] focus:ring-2 focus:ring-[#b820e6]/20 dark:bg-darkHover/30 dark:border-white/30"
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {/* <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div> */}

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-[#b820e6] hover:-translate-y-0.5 duration-300 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now
          <img src={right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
