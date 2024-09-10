import React from 'react';
import  styled  from 'styled-components';
import Navbar from './Navbar';
import { OrbitControls, Sphere ,MeshDistortMaterial} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import Contact from './contact';

const Section =styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;

  @media only screen and (max-width: 768px){
    height:200vh;

  }

`
const Container =styled.div`
  height: 100%;
  scroll-snap-align: center;
  width:1400px;
  display:flex;
  justify-content:space-between;
  padding-left:200px;
  @media only screen and (max-width: 768px){
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  padding-left:0;
  padding-right: 0;
  

  }
`
const Left =styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
@media only screen and (max-width: 768px){
    flex:1;
    align-items:center;

  }

`
const Right =styled.div`
 flex:3;
 position:relative;
 @media only screen and (max-width: 768px){
    flex:1;
    width:100%;

  }

`
const Title= styled.h1`
    font-size:54px;
    @media only screen and (max-width: 768px){
       
        text-align:center;
    
      }
`
const WhatWeDo= styled.div`
    display:flex; 
    align-items:center;
    gap:10px;
`
const Line= styled.img`
    height:5px;

`
const Subtitle= styled.h2`
font-family: Copperplate, Papyrus, fantasy;
font-size:35px;
    color: #da4ea2;
`
const Desc= styled.p`
    font-size:20px;
    color:lightgray;
    @media only screen and (max-width: 768px){
       padding:20px;
        text-align:center;
    
      }
`
const Button= styled.button`
    background-color: #da4ea2;;
    font-weight:500;
    width:100px;
    padding:10px
    border:none;
    color:white;
    cursor:pointer;
    border-radius:5px;
    height:40px;
   

`
const Img= styled.img`

    width:500px;
    height:700px;
    object-fit:contain;
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    margin:auto;
    animation: animate 2s infinite ease alternate;
    media only screen and (max-width: 768px){
        height:300px;
        width:300px;
    
      }

    @keyframes animate {
        to{
            transform: translateY(20px);
        }
    }
    
   
`;
const Hero = () => {
  return (
    <Section>
      <Navbar/>
       <Container> 
          <Left>
              <Title> Think. Make. Solve</Title>
              <WhatWeDo>
                  <Line src="./img/line.png"/>
                  <Subtitle>Personal Insights</Subtitle>
              </WhatWeDo>
              <Desc> I am a versatile individual who aims at significant growth 
                  and meaningful work. I exhibit leadership qualities 
                  as a sense of responsibility whenever needed. I have
                   strong problem-solving as well as analytical abilities. 
                   I aspire to build a prolific career in the field of Computer Science.
                    <br />
                    Here are some key takeaways from my personality: <br />
                  <ul type='bullet'></ul>
               <li>Fast learner</li>
                
                <li>Flexible</li>
                <li>Adaptive</li>
                <li>Collaborative</li>
                  </Desc>
              <Button> <a href='https://www.linkedin.com/in/maitreyeep7/' >Learn More</a> </Button>
          </Left>
          <Right>
            
              <Canvas >
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3,2,1]} />
                
                    <Sphere args={[1,100,200]} scale={2.4 }>
                    <MeshDistortMaterial 
                    color="#191970" 
                    attach="material"
                     distort={0.5}
                    speed={2} />
                </Sphere>
            </Canvas>
              <Img src="./img/moon.png"/>
          </Right>
      </Container> 
    </Section>
  ) 
}

export default Hero;
