import "../App.css";
import "./Contact.css";

function Contact() {
  return (
    <div id="Contact" className="containerContact">
      <h1>Contact</h1>

      <div className="containerIcons">
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
      </div>
      <div>
        
        <p>Made with<i className="fa-solid fa-heart"></i>in React by Saskia</p>
      </div>
    </div>
  );
}

export default Contact;
