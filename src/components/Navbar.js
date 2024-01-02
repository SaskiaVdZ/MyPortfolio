import '../App.css';
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar() {
  return (
      <div className='containerNavbar' style={{display: "flex", justifyContent: "space-between",flexDirection: "row",
      justifyContent: "space-between", alignItems: "baseline", margin:"0 auto", padding: "50px", backgroundColor:"#2463EB" }}> 
      <AnchorLink href="#About">
           About</AnchorLink>
      <AnchorLink href="#Projects">
          Projects</AnchorLink>
      <AnchorLink href="#Skills">
          Skills</AnchorLink>
      <AnchorLink href="#Contact">
          Contact</AnchorLink>
        </div>
  );
}

export default Navbar;