function Skills() {
  return (
    <div
      id="Skills"
      className="containerSkills"
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EACFC4",
        padding: "2rem",
        width: "100%",
        maxWidth: "1400px",
        minWidth: "320px",
      }}
    >
      <blockquote>
      <q>I am still learning</q> - Michelangelo</blockquote>
      <h1>Skills</h1>
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        <li>
          HTML5, CSS3, Sass, JavaScript, React, Figma, Bootstrap, Git/GitHub,
          Visual Studios Code, Programming techniques and Agile work
        </li>
        <li>Fluent in English, Swedish and Dutch</li>
        <li>Leadership, Mentoring and Education</li>
        <li>Photoshop, Illustrator, InDesign</li>
        <li>Google Suite</li>
        <li>Design thinking</li>
        <li>Graphic design</li>
      </ul>
    </div>
  );
}

export default Skills;
