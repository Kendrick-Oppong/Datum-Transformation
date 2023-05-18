import * as utm from "utm";
import { useRef, useState } from "react";
import { Button } from "../button/Button";
import LatLongMap from "../leaflet/LatLongMap";
import { CopyResults } from "../button/CopyResults";



function TransfromLatLong() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const results = useRef();

  const handleTransfromLatLong = (e) => {
    e.preventDefault();
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lon)) {
      alert("Invalid latitude or longitude, Enter an integer");
    }

    const coords = utm.fromLatLon(lat, lon);
    const { easting, northing } = coords;

    const zoneNum = Math.floor((lon + 180) / 6) + 1;

    results.current.innerHTML = ` 
        Transformed coordinates(Easting, Northing): ${easting} , ${northing}  zone ${zoneNum}`;

    document.querySelector(".result-button").style.display = "unset";
  };

  return (
    <>
      <form onSubmit={handleTransfromLatLong}>
        <fieldset className="fieldset dark:border-white">
          <legend className="legend">Latitude and Longitude</legend>
          <div>
            <label className="label  dark:text-white " htmlFor="latitude">
              Latitude:
            </label>
            <input
              className="input sm:placeholder:text-xl sm:text-xl sm:ml-[2%]"
              type="number"
              value={latitude}
              id="latitude"
              placeholder="Enter latitude"
              required
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>
          <div>
            <label className="label  dark:text-white" htmlFor="longitude">
              Longitude:
            </label>
            <input
              className="input sm:placeholder:text-xl sm:text-xl sm:ml-[2%]"
              type="number"
              value={longitude}
              id="longitude"
              required
              placeholder="Enter longitude"
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          <Button className="cta btn  dark:hover:bg-slate-200 dark:bg-[#514d4bfc] sm:text-xl" >
            Convert
          </Button>
        </fieldset>
        <div className="font-bold mx-30">
          <h3 id="copyText" ref={results} className="dark:text-white"></h3>
        </div>

        <Button
          hidden
          className="result-button dark:text-white dark:border-slate-200"
          onClick={CopyResults}
        >
          Copy to clipboard
        </Button>
      </form>

      {<LatLongMap latitude={latitude} longitude={longitude} />}
    </>
  );
}

export default TransfromLatLong;


