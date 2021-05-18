import React from 'react';
import { DefaultTemplate } from 'templates';
import { Container } from 'components/Grid';
import { Heading } from 'components/Layout';

const Page404 = () => {
  return (
    <DefaultTemplate>
      <Container>
        <Heading>404 not found</Heading>
      </Container>
    </DefaultTemplate>
  );
};

export default Page404;
