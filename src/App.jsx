import { useState } from "react";
import "./App.css";
import  {TransformNorthingEasting}  from "./components/transformation/TransformNorthingEasting";
import TransfromLatLong from "./components/transformation/TransfromLatLong";
import { Theme } from "./components/theme/Theme";
import { Button } from "./components/button/Button";
// import Map from "./components/leaflet/Map";

function App() {
  const [changeForm, setChangeForm] = useState(false);
  return (
    <main className="main px-2  md:text-xl">
      <Theme />
      {/* <Map latitude={latitude} longitude={longitude} /> */}
      <h1 className="title dark:text-white sm:text-4xl text-4xl my-[20px] font-bold mb-8">
        Datum Transformation
      </h1>
      <Button
        className="text-lg p-2 rounded  mb-8 dark:bg-[#d8d8c0] bg-[#d8d8c0] sm:text-xl"
        onClick={() => {
          setChangeForm(!changeForm);
        }}
      >
        Click to toggle transformation
      </Button>
      {changeForm ? <TransfromLatLong /> : <TransformNorthingEasting />}
    </main>
  );
}

export default App;
