import "../App.css";
import "./Contact.css";

function Contact() {
  return (
    <div id="Contact" className="containerContact">
      <h2 className="textContact">Contact me at</h2>

      <div className="containerIcons">
        <a
          href="https://github.com/SaskiaVdZ"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Github"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/saskia-van-der-zanden-2b036b72/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div><p className="emailadress">my-whole-name-without-dots @gmail.com</p></div>
      <div>
        <p className="textFooter">
          Made with<i className="fa-solid fa-heart"></i>in React by Saskia van der Zanden
        </p>
      </div>
    </div>
  );
}

export default Contact;
