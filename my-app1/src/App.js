import React, { /*useState ,*/ Component } from "react";
import "./App.css";
import Student from "./Student/Student"; // Component to be used

// const App = props => {
//   // returns 2 elements - current state and function to update state
//   const [studentsState, setStudentsState] = useState({
//     students: [
//       { name: "Kiran", age: 25 },
//       { name: "Kumar", age: 23 },
//       { name: "Kiran Kumar", age: 26 }
//     ],
//     // replaces the new state instead of merge
//     otherState: "some val"
//   });

//   const [otherState, setOtherState] = useState("some other value");
//   console.log(studentsState, otherState);

//   const switchNameHandler = () => {
//     // console.log("I was clicked!");
//     // For Class -> setState
//     // For functional -> React Hooks
//     setStudentsState({
//       students: [
//         { name: "Kiran", age: 23 },
//         { name: "Kumar", age: 20 },
//         { name: "Kiran Kumar", age: 28 }
//       ],
//       otherState: studentsState.otherState
//     });
//   };

//   return (
//     // Wrap all elements into 1 root element
//     <div className="App">
//       <h1>Kiran's first react page after a long time.</h1>
//       From App.js file. <br /> <br />
//       <button onClick={switchNameHandler}>Switch Student</button>
//       <Student
//         name={studentsState.students[0].name}
//         age={studentsState.students[0].age}
//       />
//       <Student
//         name={studentsState.students[1].name}
//         age={studentsState.students[1].age}
//       >
//         My Fav subject is Math
//       </Student>
//       <Student
//         name={studentsState.students[2].name}
//         age={studentsState.students[2].age}
//       />
//     </div>
//   );
//   // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now?"));
// };

// export default App;

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
    const style = {
      backgroundColor: "White",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

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
          {/* <Student
            name={this.state.students[0].name}
            age={this.state.students[0].age}
          />
          <Student
            name={this.state.students[1].name}
            age={this.state.students[1].age}
            // click={this.switchNameHandler.bind(this, "Kiran!")}
            changed={this.nameChangedHandler}
          >
            My Fav subject is Math
          </Student>
          <Student
            name={this.state.students[2].name}
            age={this.state.students[2].age}
          /> */}
          <p> True Hence rendering this paragraph </p>{" "}
        </div>
      );
    }
    // Kind of JSX file
    return (
      // Wrap all elements into 1 root element
      // Pass method as props
      <div className="App">
        <h1>Kiran's first react page after a long time.</h1>
        From App.js file. <br /> <br />
        {/* <button style={style} onClick={this.switchNameHandler.bind(this, "Kiran-")}> */}
        <button style={style} onClick={this.toggleStudentsHandler}>
          Toggle Students
        </button>
        {students}
        {/* <button onClick={() => this.switchNameHandler('Kiran*')}> </button> */}
        {/* Ternary Condition
        {this.state.showStudents === true ? (
          <div>
            <Student
              name={this.state.students[0].name}
              age={this.state.students[0].age}
            />
            <Student
              name={this.state.students[1].name}
              age={this.state.students[1].age}
              click={this.switchNameHandler.bind(this, "Kiran!")}
              changed={this.nameChangedHandler}
            >
              My Fav subject is Math
            </Student>
            <Student
              name={this.state.students[2].name}
              age={this.state.students[2].age}
            />
            <p> True Hence rendering this paragraph </p>{" "}
          </div>
        ) : null}
        */}
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now?"));
  }
}

export default App;
