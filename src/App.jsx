import "./index.css";
import pfp from "./assets/me.png";

function App() {
  return (
    <>
      <div class="container wrapper">
        <div class="header">
          <img src={pfp} class="profile_image" />
          <h1 class="site-title">Jerome Infante&emsp;ジェローム</h1>
          <div class="site-affilation">
            <span class="affilation">
              <ul class="flat">
                <li class="position">BS Computer Science</li>
                <li class="email">jinfante@gbox.ncf.edu.ph</li>
              </ul>
            </span>
            <nav class="nav social">
              <ul class="flat">
                <a href="https://github.com/doofenzy" title="GitHub">
                  Github
                </a>
                |
                <a
                  href="https://www.linkedin.com/in/doofenzy/"
                  title="LinkedIn"
                >
                  LinkedIn
                </a>
              </ul>
            </nav>
          </div>
          <nav class="nav">
            <ul class="flat"></ul>
          </nav>
        </div>
        <div class="introduction">
          <span>
            Jerome Infante is a student at{" "}
            <a href="https://ncf.edu.ph/">Naga College Foundation Inc.</a>,
            currently pursuing a Bachelor of Science in Computer Science with a
            specialization in <a>Cybersecurity and Data Science</a>.
          </span>
          <br />
        </div>
        <div class="introduction">
          <h3>
            <b>Certifications</b>
          </h3>
          <ul>
          <li>
              <em>2025.05&emsp; Data Analytics Essentials | Cisco.</em>
            </li>
            <li>
              <em>2025.03&emsp; Introduction To Cybersecurity | Cisco.</em>
            </li>
            <li>
              <em>
                2025.03&emsp; Certified Cyber Security Analyst Premium Edition |
                CyberWarfare Labs.
              </em>
            </li>
            <li>
              <em>2025.02&emsp; Cyber Threat Management | Cisco.</em>
            </li>
            <li>
              <em>2025.02&emsp; Operating System Basics | Cisco.</em>
            </li>
            <li>
              <em>2025.01&emsp; Computer Hardware Basics | Cisco.</em>
            </li>
            <li>
              <em>
                2025.01&emsp; Microsoft Office Specialist: Word Associate |
                Microsoft.
              </em>
            </li>
            <li>
              <em>2024.12&emsp; Responsive Web Design | FreeCodeCamp.</em>
            </li>
            <li>
              <em>2024.11&emsp; Advanced Commands in Linux | Coursera.</em>
            </li>
            <li>
              <em>2024.10&emsp; Pre Security Certificate | TryMackMe.</em>
            </li>
            <li>
              <em>2024.09&emsp; 5th Place Hack4Gov Season 3 | DICT.</em>
            </li>
          </ul>
        </div>
        <div class="introduction">
          <h3>
            <b>Skills</b>
          </h3>
          <ul>
            <li>
              <p>Full Stack Web Development</p>
              <span class="collaborators">
                React, Nest, Express, Laravel, Django
              </span>
            </li>
            <li>
              <p>Database</p>
              <span class="collaborators">MongoDB, MySQL, PostgreSQL</span>
            </li>
            <li>
              <p>Embedded System</p>
              <span class="collaborators">Arduino & Raspberry Pi</span>
            </li>
            <li>
              <p>Languages</p>
              <span class="collaborators">
                C/C++, Flutter, PHP, Javascript, Python
              </span>
            </li>
            <li>
              <p>Tools</p>
              <span class="collaborators">
                Git, VScode, Jetbrains, Postman, Oracle VirtualBox
              </span>
            </li>
            <li>
              <p>Operating Systems</p>
              <span class="collaborators">
                Windows & Linux(Ubuntu, Kali, Fedora, Arch, Mint)
              </span>
            </li>
            <li>
              <p>Purple Team</p>
              <span class="collaborators">
                BurpSuite, Metasploit, Nmap, Wireshark, SQLMap, Dirb
              </span>
            </li>
          </ul>
        </div>
        <div class="introduction">
          <h3>
            <b>Experiences</b>
          </h3>
          <ul>
            <li>
              <span class="inline_span_exps">
                <em>2025.01 - Present</em>
              </span>
              Freelance Full-Stack Developer
            </li>
            <li>
              <span class="inline_span_exps">
                <em>2024.07 - Present</em>
              </span>
              Programming Tutor
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
