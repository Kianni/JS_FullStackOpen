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
  return <p>Number of exercises {props.number}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content data={[part1, part2, part3]} />
      {/* <Content partNumber={part2} exercisesNumber={exercises2} />
      <Content partNumber={part3} exercisesNumber={exercises3} /> */}

      <Total number={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
