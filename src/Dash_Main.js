import Charts from "./Charts";
import Counter from "./Counter";
import ThemeToggle from "./ThemeToggle";
import TileQueue from "./TileQueue";
import TileServing from "./TileServing";
import TileBartenders from "./TileBartenders";
import ChartsManager from "./ChartsManager";
// import { useState } from "react";

const DashMain = ({ themeToggler, theme, data, beerTypes, display, displayToggle }) => {
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

    const mapWorkers = data.bartenders.map((workers) => {
      return <TileBartenders key={workers.id} name={workers.name} status={workers.status} detail={workers.statusDetail} tap={workers.usingTap} />;
    });


    return (
      <div className="Dash_Main">
        <button className="Manager_Button" onClick={displayToggle}>
          Managers Panel
            </button>
        <div className="Dashboard_Content">
          <Charts serving={data.serving} />
          <div className="Waiting_Customers">{mapQueue}</div>
          <div className="Bartenders">{mapServing}</div>
          <Counter count={data.serving[0] === undefined ? 0 : data.serving[0].order.length} />
        </div>




        <div className={`Manager_Content ${display ? "" : "Display_None"}`}>
          <ChartsManager serving={data.serving} />
          <div className="Manager_Workers">{mapWorkers}</div>
          <div className="Manager_Revenue">beers sold + revenuesome other statistics </div>

          <ThemeToggle Click={themeToggler} theme={theme} />
        </div>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default DashMain;
