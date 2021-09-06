import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <p>
      {props.partNumber} {props.exercisesNumber}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.number}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content partNumber={part1} exercisesNumber={exercises1} />
      <Content partNumber={part2} exercisesNumber={exercises2} />
      <Content partNumber={part3} exercisesNumber={exercises3} />

      <Total number={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
