import whiteFrame from "../images/whiteFrame.png";
import pillarGreen from "../images/pillarGreen.png";
import pinkFrame from "../images/pinkFrame.png";
import whitePillar from "../images/whitePillar.png";
import stairsLong from "../images/stairsLong.png";
import "../App.css";
import "./Header.css";

function Header() {
  return (
    <header
      className="containerHeader"
      
    >
      <img
        src={whiteFrame}
        className="elementOne"
        style={{ height: "200px" }}
        alt="logo"
      />
      <img
        src={pillarGreen}
        className="elementTwo"
        style={{ height: "200px" }}
        alt="logo"
      />
      <img
        src={pinkFrame}
        className="elementThree"
        style={{ height: "200px" }}
        alt="logo"
      />
      <img
        src={whitePillar}
        className="elementFour"
        style={{ height: "200px"}}
        alt="logo"
      />
      <img
        src={stairsLong}
        className="elementFive"
        style={{ height: "200px" }}
        alt="logo"
      />
    </header>
  );
}

export default Header;
