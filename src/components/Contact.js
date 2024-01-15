import AnchorLink from "react-anchor-link-smooth-scroll";
import "../App.css";

function Contact() {
  return (
    <div
      id="Contact"
      className="containerContact"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EACFC4",
        padding: "50px",
        width: "100%",
        maxWidth: "1400px",
        minWidth: "320px",
      }}
    >
      <h1>Contact</h1>

      <div
        className="containerIcons"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "2rem",
        }}
      >
        <a href="https://github.com/SaskiaVdZ" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/saskia-van-der-zanden-2b036b72/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <AnchorLink
          href="https://github.com/SaskiaVdZ"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </AnchorLink>
      </div>
      <div><i className="fa-solid fa-heart" style={{ color: "#9ce5ca" }}></i><h3>Made in React by me</h3></div>
     
    </div>
  );
}

export default Contact;
