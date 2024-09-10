import React from 'react';
import styled from 'styled-components';
import { Link} from 'react-router-dom';
import "./navbar.css";
import Who from './Who';
import Works from './Works';


const Section =styled.div`
  display:flex;
  justify-content:center;

  @media only screen and (max-width: 768px){
    width:100%;

  }
`
const Container =styled.div`
display:flex;
  width:1200px;
  align-items:center;
  justify-content:space-between;
  padding:10px 0px;

  @media only screen and (max-width:768px){
    width:100%;

  }

`
const Links =     styled.div`
display:flex;
align-items:center;
 gap:50px
 
`
const Icons   =styled.div`
display:flex;
align-items:center;
 gap:20px
`
const Logo   =styled.div`
color: #fff;
font-size:30px;
//font-weight:bold;

  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;
`

const List   =styled.ul`
display:flex;
gap:20px;
align-items:center;
list-style:none;  

@media only screen and (max-width:768px){
  display:none;
 
 }
`
const ListItem   =styled.li`
cursor:pointer;
`
const Icon   =styled.img`
  width:20px;
  cursor:pointer;
`
const Button   =styled.button`
height:30px;
  width:100px;
  padding 10px;
  background-color:  #da4ea2;
  border:none;
  color:white;
  cursor:pointer;
  border-radius:5px;

`
const Navbar = () => {
  return (
    
    <Section>
      <Container>
           <Links> 
           
               <Logo>Maitreyee</Logo> 
               <List>
                   <ListItem>Home</ListItem>
                  <ListItem>Studio</ListItem>
                   <ListItem>Works</ListItem>
                   <ListItem>Contact</ListItem>
               </List>
           
           </Links>
          
           <Icons>
               <Icon src="./img/search.png"/>
               <Button><a href= "mailto:maitreyeepurohit7@gmail.com">Hire Now</a></Button>
           </Icons>


          </Container>
    </Section>
    
    
  )
}

export default Navbar;
