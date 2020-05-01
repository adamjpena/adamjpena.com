import React, { Component } from "react";
import { resumeData } from "../store/resume";

const ObjectiveContent = () => (
  <React.Fragment>
    <div className="resume__heading-1">
      {resumeData.objectiveSection.title.toUpperCase()}
    </div>
    <div className="resume__heading-3">
      {resumeData.objectiveSection.content}
    </div>
  </React.Fragment>
);

class Resume extends Component {
  constructor(props) {
    super(props);
    this.print = this.print.bind(this);
    this.showContactInfo = this.showContactInfo.bind(this);

    this.state = {
      shouldShowContactInfo: false
    };
  }

  print() {
    window.print();
  }

  showContactInfo(shouldShowContactInfo) {
    // time out prevents link from being triggered after href is changed
    setTimeout(() => {
      this.setState({ shouldShowContactInfo });
    }, 0);
  }

  render() {
    const { shouldShowContactInfo } = this.state;

    return (
      <div className="resume flex">
        <ul className="resume__breadcrumbs hide-print">
          <li>
            <a className="button button--as-text" href="/">
              <i className="fa fa-angle-left" /> {resumeData.home}
            </a>
          </li>
          <li>
            <button
              type="button"
              className="resume__print-button button"
              name="print"
              onClick={this.print}
            >
              Print
            </button>
          </li>
        </ul>
        <div className="resume__page">
          <div className="resume__header">
            <div className="resume__title">
              {resumeData.firstName.toUpperCase()}{" "}
              <span className="resume__normal">
                {resumeData.lastName.toUpperCase()}
              </span>
            </div>
            <div className="resume__subtitle">
              {resumeData.role.toUpperCase()}
            </div>

            <div className={shouldShowContactInfo ? "" : "hide-print"}>
              <a
                className="resume__link"
                href={`${
                  shouldShowContactInfo
                    ? `mailto:${process.env.REACT_APP_CONTACT_EMAIL}`
                    : "#"
                }`}
                onClick={this.showContactInfo}
              >
                {shouldShowContactInfo ? (
                  <span className="transition transition--reveal">
                    {process.env.REACT_APP_CONTACT_EMAIL}
                  </span>
                ) : (
                  <span>(click to reveal email)</span>
                )}
              </a>
            </div>
          </div>
          <hr className="resume__hr" />
          <div className="resume__row">
            <div className="resume__column resume__column--right pull-right">
              <div className="hidden-sm hidden-md hidden-lg hide-print">
                <ObjectiveContent />
              </div>
              <div className="resume__heading-1">
                {resumeData.experienceSection.title.toUpperCase()}
              </div>
              {resumeData.experienceSection.positions.map((item, i) => (
                <React.Fragment key={`experience-positions-${i}`}>
                  <a className="resume__link" href="https://www.govisibly.com">
                    <span className="resume__bolder">
                      {item.company.toUpperCase()}
                    </span>
                    {item.companyDescription
                      ? ` ${item.companyDescription}`
                      : null}
                  </a>
                  {item.roles.map((role, i) => (
                    <React.Fragment key={`${item.company}-roles-${i}`}>
                      <div className="resume__normal">{role.title}</div>
                      <div>
                        {role.startDate} - {role.endDate} | {role.location}
                      </div>
                      {!role.bullets ? null : (
                        <ul className="resume__ul">
                          {role.bullets.map((bullet, i) => (
                            <li
                              key={`${item.company}-{role.title}-bullet-${i}`}
                            >
                              <span>{bullet}</span>
                            </li>
                          ))}
                          {!role.techStack ? null : (
                            <li className="resume__stack">
                              <span>
                                <span className="resume__normal">Tech</span>:{" "}
                                {role.techStack}
                              </span>
                            </li>
                          )}
                        </ul>
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
              <div className={resumeData.hideProjectsPrint ? "hide-print" : ""}>
                <div className="resume__heading-1">
                  {resumeData.projectsSection.title.toUpperCase()}
                </div>
                {resumeData.projectsSection.projects.map((project, i) => (
                  <React.Fragment key={`projects-${i}`}>
                    <div className="resume__bolder margin-bottom-fourth">
                      <a className="resume__link" href={project.url}>
                        {project.title}
                      </a>
                    </div>
                    <div className="margin-bottom-extra">{project.content}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="resume__column resume__column--left pull-left-sm">
              <div className="hidden-xs show-print">
                <ObjectiveContent />
              </div>
              <div className="resume__heading-1">
                {resumeData.skillsSection.title.toUpperCase()}
              </div>
              {resumeData.skillsSection.sections.map((section, i) => (
                <React.Fragment key={`skills-${i}`}>
                  <div className="resume__heading-2">
                    {section.title.toUpperCase()}
                  </div>
                  <ul className="resume__ul">
                    {section.bullets.map((bullet, i) => (
                      <li key={`${section.title}-bullet-${i}`}>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
              <div className="resume__heading-1">
                {resumeData.educationSection.title.toUpperCase()}
              </div>
              {resumeData.educationSection.schools.map((school, i) => (
                <React.Fragment key={`school-${i}`}>
                  <div className="resume__bolder">{school.name}</div>
                  <div className="resume__normal">{school.degree}</div>
                  <div>
                    {school.graduationDate} | {school.location}
                  </div>
                  <div className="margin-bottom">{school.accolades}</div>
                </React.Fragment>
              ))}
              <div className="resume__heading-1">
                {resumeData.linksSection.title.toUpperCase()}
              </div>
              {resumeData.linksSection.links.map((link, i) => (
                <React.Fragment key={`links-${i}`}>
                  <div>
                    <a className="resume__link" href={link.url}>
                      {link.text}
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
