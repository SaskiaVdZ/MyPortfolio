import SubtractOne from "../images/SubtractOne.svg";
import SubtractTwo from "../images/Subtract.Two.svg";
import SubtractThree from "../images/Subtract.Three.svg";
import UnionFour from "../images/UnionFour.svg";
import SubtractFour from "../images/SubtractFour.svg";
import "../App.css";
import "./Header.css";

function Header() {
  return (
    <header
      className="containerHeader"
      
    >
      <img
        src={SubtractOne}
        className="elementOne"
        style={{ height: "200px" }}
        alt="logo"
      />
      <img
        src={SubtractTwo}
        className="elementTwo"
        style={{ height: "200px" }}
        alt="logo"
      />
      <img
        src={SubtractThree}
        className="elementThree"
        style={{ height: "200px" }}
        alt="logo"
      />
      <img
        src={SubtractFour}
        className="elementFour"
        style={{ height: "200px"}}
        alt="logo"
      />
      <img
        src={UnionFour}
        className="elementFive"
        style={{ height: "200px" }}
        alt="logo"
      />
    </header>
  );
}

export default Header;
