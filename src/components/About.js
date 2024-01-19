import "../App.css";
import "./About.css";
import PortraitOne from "../images/PortraitOne.jpg";

function About() {
  return (
    <div
      id="About"
      className="containerAbout"
    >
        <h1>Hi! My name is Saskia.</h1> 
        <h2> I am currently studying to become a front-end
        developer at Sundsgården folkhögskola:{" "}
        <a className="linkAbout"
          href="https://sundsgarden.se/utbildningar-kurser/langa-kurser/distanskurser/it-som-framtidsyrke/"
          target="_blank"
          rel="noreferrer"
          
        >
          IT - Front end Developer for women
        </a>
        , a fulltime accelerated vocational course.
      </h2>
      <img
        className="imagePortrait"
        src={PortraitOne}
        style={{ borderRadius: "50%", height: "300px", width: "300px" }}
        alt={"Portrait"}
      />
      <p>
        I’m originally a designer, with a degree in both fine art and spatial
        design and have been working as a teacher for most of my life.
      </p>
      <p>
        I consider myself a life-long learner and a creative problem solver; I
        like to understand things and make things understandable by turning
        complex stuff into mini bite-size bits and steps. I’m structured,
        analytical, curious and dedicated. I’m hard working; I can’t leave
        things unsolved. I love to build and create things, I love to create
        meaning.
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
