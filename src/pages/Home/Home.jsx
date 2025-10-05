import React from 'react'
import { useLoaderData } from 'react-router'
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero'
import Books from '../../components/Books/Books';
const Home = () => {
  const books = useLoaderData();
  return (
    <>
      <div className="">
      <Container>
        <Hero/>
        <Books books={books}/>
      </Container>
      </div>
    </>
  )
}

export default Home