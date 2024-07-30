import React, { useEffect, useState } from 'react';
import AdobePS from "../assets/brands/adobe-photoshop.svg";
import OpenAI from "../assets/brands/openai.svg";
import Figma from "../assets/brands/figma.svg";
import ReactIcon from "../assets/brands/react.svg";
import AdobeXD from "../assets/brands/adobe-xd.svg";

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Auutomate Your Business with Cutting-Edge AI Technology";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length-1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Adjust typing speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex relative text-white text-center overflow-hidden md:px-20 pb-11">
      <div className="relative z-10 flex flex-col justify-center mx-auto px-4 md:text-start">
        <h1 className="text-5xl md:text-8xl font-bold mb-4 relative">
          <span className="inline-block font-findel">
           Morning Desk
          </span>
        </h1>
        <h2 className="text-green-400 text-xl md:text-3xl font-semibold mb-4 px-12 md:px-0">
        <span className="inline-block">
           {displayedText}
            <span className="font-extralight animate-blink">|</span>
          </span>
        </h2>
        <div className='flex md:block text-sm justify-center'>
        <button className='bg-gray-200 p-4 text-black rounded-sm hover:scale-105 transition-all ease-linear mr-8'>Book Appointment</button>
        <button className='bg-gray-200 p-4 text-black rounded-sm hover:scale-105 transition-all ease-linear'>Contact Us</button>
        </div>
      </div>
      <div className="hidden md:flex gap-x-4 px-4 overflow-hidden">
        <div className="w-full flex flex-col gap-y-4 items-start animate-[marquee-vertical_15s_linear_infinite]">
          <img src={AdobePS} alt="Adobe Photoshop" className="h-24 w-40" />
          <img src={AdobeXD} alt="Adobe XD" className="h-24 w-40" />
          <img src={Figma} alt="Figma" className="h-24 w-40" />
          <img src={ReactIcon} alt="React" className="h-24 w-40" />
          <img src={OpenAI} alt="OpenAI" className="h-24 w-40 invert p-2 rounded-sm" />
        </div>
        <div className="w-full flex flex-col-reverse gap-y-4 items-start animate-[marquee-vertical-reverse_15s_linear_infinite]">
          <img src={AdobePS} alt="Adobe Photoshop" className="h-24 w-40" />
          <img src={AdobeXD} alt="Adobe XD" className="h-24 w-40" />
          <img src={Figma} alt="Figma" className="h-24 w-40" />
          <img src={ReactIcon} alt="React" className="h-24 w-40" />
          <img src={OpenAI} alt="OpenAI" className="h-24 w-40 invert p-2 rounded-sm" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
