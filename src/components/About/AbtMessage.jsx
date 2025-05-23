import React from "react";
import abtImage from "../../assets/image/about/abtImg.png";
import { FaQuoteLeft } from "react-icons/fa";

function AbtMessage() {
  return (
    <div className=" p-12 w-full min-h-[549px] gap-2  flex flex-col items-center md:flex-row justify-between">
      <div className=" w-full h-[549px]  md:w-[45%]">
        <img className=" w-full h-full" src={abtImage} />
      </div>
      <div className=" flex flex-col gap-12 justify-between  md:w-[45%]">
        <div>
          <FaQuoteLeft className="size-20" />
        </div>
        <div className=" flex gap-12 flex-col">
          <p className="  text-[#484848]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            porttitor sapien et urna tincidunt fringilla. Vivamus at augue
            interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna.
            Suspendisse suscipit est et neque.
          </p>
          <p className=" text-[#484848]">
            Mauris tempor tellus ante, ut fermentum erat gravida vel. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aenean nec justo dui. Ut et consequat dui, a
            malesuada ipsum. Pellentesque nec turpis viverra, blandit mi a,
            accumsan justo.
          </p>
        </div>
        <div>
          <p className=" font-semibold text-4xl">Siti Sarah</p>
          <p>Founder Travosca</p>
        </div>
      </div>
    </div>
  );
}

export default AbtMessage;
