import ThemeToggle from "./ThemeToggle";

const Dash_Main = ({ themeToggler, theme, data, beerTypes }) => {
  //

  function renderQueue() {
    return data.queue.map((single) => (
      <div className="Tile_Queue" key={single.id}>
        {single.id}
        {single.order}
      </div>
    ));
  }

  return (
    <div className="Dash_Main">
      <div className="Dashboard_Content">
        <div className="Charts">charts</div>
        <div className="Waiting_Customers">{data.length !== 0 ? renderQueue() : "loader"}</div>
        <div className="Bartenders">bartenders</div>
        <div className="Counter">counter</div>
      </div>
      <div className="Manager_Content">
        <ThemeToggle Click={themeToggler} theme={theme} />
      </div>
    </div>
  );
};

export default Dash_Main;
