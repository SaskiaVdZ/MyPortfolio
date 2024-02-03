import "../App.css";
import "./Projects.css";
import Genesis from "../images/Genesis.png";
import ExpenseTracker from "../images/ExpenseTracker.png";
import Imaginarium2 from "../images/Imaginarium2.png";

function Projects() {
  return (
    <div id="Projects" className="containerProjects">
      <h2>Projects</h2>
      <div className="containerProjectLinks">
        <a
          className="linkProject"
          href="https://saskiavdz.github.io/Imaginarium_video/"
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
          01
        </a>

        <a
          className="linkProject"
          href="https://saskiavdz.github.io/expenseTracker/"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: "url(" + ExpenseTracker + ")",
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
          02
        </a>
        <a
          className="linkProject"
          href="https://saskiavdz.github.io/GenesisPortfolio-lesson11/"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: "url(" + Genesis + ")",
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
          03
        </a>

        <a
          className="linkProject"
          href="https://saskiavdz.github.io/Bhroman-travel/"
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: "72px",
          }}
        >
          04
        </a>
      </div>

      <div className="containerProjectDescriptions">
        <div className="projectDescription">
          <h2>01 A game in React</h2>
          <p>
            This is a 'drag and drop building' game to spark your imagination. Become the
            Architect of your own imaginary world.
          </p>
          <p>
            It was built as the final front end project for the course
            Tech for women at Sundsgården. We started of by deciding on a
            functionality and then came up with a design. We then sketched
            the general user flow and set up the basic project structure and made a protype in Figma. After
            that we divided the different features among the members of the team
            to get started with the logic. The team hade weekly checkin meetings
            and communicated continuously on Slack and Github Projects.
          </p>
          <p>
            {" "}
            Features: Drag and drop using use-gesture Create account
            functionality, details stored in json-server Login authentication
            using global state, React Context userId and position of dragged
            elements saved in localStorage Global state updating userId from
            localStorage as long as the user id logged in, to avoid state being
            lost on refresh, Logout function clearing global state + userId from
            localStorage Reset button in game to return all elements to their
            respective starting position Axios React routes Private routes,
            require login, together with useParams hook React hooks useContect
            useState useParams useEffect useNavigate.
          </p>
          <p>
            My contribution: I made the building elements and the drag and
            drop function using the @use-gesture library. I also made the
            profile page and the display of the user details, I came up with the idea of the game, the name and the design and made a prototype in Figma.
          </p>
<p>Unfortunately is was not possible to deploy the project without losing the create account function, so I made a screen recording instead for now instead.</p>
          <p>
            This game was built by Diana Undén, Saskia van der Zanden, Maria
            Persson, Nadine Dawod and Mo Wei Wu.
          </p>
          <p>Built on: React Vite</p>
         
        </div>
        <div className="projectDescription">
          <h2>02 Expense Tracker App</h2>
          <p>
            An app that can keep track of your income, expenses and calculate
            the summary and show your total balance.
          </p>
          <p>Built on: Javascript only</p>
        </div>

        <div className="projectDescription">
          <h2>03 Genesis Portfolio</h2>
          <p>
            One of the first projects I did. Doing this assignment we learned how to use Sass, using variables and mixins and how to use flexbox and
            grids. A front end project for the Tech for women course at Sundsgården.
          </p>
          <p>Built on: HTML, CSS, Figma</p>
        </div>
        <div className="projectDescription">
          <h2>04 Bhromaon Travel</h2>
          <p>
            Another early project. A fully responsive site made within a narrow timeline as part of a test, based on a
            design in Figma. This was really good practice to stay calm under time pressure and just trying to get as much as possible done step by step. A front end project for the Tech for women course at Sundsgården.
          </p>
          <p>Built on: HTML, CSS, Sass, Figma</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
