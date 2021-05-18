import React, { FC, useState } from 'react';
import { DefaultTemplate } from 'templates';
import cx from 'classnames';
import { resumeData } from 'store/resume';
import { Button } from 'components/Buttons';
import { ObjectiveContent } from 'components/Resume';
import Link from 'components/helpers/Link';

import gridStyles from 'scss/grid.module.scss';
import transitionStyles from 'scss/transition.module.scss';
import styles from 'scss/resume.module.scss';

const Resume: FC = () => {
  const [shouldShowContactInfo, toggleShowContactInfo] = useState(false);

  const print = () => {
    // time out ensures email is shown before print
    const waitTime = shouldShowContactInfo ? 0 : 500;
    toggleShowContactInfo(true);
    setTimeout(() => {
      window.print();
    }, waitTime);
  };

  const showContactInfo = () => {
    // time out prevents link from being triggered after href is changed
    setTimeout(() => {
      toggleShowContactInfo(true);
    }, 0);
  };

  return (
    <DefaultTemplate pageTitle='Resume'>
      <div className={cx(styles.resume, gridStyles.flex)}>
        <ul className={cx(styles.breadcrumbs, gridStyles.hidePrint)}>
          <li></li>
          <li>
            <Button classes={styles.printButton} name='print' onClick={print}>
              PRINT
            </Button>
          </li>
        </ul>
        <div className={styles.page}>
          <div className={styles.header}>
            <div className={styles.title}>
              {resumeData.firstName.toUpperCase()}{' '}
              <span className={styles.normal}>
                {resumeData.lastName.toUpperCase()}
              </span>
            </div>
            <div className={styles.subtitle}>
              {resumeData.role.toUpperCase()}
            </div>

            <div
              className={cx({ [gridStyles.hidePrint]: !shouldShowContactInfo })}
            >
              <Link
                className={styles.link}
                href={`${
                  shouldShowContactInfo
                    ? `mailto:${process.env.GATSBY_CONTACT_EMAIL}`
                    : '#'
                }`}
                onClick={showContactInfo}
              >
                {shouldShowContactInfo ? (
                  <span
                    className={cx(
                      transitionStyles.transition,
                      transitionStyles.reveal,
                    )}
                  >
                    {process.env.GATSBY_CONTACT_EMAIL}
                  </span>
                ) : (
                  <span>(click to reveal email)</span>
                )}
              </Link>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.row}>
            <div className={cx(styles.column, styles.right, 'pull-right')}>
              <div className={cx(gridStyles.hiddenMd, gridStyles.hidePrint)}>
                <ObjectiveContent {...resumeData.objectiveSection} />
              </div>
              <div className={cx(styles.heading1)}>
                {resumeData.experienceSection.title.toUpperCase()}
              </div>
              {resumeData.experienceSection.positions.map((item, i) => (
                <React.Fragment key={`experience-positions-${i}`}>
                  <Link
                    className={styles.link}
                    href={item.url}
                    data-testid={`${item.company}-link`}
                  >
                    <span className={cx(styles.bolder)}>
                      {item.company.toUpperCase()}
                    </span>
                    {item.companyDescription
                      ? ` ${item.companyDescription}`
                      : null}
                  </Link>
                  {item.roles.map((role, i) => (
                    <React.Fragment key={`${item.company}-roles-${i}`}>
                      <div className={cx(styles.normal)}>{role.title}</div>
                      <div>
                        {role.startDate} - {role.endDate} | {role.location}
                      </div>
                      {!role.bullets ? null : (
                        <ul className={styles.ul}>
                          {role.bullets.map((bullet, i) => (
                            <li
                              key={`${item.company}-{role.title}-bullet-${i}`}
                            >
                              <span>{bullet}</span>
                            </li>
                          ))}
                          {!role.techStack ? null : (
                            <li className={styles.stack}>
                              <span>
                                <span className={styles.normal}>Tech</span>:{' '}
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
              <div
                className={cx({
                  [gridStyles.hidePrint]: resumeData.hideProjectsPrint,
                })}
              >
                <div className={styles.heading1}>
                  {resumeData.projectsSection.title.toUpperCase()}
                </div>
                {resumeData.projectsSection.projects.map((project, i) => (
                  <React.Fragment key={`projects-${i}`}>
                    <div
                      className={cx(
                        styles.bolder,
                        gridStyles.marginBottomFourth,
                      )}
                    >
                      <Link className={styles.link} href={project.url}>
                        {project.title}
                      </Link>
                    </div>
                    <div className={gridStyles.marginBottomExtra}>
                      {project.content}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className={cx(styles.column, styles.left)}>
              <div
                className={cx(
                  gridStyles.hiddenXs,
                  gridStyles.showMd,
                  gridStyles.showPrint,
                )}
              >
                <ObjectiveContent {...resumeData.objectiveSection} />
              </div>
              <div className={styles.heading1}>
                {resumeData.skillsSection.title.toUpperCase()}
              </div>
              {resumeData.skillsSection.sections.map((section, i) => (
                <React.Fragment key={`skills-${i}`}>
                  <div className={styles.heading2}>
                    {section.title.toUpperCase()}
                  </div>
                  <ul className={styles.ul}>
                    {section.bullets.map((bullet, i) => (
                      <li key={`${section.title}-bullet-${i}`}>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
              <div className={styles.heading1}>
                {resumeData.educationSection.title.toUpperCase()}
              </div>
              {resumeData.educationSection.schools.map((school, i) => (
                <React.Fragment key={`school-${i}`}>
                  <div className={styles.bolder}>{school.name}</div>
                  <div className={styles.normal}>{school.degree}</div>
                  <div>
                    {school.graduationDate} | {school.location}
                  </div>
                  <div className={gridStyles.marginBottom}>
                    {school.accolades}
                  </div>
                </React.Fragment>
              ))}
              <div className={styles.heading1}>
                {resumeData.linksSection.title.toUpperCase()}
              </div>
              {resumeData.linksSection.links.map((link, i) => (
                <div key={`links-${i}`}>
                  <Link className={styles.link} href={link.url}>
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default Resume;
