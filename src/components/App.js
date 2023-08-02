import React from 'react';
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";



function App() {
  const contacts = [
    {
      "id": "1",
      "name": "Ashen",
      "email": "ashen123@gmail.com",
    },
    {
      "id": "2",
      "name": "Naveen",
      "email": "anujanaveen@gmail.com",
    },
    {
      "id": "3",
      "name": "Praveen",
      "email": "dulanjana@gmail.com",
    },
  ];


  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
