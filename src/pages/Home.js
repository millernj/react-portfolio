import React from 'react';
import Container from '../components/Container';
import Canvas from '../components/Canvas';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Container>
      <Hero>
        <h1>Noah Miller</h1>
        <h2>Hacker Monkey Extraordinare</h2>
      </Hero>
      <Canvas/>
    </Container>
  );
};

export default Home;
