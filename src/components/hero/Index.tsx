import heroImg from "../../assets/hero.png";
import Brands from "./Brands";
import Buttons from "./Buttons";

const HeroLink = ({ children }: { children: string }) => {
  return (
    <a href="#" className="hover:underline">
      {children}
    </a>
  );
};

const Hero = () => {
  return (
    <main>
      {/* Text & Image */}
      <div className="custom-container grid-cols-12 items-center gap-4 pb-4 pt-20 lg:grid lg:pb-8 lg:pt-28">
        {/* Text Col */}
        <div className="col-span-7 ">
          <h1 className="text-primary pb-4 text-4xl font-extrabold tracking-tighter md:text-5xl xl:text-6xl">
            Building digital
            <br />
            products & brands.
          </h1>
          <p className="text-natural max-w-[40rem]">
            This free and open-source landing page template was built using the
            utility classes from <HeroLink>Tailwind CSS</HeroLink> and based on
            the components from the <HeroLink>Flowbite Library</HeroLink> and
            the <HeroLink>Blocks System</HeroLink>.
          </p>

          {/* Buttons */}
          <Buttons />
        </div>

        {/* Image Col */}
        <div className="col-span-5 hidden lg:block">
          <img src={heroImg} alt="cover image" />
        </div>
      </div>

      {/* Brands */}
      <Brands />
    </main>
  );
};

export default Hero;
