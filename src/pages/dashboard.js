import React, { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle";
import Dash_Header from "../Dash_Header";
import Dash_Footer from "../Dash_Footer";
import Dash_Main from "../Dash_Main";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  });

  const [theme, themeToggle] = useState(true);

  return (
    <div className={`Dash_Grid_Container ${theme ? "Dark_Theme" : "Light_Theme"}`} style={{ overflow: "hidden" }}>
      <Dash_Header />
      <Dash_Main
        themeToggler={() => {
          themeToggle(!theme);
          console.log(theme);
        }}
        theme={theme}
      />
      <Dash_Footer />
    </div>
  );
};
export default Dashboard;
