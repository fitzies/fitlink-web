export default function Button(props: {
  text?: string;
  type: "solid" | "hollow";
}) {
  if (props.type === "solid") {
    return (
      <div className="flex justify-center items-center lg:w-32 lg:h-11 bg-black rounded-2xl hover:-translate-y-1 duration-150 cursor-pointer lg:p-0 p-2">
        <h1 className="text-white font-inter font-bold lg:text-lg text-md">
          {props.text}
        </h1>
      </div>
    );
  } else if (props.type === "hollow") {
    return (
      <div className="flex justify-center items-center lg:w-40 lg:h-11 border-2 border-black rounded-2xl hover:-translate-y-1 duration-150 cursor-pointer lg:p-0 p-2">
        <h1 className="text-black font-inter lg:text-lg text-md">
          {props.text}
        </h1>
      </div>
    );
  }
  return <></>;
}
