import React from "react";
//import plane from "../assets/image/blogs and blogdetail/plane";
import plane from "../assets/image/blogs and blogdetail/plane.png";
import family from "../assets/image/blogs and blogdetail/family.png";

const blogs = () => {
  return (
    <div className="mb-[178px]">
      <img src={plane} alt="Airplane" className="w-full h-auto mb-[178px]" />
      <div className="mx-4 sm:mx-16">
        <h2 className="text-2xl sm:text-4xl font-semibold">Tips & Article</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-10 pb-16">
          <p className="leading-6 sm:leading-8 text-faded-color text-base sm:text-lg w-full sm:w-1/2 mb-4 sm:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-full text-sm">
            View more
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex gap-6 flex-col w-full sm:w-1/2">
            <div className="flex-grow bg-white rounded-lg shadow-lg pt-4 pr-4 pb-8 pl-6">
              <p className="font-normal text-lg">Perfect | Tips</p>
              <h4 className="text-xl font-medium text-2xl leading-tight">
                9 Popular Travel Destinations on Sale in 2022
                <br />-
              </h4>
              <p className="leading-6 text-faded-color text-base mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <button className="bg-black text-white py-2 px-4 rounded-full text-sm">
                Read More
              </button>
            </div>
            <div className="flex-grow bg-white rounded-lg shadow-lg pt-4 pr-4 pb-8 pl-6">
              <p className="font-normal text-lg">Tips | Travel</p>
              <h4 className="text-xl font-medium text-2xl leading-tight">
                How Are We Going to Travel in 2022
                <br />-
              </h4>
              <p className="leading-6 text-faded-color text-base mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <button className="bg-black text-white py-2 px-4 rounded-full text-sm">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 shadow-lg rounded-lg overflow-hidden">
            <img
              src={family}
              alt="Family"
              className="w-full h-[400px] object-cover"
            />
            <div className="flex-grow pt-4 pr-4 pb-8 pl-6">
              <p className="font-normal text-lg">Stories | Tips</p>
              <h4 className="text-xl font-medium text-2xl leading-tight">
                Travel Stories For Now and the Future
              </h4>
              <p className="leading-6 text-faded-color text-base mb-6 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <button className="bg-black text-white py-2 px-4 rounded-full text-sm">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogs;
