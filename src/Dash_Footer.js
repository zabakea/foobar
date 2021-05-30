import Images from "./images/index";

const DashFooter = ({ display, data }) => {
  if (data.length !== 0) {
    const level = data.taps.map((single) => {
      return single;
    });

    function displayStock(string) {
      var found = level.find((name) => name.beer === string);
      if (found) {
        console.log(found.beer + " found");
        return found.level + "/2500";
      } else {
        console.log(string + " not found");
        return "finished!";
      }
    }

    return (
      <div className="Dash_Footer">
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("El Hefe") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[0]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>El Hefe</p>
              {displayStock("El Hefe")}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Fairy Tale Ale") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[1]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Fairy Tale Ale</p>
              {displayStock("Fairy Tale Ale")}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("GitHop") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[2]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>GitHop</p>
              {displayStock("GitHop")}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Hollaback Lager") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[3]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Hollaback Lager</p>
              {displayStock("Hollaback Lager")}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Hoppily Ever After") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[4]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Hoppily Ever After</p>
              {displayStock("Hoppily Ever After")}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};
export default DashFooter;

// {`Dash_Grid_Container ${theme ? "Dark_Theme" : "Light_Theme"}`} style={{ overflow: "hidden" }}
