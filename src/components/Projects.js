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


      <div className="TextHolder"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "auto",
          width: "auto",
        }}
        >
          <div> <p className="ProjectDescription"
        style={{
          margin: "2rem",
          fontSize: "24px",
          fontWeight: "400",
          color: "darkblue",
          backgroundColor: "#f2e2db",
          borderRadius: "10px",
          padding: "2rem", 
          textAlign: "left",
          whiteSpace: "pre-wrap",
        }}
        
        >01 Bhromaon Travel
        This project focused on making a functioning website 
        that incorporated the basics of website development within a narrow timeline.
        Note: Fully responsive design.
        Built on: HTML, CSS, Sass, Figma
        
        more:
        The website was created from scratch based on a design in Figma. 
        It was to be fully responsive, have several images and sections 
        with content, and be completed within a narrow timelimit. 
        This was one of the more complex designs I have (at the time) created 
        and am happy with how the result turned out. 
        This project pushed me to think quickly and creatively 
        on how to solve the problem at hand: how do I create this large landing page 
        as complete as possible within my timelimit? 
        This was a good challange in finding a balance between getting the page to look good 
        and having the page be complete with all sections, information, and functionality.</p></div>
       </div>
       <div> <p className="ProjectDescription"
        style={{
          margin: "2rem",
          fontSize: "24px",
          fontWeight: "400",
          color: "darkblue",
          backgroundColor: "#f2e2db",
          borderRadius: "10px",
          padding: "2rem", 
          textAlign: "left",
          whiteSpace: "pre-wrap",
        }}
        
        >02 Javascript assignment - Expense Tracker App 
        an object called account that should hold all of our logic. a function called menu 
        that should display the different choices for the user and based on the users choice 
        show the correct method/property from the account object. In this assignment you should 
        create an expense tracker app that can keep track of your income, your expenses and also 
        calculate the summary and show your total balances. The app should have two main parts: 
        THE ACCOUNT OBJECT SHOULD HAVE THE FOLLOWING PROPERTIES: name: the account holders name, 
        should be a string expenses: an array that should hold all of your expenses, can be empty 
        from start income: an array that should hold all of your income, can be empty from start 
        addExpenses: a function that vill add an expense to the expenses array 
        addIncome: a function that vill add an income to the income array 
        listAllExpenses: a function that should list all the expenses in the expenses array 
        getSummary: a function that should summarize your total balances. 
        It should show your total income, your total expenses and also calculate your current balances. 
        The menu function should display the menu with different choices for the user depending on what 
        the user selects from the menu you should call on the correct method or property from the account object. 
        You can use a switch or if/else statement for your different menu choices. 
        Please motivate you choice in a comment. Remember to handle potential errors.
        A user should not be able to add an empty input or something that is not valid. 
        You do not need to do any CSS or HTML in this assignment, it should only contain JavaScript.
        </p></div>
      
        <div> <p className="ProjectDescription"
        style={{
          margin: "2rem",
          fontSize: "24px",
          fontWeight: "400",
          color: "darkblue",
          backgroundColor: "#f2e2db",
          borderRadius: "10px",
          padding: "2rem", 
          textAlign: "left",
          whiteSpace: "pre-wrap",
        }}
        
        >03 Genesis Portfolio
        This project focused on creating a layout for a portfolio of photographs and using Google Maps.
        Note: fully responsive design. Three-page website.
        Built on: HTML, CSS, Figma, Google Maps API
        
        more:
        The project was created from scratch based on a design in Figma. The project also links between three separate pages on the website. This project was good practice for making separate pages of a site look cohesive and how to use flexbox and grids in the most optimal ways in order for the site to look good on all screen sizes.
        </p></div>

       

       
    </div>
  );
}

export default Projects;
