import React from 'react';

const Resume = () => (
  <div className="resume flex">
    <div className="resume__page">
      <div className="resume__header">
        <div className="resume__title">
          ADAM <span className="resume__normal">PEÑA</span>
        </div>
        <div className="resume__subtitle">
          SOFTWARE ENGINEER
        </div>
      </div>
      <hr className="resume__hr" />
      <div className="resume__row">
        <div className="resume__column resume__column--right pull-right">
          <div className="hidden-sm hidden-md hidden-lg">
            <div className="resume__heading-1">
              OBJECTIVE
            </div>
            <div className="resume__heading-3">
              Developer with a keen eye for design and a passion for innovation and experimentation
              to enhance the user experience
            </div>
          </div>
          <div className="resume__heading-1">
            EXPERIENCE
          </div>
          <span className="resume__bolder">VISIBLY</span> (formerly Opternative)
          <div className="resume__normal">Software Engineer</div>
          Sep 2017 - Current | Chicago, IL
          <ul className="resume__ul">
            <li>
              <span>
                Optimize user onboarding and offboarding to increase conversion rate by alleviating
                friction in the user experience
              </span>
            </li>
            <li>
              <span>
                Architect, prototype, build, test, and deploy new interface components and
                functionality for online eye exam and vision care platform
              </span>
            </li>
            <li>
              <span>
                Mentor junior level developers on software development process
              </span>
            </li>
            <li>
              <span>
                Monitor technical support channels to document bugs and implement solutions with
                test coverage
              </span>
            </li>
            <li className="resume__stack">
              <span>
                <span className="resume__normal">Tech</span>: HTML5/CSS3, ReactJS, Angular,
                JavaScript, Ruby on Rails, Sass
              </span>
            </li>
          </ul>
          <span className="resume__bolder">ARRIVE</span> (formerly ParkWhiz)
          <div className="resume__normal">Front End Developer</div>
          Mar 2017 - Aug 2017 | Chicago, IL
          <div className="resume__normal">Jr. Front End Developer</div>
          Mar 2016 - Aug 2017 | Chicago, IL
          <ul className="resume__ul">
            <li>
              <span>
                Overhauled parking widget to leverage new API endpoints to acutely reduce load time
                while extending functionality and adaptability to partner specs
              </span>
            </li>
            <li>
              <span>
                Designed and developed responsive site-wide refreshes, landing pages and email
                templates
              </span>
            </li>
            <li>
              <span>
                Identified A/B test opportunities for site improvements
              </span>
            </li>
            <li>
              <span>
                Investigated and fixed reported issues and wrote tests to prevent regression
              </span>
            </li>
            <li className="resume__stack">
              <span>
                <span className="resume__normal">Tech</span>: HTML5/CSS3, ReactJS, JavaScript, Ruby
                on Rails, Haml, Sass, PHP
              </span>
            </li>
          </ul>
          <div className="resume__heading-1">
            CODE
          </div>
          <div className="resume__bolder margin-bottom-fourth">
            Opternative/Visibly brand refresh, and optimization
          </div>
          <div className="margin-bottom-extra">
            Worked with designers to develop and implement a brand refresh and name change for our
            high volume, consumer facing site. Revamped user experience with new streamlined
            interactions. Improved load speed by advocating for and adopting reusable design
            practice while refactoring and removing legacy stylesheets.
          </div>
          <div className="resume__bolder margin-bottom-fourth">
            ParkWhiz for Business
          </div>
          <div className="margin-bottom-extra">
            Designed and developed a business platform subdomain for businesses to find parking,
            book and manage employee and visitor parking. Elevated a basic interface to a
            modernized, cross-browser compatible and responsive portal for over 40% of ParkWhiz’s
            repeat customers driving significant savings for partners.
          </div>
        </div>
        <div className="resume__column resume__column--left pull-left-sm">
          <div className="hidden-xs">
            <div className="resume__heading-1">
              OBJECTIVE
            </div>
            <div className="resume__heading-3">
              Developer with a keen eye for design and a passion for innovation and experimentation
              to enhance the user experience
            </div>
          </div>
          <div className="resume__heading-1">
            SKILLS
          </div>
          <div className="resume__heading-2">
            PROGRAMMING
          </div>
          <ul className="resume__ul">
            <li><span>HTML5</span></li>
            <li><span>CSS3</span></li>
            <li><span>Javascript</span></li>
            <li><span>ReactJS</span></li>
            <li><span>Node.js</span></li>
            <li><span>Ruby on Rails</span></li>
            <li><span>LESS</span></li>
            <li><span>Sass</span></li>
            <li><span>Redux</span></li>
            <li><span>jQuery</span></li>
            <li><span>HAML</span></li>
            <li><span>Jest</span></li>
            <li><span>RSpec</span></li>
            <li><span>Webpack</span></li>
            <li><span>Docker</span></li>
            <li><span>Bootstrap</span></li>
            <li><span>Shell</span></li>
          </ul>
          <div className="resume__heading-2">
            TOOLS
          </div>
          <ul className="resume__ul">
            <li><span>Git/GitHub</span></li>
            <li><span>Docker</span></li>
            <li><span>Pivotal</span></li>
            <li><span>JIRA</span></li>
            <li><span>Zeplin</span></li>
            <li><span>Photoshop</span></li>
            <li><span>Illustrator</span></li>
          </ul>
          <div className="resume__heading-1">
            EDUCATION
          </div>
          <div className="resume__bolder">UNIVERSITY OF ILLINOIS</div>
          <div className="resume__normal">B.S. Community Health</div>
          <div>May 2014 | Champaign, IL</div>
          <div className="margin-bottom">Dean's List</div>
          <div className="resume__heading-1">
            LINKS
          </div>
          <div>
            <a className="resume__link" href="https://www.github.com/adamjpena">
              GitHub:&#47;&#47; adamjpena
            </a>
          </div>
          <div>
            <a className="resume__link" href="https://www.linkedin.com/in/adamjpena">
              LinkedIn:&#47;&#47; adamjpena
            </a>
          </div>
          <div>
            <a className="resume__link" href="https://adamjpena.com">
              adamjpena.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
