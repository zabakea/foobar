// import { useState } from "react";
import Charts from "./Charts";
import Counter from "./Counter";
import ThemeToggle from "./ThemeToggle";


const DashMain = ({ themeToggler, theme, data, beerTypes }) => {


  if (data.length !== 0 && beerTypes.length !== 0) {

    const mapQueue = data.queue.map((single) => {
      return (
        <div className="Tile_Queue" key={single.id}>
          {single.id}
          {single.order}
        </div>
      )

    });

    console.log(mapQueue);


    return (
      <div className="Dash_Main">
        <div className="Dashboard_Content">
          <Charts serving={data.serving} />
          <div className="Waiting_Customers">{mapQueue}</div>
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

