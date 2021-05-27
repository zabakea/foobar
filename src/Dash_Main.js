import { useState } from "react";
import Charts from "./Charts";
import Counter from "./Counter";
import ThemeToggle from "./ThemeToggle";

const DashMain = ({ themeToggler, theme, data, beerTypes }) => {


  if (data.length !== 0 && beerTypes.length !== 0) {

    // let count = data.queue[0].order.length;



    return (
      <div className="Dash_Main">
        <div className="Dashboard_Content">
          <Charts className="Charts" />
          <div className="Waiting_Customers">{data.bartenders[0].statusDetail}</div>
          <div className="Bartenders">bartenders</div>
          <Counter count={data.serving[0].order.length} />
        </div>


        <div className="Manager_Content">
          <ThemeToggle Click={themeToggler} theme={theme} />
        </div>

      </div>
    );
  } else {
    return (
      <p>Loading</p>
    )
  }


};




export default DashMain;
