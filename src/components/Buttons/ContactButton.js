import React from 'react';
import styles from './ContactButton.module.scss';
import { Button } from 'components/Buttons';

const ContactButton = ({
  setShouldShowEmailCta = () => undefined,
  shouldShowEmailCta,
}) => {
  const showEmailButton = () => {
    setShouldShowEmailCta(true);
  };

  return (
    <Button
      primary
      classes={styles.contactButton}
      {...(shouldShowEmailCta
        ? { href: `mailto:${process.env.GATSBY_CONTACT_EMAIL}` }
        : { onClick: showEmailButton })}
    >
      {shouldShowEmailCta ? 'EMAIL' : 'CONTACT'}
    </Button>
  );
};

export default ContactButton;
