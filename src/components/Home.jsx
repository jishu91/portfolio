import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-11  flex flex-col justify-center h-full ">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Jishu Kurmi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          I am a Full stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nihil
          autem eligendi necessitatibus dolorum aut quasi vero sunt iusto eius,
          maiores dolor, dolore libero voluptatem adipisci cumque consequuntur
          voluptatum accusantium?
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300 ">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
