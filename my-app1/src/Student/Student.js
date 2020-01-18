import React from "react";
import styled from "styled-components";
import "./Student.css";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
`;

// Component returns a JSX
// props = dynamic data
const student = props => {
  return (
    // <div className="Student" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default student;
