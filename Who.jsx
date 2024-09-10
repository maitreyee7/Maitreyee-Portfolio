import React from 'react';
import  styled  from 'styled-components';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section =styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display:flex;

  justify-content:center;
  align-items:center;

`
const Container =styled.div`
  height: 100%;
  scroll-snap-align : center;
  width:1400px;
  display:flex;
  justify-content:space-between;
  padding-left:200px;
`
const Left =styled.div`
flex:1;
 



`
const Right =styled.div`
 flex:1;
 display:flex;
flex-direction:column;
justify-content:center;
gap:20px;



`
const Title= styled.h1`
    font-size:44px;
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
    font-size:28px;
    color: #da4ea2;
    font-family: "Courier New", Courier, monospace;
`
const Desc= styled.p`
    font-size:20px;
    color:lightgray;
`
const Button= styled.button`
    background-color: #da4ea2;
    font-weight:500;
    width:120px;
    padding:10px
    border:none;
    color:white;
    cursor:pointer;
    border-radius:5px;
    height:40px;

`

const Who = () => {
  return (
    <Section>
      
      <Container> 
          <Left>
            {/*3d model*/}
            <Canvas camera={{fov:25, position:[5,5,5]}}>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3,2,1]} />
                
                    <Cube/>
                    <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
              
          </Left>
          <Right>
          <Title> </Title>
              <WhatWeDo> 
                  <Line src="./img/line.png"/>
                  <Subtitle>Extracurriculur Achievements</Subtitle>
              </WhatWeDo>
              <Desc>Silver medal in skating Annual sports week</Desc>
              <Desc>Prizes in English Declamation, News Reading competition</Desc> 
              <Desc>Rock Band best singer category </Desc>
              <Desc> Enthusiastic participant in many sport events</Desc>
              <Button> <a href='https://github.com/maitreyee7'   >See my Github</a></Button>
              
          </Right>
      </Container>
    </Section>
  ) 
}

export default Who;
