import React from 'react';
import cx from 'classnames';
import { TransitionOnEnter, TRANSITIONS } from '../helpers';
import Image from '../Layout/Image';
import Link from '../helpers/Link';
import { Container, Grid, Cell } from 'components/Grid';

import gridStyles from 'scss/grid.module.scss';
import styles from './About.module.scss';

import { Heading, Section } from '../Layout';

import portraitVertical from 'assets/images/adam-portrait-vertical.jpg';
import portraitVertical2x from 'assets/images/adam-portrait-vertical@2x.jpg';
import portrait from 'assets/images/adam-portrait.jpg';
import portrait2x from 'assets/images/adam-portrait@2x.jpg';

const About = () => (
  <Section name='about'>
    <Container>
      <Grid margin={-15} columns={12}>
        <Cell
          padding={15}
          width={{ xs: 8, md: 6, lg: 4 }}
          push={{ xs: 2, md: 3, lg: 'auto' }}
        >
          <TransitionOnEnter transition={TRANSITIONS.REVEAL}>
            <div>
              <Image
                src={portrait}
                srcSet={`${portrait} 481w, ${portrait2x} 962w`}
                alt='Adam J Peña'
                classes={gridStyles.visibleLteMd}
              />
              <Image
                src={portraitVertical}
                srcSet={`${portraitVertical} 360w, ${portraitVertical2x} 720w`}
                alt='Adam J Peña'
                classes={gridStyles.hiddenLteMd}
              />
              <div className={cx(styles.socialLinks, gridStyles.flex)}>
                <Link
                  href='https://www.linkedin.com/in/adamjpena'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin' />
                </Link>
                <Link
                  href='https://www.github.com/adamjpena'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github' />
                </Link>
              </div>
            </div>
          </TransitionOnEnter>
        </Cell>
        <Cell padding={15} width={{ xs: 12, lg: 8 }}>
          <TransitionOnEnter transition={TRANSITIONS.GROW}>
            <Heading level={2} classes={gridStyles.marginTop0}>
              About Me
            </Heading>
            <Heading level={4}>Creating beautiful, minimal interfaces</Heading>
            <p className={gridStyles.marginBottom2x}>
              I take pleasure in streamlining a process to increase productivity
              and ensure a quality output. In design, this translates to
              designing intuitive interfaces to make things as easy as drawing
              in wet sand on a beach. If I&#39;m not behind a screen writing
              code or producing music, I&#39;m probably learning a new recipe or
              at the gym.
            </p>
          </TransitionOnEnter>
          <TransitionOnEnter transition={TRANSITIONS.SLIDE_LEFT}>
            <Grid margin={-15} columns={12}>
              <Cell padding={15} width={{ xs: 6, md: 4 }}>
                <div className={styles.skillBadgeIcon}>
                  <i className='fa fa-user' />
                </div>
                <div className={styles.skillBadgeInfo}>
                  Building intuitive interactions
                </div>
              </Cell>
              <Cell padding={15} width={{ xs: 6, md: 4 }}>
                <div className={styles.skillBadgeIcon}>
                  <i className='fa fa-sitemap' />
                </div>
                <div className={styles.skillBadgeInfo}>
                  Increasing user conversion
                </div>
              </Cell>
              <Cell
                padding={15}
                width={{ xs: 6, md: 4 }}
                push={{ xs: 3, md: 'auto' }}
              >
                <div className={styles.skillBadgeIcon}>
                  <i className='fa fa-mobile' />
                </div>
                <div className={styles.skillBadgeInfo}>
                  Developing responsive experiences
                </div>
              </Cell>
            </Grid>
          </TransitionOnEnter>
        </Cell>
      </Grid>
    </Container>
  </Section>
);

export default About;
