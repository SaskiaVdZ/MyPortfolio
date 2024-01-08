import '../App.css';
import PortraitOne from '../images/PortraitOne.jpg';

function About() {
  return (
      <div id="About" className='containerAbout' style={{display: "flex",flexDirection: "column", alignItems:"center", backgroundColor:"#EACFC4", padding:"50px" }}> 
      <h1>Hi! My name is Saskia, and I am currently studying to become a front-end developer at Sundsgården folkhögskola: <a href="https://sundsgarden.se/utbildningar-kurser/langa-kurser/distanskurser/it-som-framtidsyrke/" target="_blank" style={{color: 'darkblue', textDecoration: 'none'}}>IT - Front end Developer for women</a>, a fulltime accelerated vocational course.</h1>
      <img src={ PortraitOne } style={{borderRadius: "50%", height:"300px", width: "300px"}} />
      <h1>I’m originally a designer, with a degree in both fine art and spatial design and have been working as a teacher most of my life (på gymnasiet, folkhögskolan, SFI och kurser i egen regi mm).</h1>
      <h1>I consider myself a life-long learner and a creative problem solver; I like to understand things and make things understandable by turning complex stuff into mini bite-size bits and steps. I’m structured, analytical, curious and dedicated. I’m hard working; I can’t leave things unsolved. I love to build and create things, I love to create meaning.</h1>
      <h1>I live in a small place called Sångshyttan, in Bergslagen, right in between Stockholm and Oslo. I moved from Amsterdam to Sweden approximately 20 years ago because I wanted to get out of the rat-race and live in the woods instead of city, in a progressive country. In my spare time I like to read, write, draw and walk in nature with my dog.</h1>
        </div>
  );
}

export default About;