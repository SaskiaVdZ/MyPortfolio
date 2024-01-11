import GithubIcon from "../images/github-fill.svg";
import LinkedInIcon from "../images/linkedin-box-fill.svg";
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
      }}
    >
      <h1>Contact</h1>
      <div className="containerIcons"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <a href="https://github.com/SaskiaVdZ"
          target="_blank"
          rel="noreferrer"
          ><img src= {GithubIcon} alt="Github Icon"/></a>
      <a href="https://www.linkedin.com/in/saskia-van-der-zanden-2b036b72/"
          target="_blank"
          rel="noreferrer"
          ><img src= {LinkedInIcon} alt="LinkedIn Icon"/></a>
      </div>

      


    </div>
  );
}

export default Contact;
