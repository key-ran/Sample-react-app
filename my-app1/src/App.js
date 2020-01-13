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
      { name: "Kiran", age: 25 },
      { name: "Kumar", age: 23 },
      { name: "Kiran Kumar", age: 26 }
    ]
  };

  nameChangedHandler = event => {
    this.setState({
      students: [
        { name: "Kiran K", age: 21 },
        { name: event.target.value, age: 29 },
        { name: "Kiran Kumar", age: 27 }
      ],
      otherState: "some val"
    });
  };
  switchNameHandler = newName => {
    // console.log("I was clicked!");
    // For Class -> setState
    // For functional -> React Hooks
    this.setState({
      students: [
        { name: newName, age: 23 },
        { name: "Kumar", age: 20 },
        { name: "Kiran Kumar", age: 28 }
      ],
      otherState: "some val"
    });
  };

  render() {
    const style = {
      backgroundColor: "White",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    // Kind of JSX file
    return (
      // Wrap all elements into 1 root element
      // Pass method as props
      <div className="App">
        <h1>Kiran's first react page after a long time.</h1>
        From App.js file. <br /> <br />
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Kiran-")}
        >
          {/* <button onClick={() => this.switchNameHandler('Kiran*')}> */}
          Switch Student
        </button>
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
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now?"));
  }
}

export default App;
