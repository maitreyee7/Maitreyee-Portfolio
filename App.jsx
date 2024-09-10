import  {styled}  from "styled-components";

import Contact from "./components/contact";
import Hero from "./components/Hero";
import Who from "./components/Who";

import Works from "./components/Works";


const Container =styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width:none;
  color:white;
  background-image: linear-gradient(#101970,#501970);
  {/*background-color:#CBC3E3;
background: url("./img/bg.jpeg");*/}

  &::-webkit-scrollbar{
    display:flex;
  }


`

function App() {

  return (
    <Container>
     
      <Hero/>
      <Who/>
      <Works/>
  <Contact/>
    
    </Container>
  );
}

export default App;
