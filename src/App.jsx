import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import WhyInvest from "./components/WhyInvest";
import TestimonialSlider from "./components/Testmonial";
// import TradingTicker from "./components/TradingTicker/TradingTicker";

const App = () => {
  function intoRoman(num) {
    const romanNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];
    let result = "";
    for (const numeral of romanNumerals) {
      while (num >= numeral.value) {
        result += numeral.symbol;
        num -= numeral.value;
      }
    }
    return result;
  }
  console.log(intoRoman(2024)); // Output: MMXXIV
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <TradingTicker /> */}
      <Services />
      <WhyInvest />
      <Work />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
