// import { useState } from "react";
import Charts from "./Charts";
import Counter from "./Counter";
import ThemeToggle from "./ThemeToggle";
import TileQueue from "./TileQueue";
import TileServing from "./TileServing";

const DashMain = ({ themeToggler, theme, data, beerTypes }) => {
  if (data.length !== 0) {
    const mapQueue = data.queue.map((single) => {
      return <TileQueue key={single.id} id={single.id} order={single.order} />;
    });

    const mapServing = data.serving.map((single) => {
      const mapServer = data.bartenders.map((barnames) => {
        if (Object.values(barnames).includes(single.id)) {
          return barnames.name;
        }
      });

      return <TileServing key={single.id} id={single.id} order={single.order} name={mapServer} />;
    });

    return (
      <div className="Dash_Main">
        <div className="Dashboard_Content">
          <Charts serving={data.serving} />
          <div className="Waiting_Customers">{mapQueue}</div>
          <div className="Bartenders">{mapServing}</div>
          <Counter count={data.serving[0].order.length} />
        </div>

        <div className="Manager_Content">
          <ThemeToggle Click={themeToggler} theme={theme} />
        </div>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default DashMain;
