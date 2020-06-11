import React from 'react';
import Container from '../components/Container';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Container fluid backgroundImage={'./assets/images/content-background.png'}>
      <Container>
        <Hero backgroundImage={'./assets/images/profile-picture.png'}>
        <h1>
          Noah Miller
        </h1>
        <h2>
          Hacker Monkey Extraordinare
        </h2>
      </Hero>
      </Container>
    </Container>
  )
}

export default Home;