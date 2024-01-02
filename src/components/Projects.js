import '../App.css';





function Projects() {
  return (
    <div style={{display: "flex",flexDirection: "column", alignItems:"center", backgroundColor:"#EACFC4", padding:"50px" }}> 
      <h1>Projects</h1>
     { /* <Link to = "https://saskiavdz.github.io/Bhroman-travel/">Link to Github</Link> */}
      
         <div id="Projects" className='containerAbout' style={{display: "flex", justifyContent: "space-between",flexDirection: "row", alignItems: "baseline" }}>
         <a href="https://saskiavdz.github.io/Bhroman-travel/" target="_blank" rel="noopener" style={{backgroundColor: "#9CE5CA", borderRadius: "50%", height:"300px", width: "300px", textAlign:"center", lineHeight:"300px", margin:"20px"}}>Project 01</a>
             <a href="https://saskiavdz.github.io/expenseTracker/" target="_blank" rel="noopener" style={{backgroundColor: "#9CE5CA", borderRadius: "50%", height:"300px", width: "300px", textAlign:"center", lineHeight:"300px", margin:"20px"}}>Project 02</a>
             <a href="https://saskiavdz.github.io/GenesisPortfolio-lesson11/" target="_blank" rel="noopener" style={{backgroundColor: "#9CE5CA", borderRadius: "50%", height:"300px", width: "300px", textAlign:"center", lineHeight:"300px", margin:"20px"}}>Project 03</a>
            <a href="https://saskiavdz.github.io/form-lesson7/" target="_blank" rel="noopener" style={{backgroundColor: "#9CE5CA", borderRadius: "50%", height:"300px", width: "300px", textAlign:"center", lineHeight:"300px", margin:"20px"}}>Project 04</a>
        
            </div>
     </div>
  );
}

export default Projects;