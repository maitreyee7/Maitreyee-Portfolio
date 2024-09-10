import React from 'react';
import styled, { keyframes } from 'styled-components';
import "./work.css";

const data = [
  "Web Development",
  "Data Structures ",
  "Algorithms",
  "DBMS",
  "AI/ML",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
 
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 0.5;

  margin-top:350px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color:#FFD6D1;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover::after {
    animation: moveText 0.5s linear both;
  }

  @keyframes moveText {
    to {
      width: 100%;
    }
  }
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <div className="wrap">
            <div className="words"> 
            <span>Relevant </span>
            <span>Applicable </span>
            <span>Complementary</span>
            <span>Relevant </span>
            </div>
            <p>Coursework</p>
          </div>
           </Right>
      </Container>
    </Section>
  );
}

export default Works;
