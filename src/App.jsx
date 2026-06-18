import "./index.css";
import pfp from "./assets/profile.png";

const certifications = [
  {
    date: "2026.04",
    title: "Data Science Essentials With Python | Cisco.",
    link: "https://www.credly.com/badges/e57c4d1e-bbc0-4c8d-961d-3d2bcf7e8861/linked_in_profile",
  },
  {
    date: "2026.04",
    title: "Introduction to Data Science | Cisco.",
    link: "https://www.credly.com/badges/128533d3-e501-40de-a8c4-ee093cda89de/linked_in_profile",
  },
  {
    date: "2026.04",
    title: "Advanced Commands in Linux | Coursera.",
    link: "https://www.coursera.org/account/accomplishments/records/Z4I9TADMX65N",
  },
  {
    date: "2025.07",
    title: "Web Fundamentals | TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-NUKGQIW0QM.pdf",
  },
  {
    date: "2025.05",
    title: "Data Analytics Essentials | Cisco.",
    link: "https://www.credly.com/badges/128533d3-e501-40de-a8c4-ee093cda89de/linked_in_profile",
  },
  {
    date: "2025.03",
    title: "Introduction To Cybersecurity | Cisco.",
    link: "https://www.credly.com/badges/c5770ab8-c04b-4973-a67d-b3a629ce936a/linked_in_profile",
  },
  {
    date: "2025.02",
    title: "Cyber Threat Management | Cisco.",
    link: "https://www.credly.com/badges/421acdac-e795-4bdd-aebc-b76190cf966b/linked_in_profile",
  },
  {
    date: "2025.02",
    title: "Operating System Basics | Cisco.",
    link: "https://www.credly.com/badges/7ffa8e08-39c0-4b9a-b03c-b7fe157f2afc/linked_in_profile",
  },
  {
    date: "2025.01",
    title: "Computer Hardware Basics | Cisco.",
    link: "https://www.credly.com/badges/321a5af9-4884-44b5-9bb7-864339a78edf/linked_in_profile",
  },
  {
    date: "2025.01",
    title: "Microsoft Office Specialist: Word Associate | Microsoft.",
    link: "https://www.credly.com/badges/21b3973a-7323-42ce-b9f6-5096f9242e2c/linked_in_profile",
  },
  {
    date: "2024.10",
    title: "Pre Security Certificate | TryHackMe.",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ZE1A1GFPC2.pdf",
  },
];

const competitions = [
  {
    date: "2026.6",
    title: "AI4AI Vibe Coding Competition",
    achievements: ["2nd Runner Up"],
  },
    {
    date: "2026.6",
    title: "Kyokugen Capture The Flag",
    achievements: ["3nd Place"],
  },
  {
    date: "2026.5",
    title: "P2A ASEAN AI Hackathon | Smart City Track",
    achievements: ["16th Place"],
  },
  {
    date: "2025.12",
    title: "Hack4Gov Season 4 | DICT.",
    achievements: ["2nd Runner up"],
  },
  {
    date: "2025.12",
    title: "MayoralHackathon Naga City",
    achievements: [
      "Placed semi-finals with entry of NagaMatch in Social Services",
    ],
  },
  {
    date: "2025.10",
    title: "Sparklab Hackathon",
    achievements: ["Participant"],
  },
  {
    date: "2025.08",
    title: "AJCCBC Open Capture the Flag International Competition",
    achievements: [
      "231st placement out of 946 individual participants (international)",
    ],
  },
  {
    date: "2025.08",
    title: "Trend Micro Preliminary Contest: 2025 University Capture the Flag",
    achievements: [
      "Ranked 41, 82, and 122 out of 199 universities in the Philippines (led 3 teams)",
    ],
  },
  {
    date: "2025.08",
    title: "SEEN Capture the Flag Competition with CyberPH",
    achievements: [
      "Ranked 6th out of 26 participating teams (Co-hosted by Google Developer Groups on Campus PUP)",
    ],
  },
  {
    date: "2025",
    title: "Idea2Startup+ Bloomberg Challenge",
    achievements: [
      "Participated in Naga City with the entry of ResQR (Flood Warning System)",
    ],
  },
  {
    date: "2024.09",
    title: "Hack4Gov Season 3 | DICT.",
    achievements: ["5th Place Overall"],
  },
];

