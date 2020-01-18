import React, { /*useState ,*/ Component } from "react";
import styled from "styled-components";
import "./App.css";
import Student from "./Student/Student"; // Component to be used

const StyledButton = styled.button`
  background-color: ${props => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;
class App extends Component {
  // special property can be used if extends Component = state
  // if state changes, DOM is re-rendered.
  state = {
    students: [
      { id: "Student_01", name: "Kiran", age: 25 },
      { id: "Student_02", name: "Kumar", age: 23 },
      { id: "Student_03", name: "Kiran Kumar", age: 26 }
    ],
    otherState: "old some val",
    showStudents: false
  };

  // Flexible Lists
  nameChangedHandler = (event, id) => {
    const studentIndex = this.state.students.findIndex(stud => {
      return stud.id === id ? true : false;
    });

    const student = {
      ...this.state.students[studentIndex]
    };

    // const student = Object.assign({}, this.state.students[studentIndex]);

    student.name = event.target.value;

    const students = [...this.state.students];
    students[studentIndex] = student;

    this.setState({
      students: [
        { name: "Kiran K", age: 21 },
        { name: event.target.value, age: 29 },
        { name: "Kiran Kumar", age: 27 }
      ],
      otherState: "some val"
    });
  };

  deleteStudentHandler = studentIndex => {
    // const students = this.state.students.slice();
    const students = [...this.state.students];
    students.splice(studentIndex, 1);
    this.setState({ students: students });
  };

  toggleStudentsHandler = () => {
    const doesShow = this.state.showStudents;
    this.setState({ showStudents: !doesShow });
  };

  render() {
    let students = null;

    if (this.state.showStudents) {
      students = (
        <div>
          {this.state.students.map((student, index) => {
            return (
              <Student
                click={() => this.deleteStudentHandler(index)}
                name={student.name}
                age={student.age}
                key={student.id}
                changed={event => this.nameChangedHandler(event, student.id)}
              />
            );
          })}
          <p> True Hence rendering this paragraph </p>{" "}
        </div>
      );
    }
    const classes = [];
    if (this.state.students.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.students.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }
    // Kind of JSX file
    return (
      // Wrap all elements into 1 root element // Pass method as props */
      <div className="App">
        <h1>Kiran's first react page after a long time.</h1>
        From App.js file. <br /> <br />
        <p className={classes.join(" ")}>Title Paragraph</p>
        <StyledButton
          alt={this.state.showStudents}
          onClick={this.toggleStudentsHandler}
        >
          Toggle Students
        </StyledButton>
        {students}
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now?"));
  }
}

export default App;
