import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";

const Hero = () => {
  const cvLink="https://drive.google.com/file/d/12UZZxK9dexq9-N8dxYBJq4hSvmxOGlvh/view?usp=sharing"

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full w-[50vw] h-[80vh]" fill="purple" />
        <Spotlight className="top-28 left-80 w-[50vw] h-[80vh]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.5] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">dynamic web magic with next.js</h2>

          <TextGenerateEffect 
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi, I&apos;m Hani, a web developer based in Jakarta, Indonesia.
          
          </p>

          <div className="flex justify-center flex-col md:flex-row gap-3">
          <Link href="#projects">
            <MagicButton 
                title="Show my projects" 
                icon={<FaLocationArrow/>}
                position="right"
            />
          </Link>
          
          <Link href={cvLink} target="_blank">
            <MagicButton 
                title="Look my CV" 
                icon={<PiReadCvLogoFill size={20}/>}
                position="right"
            />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