const projects = [
  {
    title: "Research Hub, Web Capstone Project",
    description: "A research repository for Ama Computer Learning Center",
    details: [
      "Designed system architecture and database schema MySQL",
      "Developed with Vanilla PHP, JS, and HTML/CSS",
      "Used Git for version control",
    ],
  },
  {
    title: "Water Depth Logging System, IOT Project",
    description:
      "Disaster Preparedness for Naga City School of Arts and Trades",
    details: [
      "Developed using c++",
      "Designed everything from scratch (Wirings, Code, etc.)",
      "Used Git for version control",
    ],
  },
  {
    title: "Phishing Detector Model, Intermediate Programming Final Project",
    description:
      "Cybersecurity-focused machine learning model for phishing URL detection",
    details: [
      "Performed feature selection and data preprocessing using correlation analysis",
      "Trained with Random Forest model. Saved trained model and scaler using pickle for real-world deployment",
      "Used Git for version control",
    ],
  },
];

const education = [
  {
    date: "Aug 2024 - Present",
    school: "Naga College Foundation, Naga City ",
    degree: "BS Computer Science",
    details: ["Founder of CyberDevs - NCF"],
  },
  {
    date: "Aug 2022 - June 2024",
    school: "ACLC, Naga City",
    degree: "TVL-Programming",
    details: [
      "With Honors",
      "Computer Technology Club officer",
      "Workshop Speaker, Introduction to Programming with Python",
    ],
  },
];

const skills = [
  ["Programming Languages", "Javascript/HTML/CSS, Python, PHP, C/C++, Lua"],
  [
    "Frameworks | Libraries",
    "ExpressJS, NestJS, ReactJS, Django, Flask, FastAPI, Pandas, Numpy, Scikit Learn, PyTorch",
  ],
  [
    "Tools",
    "Git/GitHub, Postman, VsCode, Jetbrains IDE, JupyterLab, Metasploit Framework, GoBuster, BurpSuite, SQLmap, Arduino, RaspberryPi, Google Collab, Neovim",
  ],
  ["OS", "Linux(Mint, Arch, Fedora, Ubuntu, Debian), Windows"],
  ["Databases", "PostgreSQL, MongoDB, MySQL"],
  [
    "Other Skills",
    "Adaptive Learner, Computer Literate, Fast Learner, Logical, Analytical, Critical Thinking, Leadership",
  ],
];

const experiences = [
  {
    date: "2026.05 - Present",
    role: "Co-Founder & CTO | Agile Systems",
  },
  {
    date: "Aug 2025 – Present",
    role: "Founder & CEO | CyberDevs",
    details: [
      "Leading a student-driven tech community focused on cybersecurity, software development, and open-source collaboration.",
      "Organizing knowledge-sharing sessions, mentorship programs, and hands-on technical challenges.",
    ],
  },
  {
    date: "Aug 2025",
    role: "Cyber Threat Intelligence & Incident Response",
    details: [
      "Conducted dark web investigation to locate and verify leaked school data following a security incident.",
      "Reported findings to the dean and supported the school’s incident response efforts.",
      "Provided insights to improve institutional cybersecurity awareness.",
    ],
  },
  {
    date: "Jan 2025 - Present",
    role: "Part Time Software Developer | MapaKode",
    details: [
      "Built and deployed custom web applications with modern frontend and backend technologies.",
      "Collaborated with clients to deliver secure, scalable, and user-friendly solutions.",
    ],
  },
  {
    date: "Jan 2025 - Present",
    role: "Programming Tutor",
    details: [
      "Taught fundamental programming concepts and guided students through hands-on exercises.",
      "Simplified complex topics to improve student understanding and confidence.",
    ],
  },
];

const socials = [
  { name: "Github", url: "https://github.com/jhaienz", title: "GitHub" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/doofenzy/",
    title: "LinkedIn",
  },
];

