import "../App.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <div
      
    >
      <div className="containerNavbar"
      style={{
        display: "flex",
        flexWrap: "wrap",
        width:"100%",
        maxWidth:"1400px",
        minWidth: "320px",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "baseline",
        padding: "2rem 5rem",
        backgroundColor: "#2463EB",
        position: "sticky",
        top: "0",
      }}>
      <AnchorLink href="#About">About</AnchorLink>
      <AnchorLink href="#Projects">Projects</AnchorLink>
      <AnchorLink href="#Skills">Skills</AnchorLink>
      <AnchorLink href="#Experience">Experience</AnchorLink>
      <AnchorLink href="#Contact">Contact</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
