import "../App.css";
import "./Navbar.css";

import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <div className="containerNavbar">
      <div className="nav">
        <AnchorLink className="linkNav" href="#About">
          About
        </AnchorLink>
        <AnchorLink href="#Projects">Projects</AnchorLink>
        <AnchorLink href="#Skills">Skills</AnchorLink>
        <AnchorLink href="#Experience">Experience</AnchorLink>
        <AnchorLink href="#Contact">Contact</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
