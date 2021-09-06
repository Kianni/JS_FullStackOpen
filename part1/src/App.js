import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.partNumber} {props.exercisesNumber}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part
        partNumber={props.data[0].name}
        exercisesNumber={props.data[0].exercises}
      />
      <Part
        partNumber={props.data[1].name}
        exercisesNumber={props.data[1].exercises}
      />
      <Part
        partNumber={props.data[2].name}
        exercisesNumber={props.data[2].exercises}
      />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce(function (acc, curVal) {
        return acc + curVal.exercises;
      }, 0)}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content data={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