function App() {
  return (
    <>
      <div className="container wrapper">
        <div className="header">
          <img src={pfp} className="profile_image" alt="Profile" />
          <h1 className="site-title">Jerome A. Infante</h1>
          <div className="site-affilation">
            <span className="affilation">
              <ul className="flat">
                <li className="position">BS Computer Science</li>
                <li className="email">jeromeinfante.dev@gmail.com</li>
              </ul>
            </span>
          </div>
          <nav className="nav">
            <ul className="flat"></ul>
          </nav>
        </div>
        <section className="introduction prose prose-sm sm:prose lg:prose-base mx-auto mb-5">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p>
            I am an aspiring Software Engineer and Cybersecurity Engineer
            dedicated to building the future. My core expertise lies in the
            critical domains of Backend Engineering, Cybersecurity, and
            Artificial Intelligence, with a special focus on Large Language
            Models (LLMs). My personal mission extends beyond the code: I aim to
            leverage my intellect and technical skills to drive global
            innovation, helping to create a better future and a better life for
            all. I believe in the power of technology to solve complex problems
            and fundamentally improve the human experience.
          </p>
        </section>
        <section className="introduction prose prose-sm sm:prose lg:prose-base mx-auto mb-5">
          <h3 className="text-lg font-semibold">
            The Journey: From Enthusiast to Expert
          </h3>
          <p>
            My deep connection with technology started early. I began coding as
            a Grade 10 student, quickly translating a childhood fascination into
            a professional pursuit. As a young child, I was the quintessential
            computer enthusiast—in fact, a fun fact is that I was playing Dota 1
            back when I was in kindergarten! This early passion fostered a
            continuous drive to learn and master new technologies, creating a
            foundation that supports my current specializations.
          </p>
        </section>
        <section className="introduction prose prose-sm sm:prose lg:prose-base mx-auto mb-5">
          <h3 className="text-lg font-semibold">Versatility and Mastery</h3>
          <p>
            While I possess the versatility of a &quot;jack of all trades,&quot;
            having explored and touched nearly every field in tech, my focus has
            sharpened into deep expertise. This broad experience allows me to
            understand the surface level of any technical challenge, making me
            an exceptionally adaptable problem-solver. My true mastery is
            concentrated in three powerful areas: robust Backend Engineering,
            proactive Penetration Testing (Pentesting) in Cybersecurity, and
            cutting-edge AI (LLMs) development.
          </p>
        </section>
        <div className="introduction">
          <h3>Projects</h3>
          <ul>
            {projects.map((proj, index) => (
              <li key={index} style={{ marginBottom: "15px" }}>
                {proj.title}
                <p style={{ margin: "5px 0" }}>{proj.description}</p>
                {proj.details && proj.details.length > 0 && (
                  <ul>
                    {proj.details.map((detail, dIndex) => (
                      <li
                        key={dIndex}
                        style={{ fontSize: "14px", marginTop: "2px" }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="introduction">
          <h3>Experiences</h3>
          <ul>
            {experiences.map((exp, index) => (
              <li key={index} style={{ marginBottom: "15px" }}>
                <span className="inline_span_exps">
                  <em>{exp.date}</em>
                </span>
                {exp.role}
                {exp.details && exp.details.length > 0 && (
                  <ul>
                    {exp.details.map((detail, dIndex) => (
                      <li
                        key={dIndex}
                        style={{ fontSize: "14px", marginTop: "5px" }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="introduction">
          <h3>Education</h3>
          <ul>
            {education.map((edu, index) => (
              <li key={index} style={{ marginBottom: "15px" }}>
                <span className="inline_span_exps">
                  <em>{edu.date}</em>
                </span>
                {edu.school}
                <p style={{ margin: "5px 0" }}>{edu.degree}</p>
                {edu.details && edu.details.length > 0 && (
                  <ul>
                    {edu.details.map((detail, dIndex) => (
                      <li
                        key={dIndex}
                        style={{ fontSize: "14px", marginTop: "2px" }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="introduction">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>
                <em>
                  {cert.date}&emsp;{" "}
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </em>
              </li>
            ))}
          </ul>
        </div>
        <div className="introduction">
          <h3>Competitions</h3>
          <ul>
            {competitions.map((comp, index) => (
              <li key={index}>
                <em>
                  {comp.date}&emsp; {comp.title}
                </em>
                {comp.achievements && comp.achievements.length > 0 && (
                  <ul>
                    {comp.achievements.map((ach, achIndex) => (
                      <li
                        key={achIndex}
                        style={{ fontSize: "14px", marginTop: "5px" }}
                      >
                        {ach}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="introduction">
          <h3>Skills</h3>
          <ul>
            {skills.map(([category, items], index) => (
              <li key={index}>
                <p>{category}</p>
                <span className="collaborators">{items}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="introduction">
          <h3>Socials</h3>
          <ul>
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
