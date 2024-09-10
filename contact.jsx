import React from 'react';
import styled  from 'styled-components';
import Map from "./Map";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Section =styled.div`
  height:100vh;
  scroll-snap-align:center;
`
const Container =styled.div`
width: 100%;
height: 100%; 
display: flex;
justify-content: space-between;
gap: 50px;
`
const Left =styled.div`
  flex:1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`
const Right =styled.div`
flex:1;
`
const Title =styled.h1`
font-weight: 400;
font-size: 35px;
font-family: Copperplate, Papyrus, fantasy;
`
const Input =styled.input`
padding: 20px;
background-color: #e8e6e6;
border: none;
border-radius: 5px;
`
const TextArea =styled.textarea`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #e8e6e6;
`
const Button =styled.button`
background-color: #da4ea2;
color: white;
border: none;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
padding: 20px;
`
const Form =styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;
`;



const contact = () => {
  const ref = useRef();

const [success, setSuccess]= useState(null);

const  handleSubmit =(e)=>{
  e.preventDefault();

  emailjs
      .sendForm('service_bpgypdi', 'template_6enrwz5', ref.current, {
        publicKey: 'S_u4I6PuJewEItfaO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false)
        },
       
      );
}

  return (
    <Section>
      <Container>
      <Left>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Title> Contact Me </Title>
            <Input placeholder="Name" name="name"></Input>
            <Input placeholder="Email" name="email"></Input>
            <TextArea placeholder="Write your message" rows={10} name="message"></TextArea>
            <Button type="submit">Send</Button>
            {success && "Your message has been sent! :)" }
        </Form>

      </Left>
      <Right>
        <Map/>
      </Right>
      </Container>

    </Section>
  )
}

export default contact;
