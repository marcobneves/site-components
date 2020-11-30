import React from 'react';
import { TextInput, Checkbox, Button } from "./lib";

function App() {
  return (
    <div className="App">
      <h1>Site Components 2.0</h1>
      <Button label="Primary"/>
      <TextInput label="Informe seu nome"/>
      <Checkbox/>
    </div>
  );
}

export default App;
