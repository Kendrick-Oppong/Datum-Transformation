import * as utm from "utm";
import { useRef, useState } from "react";
import { Button } from "../button/Button";
import { CopyResults } from "../button/CopyResults";
import NorthinEastinMap from "../leaflet/NorthinEastinMap";

export const TransformNorthingEasting = () => {
  const [northings, setNorthings] = useState("");
  const [eastings, setEastings] = useState("");
  const [innerHtml, setInnerHtml] = useState("");
  const results = useRef();
  const handleNorthingEasting = (e) => {
    e.preventDefault();
    const north = parseInt(northings);
    const east = parseInt(eastings);

    if (isNaN(north) || isNaN(east)) {
      // Handle invalid input
      return;
    }

    const coords = utm.toLatLon(east, north, 30, "N");
    const { latitude, longitude } = coords;
    results.current.innerHTML = `Transformed coordinates(latitude, longitude): ${latitude}  ,  ${longitude}`;
    setInnerHtml(results.current.innerHTML);
    document.querySelector(".result-button").style.display = "unset";
    document.querySelector(".unhide").style.display = "unset";
  };

  return (
    <>
      <form className="form" onSubmit={handleNorthingEasting}>
        <fieldset className="fieldset dark:border-white">
          <legend className="legend">Northing and Easting</legend>
          <div>
            <label className="label dark:text-white" htmlFor="northings">
              Northings:
            </label>
            <input
              className="input sm:placeholder:text-xl sm:text-xl sm:ml-[2%]"
              type="number"
              value={northings}
              id="northings"
              required
              placeholder="Enter Northing"
              onChange={(e) => setNorthings(e.target.value)}
            />
          </div>
          <div>
            <label className="label  dark:text-white" htmlFor="eastings">
              Eastings:
            </label>
            <input
              className="input sm:placeholder:text-xl sm:text-xl sm:ml-[2%]"
              type="number"
              value={eastings}
              id="eastings"
              required
              placeholder="Enter Easting"
              onChange={(e) => setEastings(e.target.value)}
            />
          </div>
          <Button
            className="cta btn  dark:hover:bg-slate-200 dark:bg-[#514d4bfc] sm:text-xl"
          >
            Convert
          </Button>
        </fieldset>
        <div className="font-bold mt-10">
          <h3 id="copyText" ref={results} className="dark:text-white unhide">
            Transformed coordinates(latitude, longitude): 5.774 , 6.48884
          </h3>
        </div>
        <Button
          hidden
          className="result-button dark:text-white dark:border-slate-200"
          onClick={CopyResults}
        >
          Copy to clipboard
        </Button>
      </form>

      <NorthinEastinMap
        northings={northings}
        eastings={eastings}
        innerHtml={innerHtml}
      />
    </>
  );
};
