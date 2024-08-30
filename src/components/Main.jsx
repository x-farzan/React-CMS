import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import cover from "../assets/cover.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={cover}
        alt="A beautWe produce food for Hamstersiful mountain landscape"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="w-full h-full max-w-[700px] m-auto flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Farzan Hassan
          </h1>
          <h2 className="sm:text-3xl text-2xl flex pt-4 text-gray-800">
            I
            <TypeAnimation
              sequence={["can code in Js!", 1000, "like Coffee xD", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
