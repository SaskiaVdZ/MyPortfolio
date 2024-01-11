function Skills() {
  return (
    <div
      id="Skills"
      className="containerSkills"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EACFC4",
        padding: "50px",
      }}
    >
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
      </ul>
    </div>
  );
}

export default Skills;
