import "../App.css";
import "./About.css";
import PortraitOne from "../images/PortraitOne.jpg";

function About() {
  return (
    <div id="About" className="containerAbout">
      <h1>Hi! My name is Saskia.</h1>
      <h2>
        {" "}
        I am a curious junior front-end developer who just finished a full-time
        accelerated vocational course at Sundsgården folkhögskola:{" "}
        <a
          className="linkAbout"
          href="https://sundsgarden.se/utbildningar-kurser/langa-kurser/distanskurser/it-som-framtidsyrke/"
          target="_blank"
          rel="noreferrer"
        >
          IT - Front end Developer for women.
        </a> I&#39;m currently learning Javascript and React and studying Flutter at The App brewery and Data Visualisation D3.js at the New York University.
      </h2>
      <img
        className="imagePortrait"
        src={PortraitOne}
        style={{ borderRadius: "50%", height: "300px", width: "300px" }}
        alt={"Portrait"}
      />
      <p>
        I am an experienced design professional with more than 20 years of teaching and mentoring experience and a degree in
        both fine art and spatial design.
      </p>
      <p>
        I consider myself a life-long learner, always hungry to study and learn more. I&#39;m
        a creative problem solver and I like to make things
        understandable by turning complex stuff into mini bite-size bits and
        steps. I&#39;m dedicated, structured, analytical, curious and not afraid to ask questions. I&#39;m hard
        working; I won't leave things alone until they are solved. I love to
        build and create in general but I especially love to create meaning and value.
      </p>
      <p>
        I live in a small place called Sångshyttan, in Bergslagen, right in
        between Stockholm and Oslo. I moved from Amsterdam to Sweden
        approximately 20 years ago. In my spare time I like to read, write,
        draw, do yoga and walk with my dog.
      </p>
    </div>
  );
}

export default About;
