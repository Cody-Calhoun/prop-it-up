import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstname="Jane" lastname="Doe" haircolor="black" age={45} />
      <PersonCard
        firstname="John"
        lastname="Smith"
        haircolor="brown"
        age={88}
      />
      <PersonCard
        firstname="Millard"
        lastname="Fillmore"
        haircolor="Brown"
        age={50}
      />
      <PersonCard
        firstname="Maria"
        lastname="Smith"
        haircolor="Brown"
        age={62}
      />
    </div>
  );
}

export default App;
