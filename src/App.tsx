import Button from "./components/Button";
import Grid from "./components/Grid";

export default function App() {
  return (
    <div className="w-screen flex flex-col justify-center items-center p-8">
      <div className="flex items-center mt-20">
        <div className="lg:w-2/3 w-full lg:ml-32 flex flex-col items-center">
          <h1 className="text-black font-inter font-bold lg:text-7xl text-3xl text-start">
            Join the new fitness revolution online
          </h1>
          <p className="text-black font-inter py-4 lg:ml-2 lg:text-lg text-sm">
            Set your fitness goals, share your progress, and achieve your
            fitness dreams together with other gym enthusiasts.
          </p>
          <div className="flex justify-start items-center w-full px-1 py-3 gap-4">
            <Button text="Sign up" type="solid" />
            <Button text="Learn more" type="hollow" />
          </div>
        </div>
      </div>
      <Grid />
    </div>
  );
}