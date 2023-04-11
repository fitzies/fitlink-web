export default function Nav() {
  const items = ["Download"];

  return (
    <div className="w-screen h-[15%] px-16 py-5 flex justify-start items-center gap-4">
      <div className="mr-auto text-black font-inter text-md cursor-pointer p-2 font-bold">
        Fitlink
      </div>
      {items.map((item) => (
        <div
          className="text-gray-600 font-inter text-md cursor-pointer hover:text-black p-2 rounded-xl duration-150"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
