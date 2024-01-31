import React, { useEffect, useState } from "react";
import "./Style.css";
import FoodData from "./FoodData";
import { Card } from "./Card";
import { SkeletonFeature } from "./SkeletonFeature";

export const searchBar = () => {
  const [fdata, setFdata] = useState(FoodData);

  const [copyData, setCopyData] = useState([]);

  //search fnction
  const changeData = (e) => {
    let getchangedata = e.toLowerCase();

    if (getchangedata === "") {
      setCopyData(fdata);
    } else {
      let storedData = copyData.filter((element, k) => {
        return element.rname.toLowerCase().match(getchangedata);
      });
      setCopyData(storedData);
    }
  };

  const zomatologo =
    "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

  useEffect(() => {
    setTimeout(() => {
      setCopyData(FoodData);
    }, 2000);
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <img src={zomatologo} alt="" className="logo" />
        </div>
        <div className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="search for restaurents , cuisine or a dish"
            onChange={(e) => changeData(e.target.value)}
          />
        </div>
        <div className="div">
          <p>SignUp</p>
          <p>Login</p>
        </div>
      </nav>
      <div className="text">Delivery Restaurants in Patna</div>
      <div className="card-section">
        
        {/* skeleton part */}

        {copyData && copyData.length ? (
          <Card data={copyData} />
        ) : (
          <SkeletonFeature sdata={fdata} />
        )}
      </div>
    </>
  );
};
