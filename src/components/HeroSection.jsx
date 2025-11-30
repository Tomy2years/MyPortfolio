// components/HeroSection.jsx
import { ArrowDown } from "lucide-react";
import AsciiProfile from "@/components/AsciiProfile";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto z-10">
        {/* Use a 12-column grid for more precise control */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content (Takes 5/12 columns) */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 lg:col-span-5">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in block">Hey,  I'm </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block mt-2">
                Tom
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 inline-block">
                Perel
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
              I am a passionate Honors Computer Science Student with experience in AI Research and Web Development.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center lg:justify-start">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: ASCII Art (Takes 7/12 columns for a larger presence) */}
          <div className="order-1 lg:order-2 lg:col-span-7 opacity-0 animate-fade-in flex justify-center lg:justify-center items-center">
             {/* Removed the scale transform to let it be its natural size */}
             <AsciiProfile />
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};