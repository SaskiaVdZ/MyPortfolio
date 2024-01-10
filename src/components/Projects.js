import "../App.css";
import Bhromaon from "../images/Bhromaon.png";
import Genesis from "../images/Genesis.png";
import ExpenseTracker from "../images/ExpenseTracker.png";
import Imaginarium2 from "../images/Imaginarium2.png";

function Projects() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EACFC4",
        padding: "50px",
      }}
    >
      <h1>Projects</h1>
      <div
        id="Projects"
        className="containerAbout"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "baseline",
        }}
      >
        <a
          href="https://saskiavdz.github.io/Bhroman-travel/"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: "url(" + Bhromaon + ")", 
            backgroundSize: "170%",
            borderRadius: "50%",
            height: "300px",
            width: "300px",
            textAlign: "center",
            lineHeight: "300px",
            margin: "20px",
            fontSize: "72px",
          }}
        > 
          01
        </a>
        <a
          href="https://saskiavdz.github.io/expenseTracker/"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: "url(" + ExpenseTracker + ")", 
            backgroundSize: "160%",
            borderRadius: "50%",
            height: "300px",
            width: "300px",
            textAlign: "center",
            lineHeight: "300px",
            margin: "20px",
            fontSize: "72px",
          }}
        >
          02
        </a>
        <a
          href="https://saskiavdz.github.io/GenesisPortfolio-lesson11/"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: "url(" + Genesis + ")", 
            backgroundSize: "150%",
            borderRadius: "50%",
            height: "300px",
            width: "300px",
            textAlign: "center",
            lineHeight: "300px",
            margin: "20px",
            fontSize: "72px",
          }}
        >
          03
        </a>
        <a
          href="https://saskiavdz.github.io/form-lesson7/"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: "url(" + Imaginarium2 + ")", 
            backgroundSize: "100%",
            borderRadius: "50%",
            height: "300px",
            width: "300px",
            textAlign: "center",
            lineHeight: "300px",
            margin: "20px",
            fontSize: "72px",
          }}
        >
          04
        </a>
      </div>
    </div>
  );
}

export default Projects;
