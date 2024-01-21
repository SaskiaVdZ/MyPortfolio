import "../App.css";
import "./About.css";
import PortraitOne from "../images/PortraitOne.jpg";

function About() {
  return (
    <div id="About" className="containerAbout">
      <h1>Hi! My name is Saskia.</h1>
      <h2>
        {" "}
        I am a junior front-end developer who just finished a fulltime
        accelerated vocational course at Sundsgården folkhögskola:{" "}
        <a
          className="linkAbout"
          href="https://sundsgarden.se/utbildningar-kurser/langa-kurser/distanskurser/it-som-framtidsyrke/"
          target="_blank"
          rel="noreferrer"
        >
          IT - Front end Developer for women
        </a> and now enrolling a course in Flutter and Data Visualisation D3.js.
      </h2>
      <img
        className="imagePortrait"
        src={PortraitOne}
        style={{ borderRadius: "50%", height: "300px", width: "300px" }}
        alt={"Portrait"}
      />
      <p>
        I have 20 years experience as a design professional and have been
        working as a teacher and mentor for most of my life. I have a degree in
        both fine art and spatial design.
      </p>
      <p>
        I consider myself a life-long learner, always wanting to learn more, and
        a creative problem solver; I like to understand things and make things
        understandable by turning complex stuff into mini bite-size bits and
        steps. I’m dedicated, structured, analytical and curious. I’m hard
        working; I won't leave things alone until they are solved. I love to
        build and create things and I love to create meaning.
      </p>
      <p>
        I live in a small place called Sångshyttan, in Bergslagen, right in
        between Stockholm and Oslo. I moved from Amsterdam to Sweden
        approximately 20 years ago. In my spare time I like to read, write,
        draw, do yoga and walk in nature with my dog.
      </p>
    </div>
  );
}

export default About;
