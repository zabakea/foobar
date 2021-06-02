import Images from "./images/index";

const DashHeader = ({ display, data }) => {
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
      <div className="Dash_Header">
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Mowintime") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[5]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Mowintime</p>
              {displayStock("Mowintime")}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Row 26") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[6]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Row 26</p>
              Keg level:{displayStock("Row 26")}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Ruined Childhood") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[7]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Ruined Childhood</p>
              {displayStock("Ruined Childhood")}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Sleighride") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[8]]} alt="" />
          {display ? (
            <div className="Stock_Text">
              <p>Sleighride</p>
              {displayStock("Sleighride")}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`Image_Box`}>
          <img className={`${display ? "Stock" : ""} ${displayStock("Steampunk") === "finished!" ? `Unavail` : ""}`} src={Images[Object.keys(Images)[9]]} alt="" />
          {display ? (
            <div className={`Stock_Text`}>
              <p>Steampunk</p>
              {displayStock("Steampunk")}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return "";
  }
};
export default DashHeader;
