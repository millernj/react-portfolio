import React from 'react';
import Container from '../components/Container';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Container>
      <Hero backgroundimage={'./assets/images/profile-picture.png'}>
        <h1>Noah Miller</h1>
        <h2>Hacker Monkey Extraordinare</h2>
      </Hero>
    </Container>
  );
};

export default Home;
