import { useState } from "react";
import Button from "./components/Button";
import Grid from "./components/Grid";
import Popup from "./components/Popup";

export default function App() {
  const [signUpPopup, setSignUpPopup] = useState<boolean>(false);

  return (
    <div className="w-screen flex flex-col justify-center items-center p-8">
      {signUpPopup ? <Popup close={() => setSignUpPopup((e) => !e)} /> : null}
      <div className="flex items-center lg:mt-20 mt-14">
        <div className="lg:w-2/3 w-full lg:ml-32 flex flex-col items-center">
          <h1 className="text-black font-inter font-bold lg:text-7xl text-5xl text-start">
            Join the new fitness revolution online
          </h1>
          <p className="text-black font-inter py-4 lg:ml-2 lg:text-lg text-md">
            Set your fitness goals, share your progress, and achieve your
            fitness dreams together with other gym enthusiasts.
          </p>
          <div className="flex justify-start items-center w-full px-1 py-3 gap-4">
            <Button
              text="Waitlist"
              type="solid"
              onClick={() => setSignUpPopup((e) => !e)}
            />
            <Button text="Learn more" type="hollow" onClick={print} />
          </div>
        </div>
      </div>
      <Grid />
    </div>
  );
}
