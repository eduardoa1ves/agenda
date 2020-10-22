import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./Title";
import Hello from "./Hello";
import ContactList from "./contacts/ContactList"

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title/>
        <Hello name="Eduardo" lastname="Alves"/>
        <ContactList/>
      </header>
    </div>
  );
}


