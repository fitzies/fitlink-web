import { useState } from "react";
import { addRow, addToast } from "../lib/helper";
import "react-toastify/dist/ReactToastify.css";

export default function Popup(props: { close: Function }) {
  const handleChildClick = (e: any) => {
    e.stopPropagation();
  };

  const [email, setEmail] = useState<string>("");

  const submitSignUp = () => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if (isValidEmail) {
      addRow(email);
      addToast("Thank you for waitlisting", "success");
      props.close();
    } else {
      addToast("Please make sure your email is correct", "error");
    }
  };

  return (
    <div
      className="w-screen h-screen bg-[rgba(0,0,0,0.7)] fixed inset-0 flex justify-center items-center"
      onClick={() => props.close()}
    >
      <div
        className="lg:w-[40%] w-3/4 bg-white rounded-lg flex flex-col p-6 gap-2"
        onClick={handleChildClick}
      >
        <h1 className="font-inter font-bold text-2xl mb-2 ml-1">
          Join the Waitlist
        </h1>
        <p className="font-inter ml-1">Your email</p>
        <input
          className="border w-full py-1 px-2 rounded-lg font-inter outline-none"
          placeholder="user@email.com"
          value={email}
          onChange={(e) => setEmail(() => e.target.value)}
        />
        <div
          className="w-1/3 lg:w-1/4 py-1 lg:text-md bg-black mt-3 rounded-lg cursor-pointer text-white font-inter flex justify-center items-center"
          onClick={submitSignUp}
        >
          Join
        </div>
      </div>
    </div>
  );
}
