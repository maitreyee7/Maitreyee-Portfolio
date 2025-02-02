import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import { useRef } from 'react';

const Cube = () => {
    const textRef= useRef();
    useFrame(state =>(textRef.current.position.x = Math.sin(state.clock.elapsedTime)* 2));
  return (
   <mesh>
       <boxGeometry  />
       <meshStandardMaterial>
       <RenderTexture attach="map">
           <PerspectiveCamera makeDefault position={[0,0,5]}/>
           <color attach="background" args={["#dc9dcc"]} />
           
           <Text ref={textRef} fontSize={3} color="#555">
           TOTB
           </Text>
           </RenderTexture>
       </meshStandardMaterial>
   </mesh>
  );
}

export default Cube;
