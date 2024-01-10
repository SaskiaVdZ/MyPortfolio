import "../App.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <div
      className="containerNavbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "baseline",
        margin: "0 auto",
        padding: "2rem 5rem 2rem 5rem",
        backgroundColor: "#2463EB",
        position: "sticky",
        top: "0",
      }}
    >
      <AnchorLink href="#About">About</AnchorLink>
      <AnchorLink href="#Projects">Projects</AnchorLink>
      <AnchorLink href="#Skills">Skills</AnchorLink>
      <AnchorLink href="#Contact">Contact</AnchorLink>
    </div>
  );
}

export default Navbar;
