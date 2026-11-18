import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

function FullPage() {
  const [obj, setObj] = useState();
  const [country, setCountry] = useState();
  const [coyntrys, setCountrys] = useState([]);

  async function fetchData(country = "tbilisi") {
    const url = `https://api.weatherapi.com/v1/current.json?key=9664bcac47dd493cb8d154542260511&q=${country}`;

    const response = await fetch(url);
    console.log(response);

    if (response.status === 200) {
      const data = await response.json();

      console.log(data);

      setObj(data);
    } else setObj();
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData(country);
  }, [country]);

  return (
    <>
      <MainContext.Provider
        value={[obj, obj?.current.temp_c, coyntrys, setCountrys]}
      >
        <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 relative overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-200">
          <Header setCountry={setCountry} />
          <Outlet />
          <Footer />
        </div>
      </MainContext.Provider>
    </>
  );
}

export default FullPage;
