import { gridDataType } from "../types";
import gridData from "../lib/GridData.json";

import shareSvg from "../assets/share.svg";
import fireSvg from "../assets/fire.svg";
import exploreSvg from "../assets/explore.svg";
import personalizeSvg from "../assets/personalize.svg";
import trackSvg from "../assets/track.svg";
import competeSvg from "../assets/compete.svg";

export default function Grid() {
  const data: gridDataType[] = gridData.data as gridDataType[];

  const icons = {
    share: shareSvg,
    streaks: fireSvg,
    explore: exploreSvg,
    personalize: personalizeSvg,
    track: trackSvg,
    compete: competeSvg,
  };

  return (
    <div className="my-32 grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center items-center">
      {data.map((box) => (
        <div
          className="border-2 w-72 aspect-square rounded-xl hover:-translate-y-2 duration-300 cursor-pointer flex flex-col p-4"
          key={box.title}
        >
          <div className="w-full flex gap-2 px-1 py-2">
            <img src={icons[box.icon]} className="w-[13%]" />
            <h1 className="text-black font-inter font-bold text-2xl p-1">
              {box.title}
            </h1>
          </div>
          <p className="font-inter text-black py-3 px-1">{box.text}</p>
        </div>
      ))}
    </div>
  );
}
