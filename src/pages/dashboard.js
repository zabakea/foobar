import React, { useEffect, useState } from "react";
import Dash_Header from "../Dash_Header";
import Dash_Footer from "../Dash_Footer";
import Dash_Main from "../Dash_Main";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  });
  //state for themes
  const [theme, themeToggle] = useState(true);

  //fetching data

  const [queue, setQueue] = useState([]);
  const [beerTypes, setBeerTypes] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://pivobar.herokuapp.com/", { signal: signal })
      .then((res) => res.json())
      .then((data) => {
        setQueue(data);
      });

    return function cleaup() {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://pivobar.herokuapp.com/beertypes", { signal: signal })
      .then((res) => res.json())
      .then((data) => {
        setBeerTypes(data);
      });

    return function cleaup() {
      abortController.abort();
    };
  }, []);

  console.log(beerTypes, queue);

  return (
    <div className={`Dash_Grid_Container ${theme ? "Dark_Theme" : "Light_Theme"}`} style={{ overflow: "hidden" }}>
      <Dash_Header />
      <Dash_Main
        themeToggler={() => {
          themeToggle(!theme);
          console.log(theme);
        }}
        theme={theme}
        data={queue}
        beerTypes={beerTypes}
      />
      <Dash_Footer />
    </div>
  );
};
export default Dashboard;
