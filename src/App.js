import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
import AddRandom from "./components/AddRandom";
import SortByName from "./components/SortByName";
import SortByPopularity from "./components/SortByPopularity";
import ContactBox from "./components/ContactBox";
const firstFive = contacts.splice(0, 5);

function App() {
  const [currentList, setCurrentList] = useState(firstFive);
  //-----------------------------------
  function addRand(contacts) {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    console.log(contacts.length, randomIndex);
    const randomContact = contacts.splice(randomIndex, 1);
    const newList = [...currentList, randomContact[0]];
    console.log(randomContact[0]);
    setCurrentList(newList);
  }
  //-----------------------------------
  function sortByName() {
    const sortedList = [...currentList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCurrentList(sortedList);
  }
  //-----------------------------------
  function sortByPopularity() {
    const sortedList = [...currentList].sort(
      (a, b) => a.popularity > b.popularity
    );
    setCurrentList(sortedList);
  }
  //-----------------------------------
  function RemoveContact(name) {
    const updatedList = currentList.filter((contact) => contact.name !== name);
    setCurrentList(updatedList);
  }
  //-----------------------------------
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
        <AddRandom addRand={() => addRand(contacts)} />
        <SortByName sort={() => sortByName()} />
        <SortByPopularity sort={() => sortByPopularity()} />
      </div>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </thead>
        {currentList.map((contact) => {
          return (
            <ContactBox
              key={contact.name}
              name={contact.name}
              picture={contact.pictureUrl}
              popularity={contact.popularity}
              wonOscar={contact.wonOscar}
              wonEmmy={contact.wonEmmy}
              removeContact={() => RemoveContact(contact.name)}
            />
          );
        })}
      </table>
    </div>
  );
}

export default App;
