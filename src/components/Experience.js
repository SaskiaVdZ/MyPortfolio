import "../App.css";

function Experience() {
  return (
    <div
      id="Experience"
      className="containerExperience"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EACFC4",
        padding: "10px",
        width: "100%",
        maxWidth: "1400px",
        minWidth: "320px",
      }}
    >
      <h1>Experience</h1>
      <div
        className="parent"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "space-around",
          listStyleType: "none",
          
        }}
      >
        <div className="child">
          <ul
            style={{
              listStyleType: "none",
            }}
          > <h2>Workexperience</h2>
            <li>Self-employed at FIK design courses</li>
            <li>2017 – now </li>
            <li>Preparatory interior architecture & design course online -link-</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>BOAB, Hällefors Bostads AB, Housing Association</li>
            <li>2019 – 2021</li>
            <li>Chairman</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>Pihlskolan, Hällefors</li>
            <li>2019 – 2020 </li>
            <li>Teacher SFI, Swedish for immigrants, Adult education</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>Pihlskolan, Hällefors</li>
            <li>2016 – 2019</li>
            <li>Teacher SVA, Swedish as a second language, High School</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>Hällefors Folkhögskola</li>
            <li>2008 – 2015 </li>
            <li>Head teacher, Interior Architecture & Design</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>Hällefors Folkhögskola</li>
            <li>2007 – 2008</li>
            <li>Teacher, Form & Design</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>Hoganord Studios</li>
            <li>2004 – 2009 </li>
            <li>Co-owner and designer, Graphic design & Web design</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>KUUB design studio, Amsterdam</li>
            <li>2001 – 2003 </li>
            <li>Co-owner and interior designer</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>De Architect, Dutch architecture magazine</li>
            <li>2001 – 2005</li>
            <li>Freelance writer</li>
          </ul>
        </div>

        <div className="child">
          <ul
            style={{
              listStyleType: "none",
            }}
          > <h2>Education</h2>
            <li>Sundsgården folkhögskola</li>
            <li>2023 </li>
            <li>Tech for Women, Front end development, Certification</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>freeCodeCamp</li>
            <li>2023</li>
            <li>Responsive Webdesign Developer Certification (300 hours) </li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>KBT Svealand AB Utbildningcenter för Kognitiv Beteendeterapi</li>
            <li>2021</li>
            <li>Introduction Course CBT, Cognitive Behavioral Therapy, Certification</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>Gerrit Rietveld Academy, Amsterdam, Netherlands</li>
            <li>1997 – 2001</li>
            <li>Bachelor's degree in Interior Architecture & Spatial Design, 240 credits, Cum Laude/With Honor</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>Royal Academy of Arts in The Hague, Netherlands</li>
            <li>1992 – 1996 </li>
            <li>Bachelor's degree in Free Arts, 240 credits</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>Linköping University, Sweden</li>
            <li>2010</li>
            <li>Folkhögskolan's idea and pedagogy</li>
          </ul>
          <ul style={{
              listStyleType: "none",
            }}>
            <li>Creative Coaching Association, USA</li>
            <li>2012</li>
            <li>Creative coaching training, 16 weeks, Certification</li>
          </ul>
            




        </div>
      </div>
    </div>
  );
}

export default Experience;
