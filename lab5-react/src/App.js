import React from 'react';
import './TPStyles.css';

import ClickMeButton from './components/ClickMeButton';
import ToggleButton from './components/ToggleButton';
import Counter from './components/Countr';
import DisplayTab from './components/DisplayTab';
import AuthForm from './components/AuthForm';
import CreateDivs from './components/CreateDivs';

function App() {
  const tab1 = ["hello", "world"];
  const tab2 = ["React", "VS Code"];

  return (
    <div className="App">
      <ClickMeButton />
      <ToggleButton />
      <Counter />
      <DisplayTab tab={tab1} />
      <DisplayTab tab={tab2} />
      <AuthForm />
      <CreateDivs />
    </div>
  );
}

export default App;
