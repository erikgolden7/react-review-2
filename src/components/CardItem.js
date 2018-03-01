import React from "react";

export default function CardItem(props) {
  const char = props.char;
  const characters = char.map((person, i) => {
    return (
      <li
        key={i}
        style={{
          border: "solid black 1px",
          width: "20%",
          margin: "auto",
          marginBottom: 10,
          padding: 5
        }}
      >
        <div>Name: {person.name}</div>
        <div>Birthday: {person.birth_year}</div>
      </li>
    );
  });
  return (
    <ul style={{ listStyleType: "none", textAlign: "center" }}>{characters}</ul>
  );
}
