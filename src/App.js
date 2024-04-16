import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import Items from "./components/item";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
   const [items, setItems] = useState([
      {
         id: 1,
         quantity: "1",
         name: "Milk",
         isChecked: false,
      },
      {
         id: 2,
         quantity: "2",
         name: "Coffee",
         isChecked: false,
      },
      {
         id: 3,
         quantity: "3",
         name: "Sugar",
         isChecked: false,
      },
   ]);

   const [sortBy, setSortBy] = useState("");
   function handleAddItems(item) {
      setItems((items) => [...items, item]);
      console.log(items);
   }

   function handleDeleteItems(id) {
      setItems((items) => items.filter((item) => item.id !== id));
   }

   function handleCheckItems(id) {
      setItems((items) =>
         items.map((item) =>
            item.id === id ? { ...item, isChecked: !item.isChecked } : item
         )
      );
   }

   let sortItems;

   if (sortBy === "input") sortItems = items;
   if (sortBy === "name") {
      sortItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
   }

   if (sortBy === "checked") {
      sortItems = items
         .slice()
         .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
   }

   // function handleClearList() {
   //    const confirmed = window.confirm(
   //       "Are you sure you want to clear the list?"
   //    );
   //    if (confirmed) {
   //       setItems([]);
   //    }
   // }

   return (
      <div className='App'>
         <Header />
         <Form onAddItem={handleAddItems} />
         <Items
            items={items}
            onDeleteItem={handleDeleteItems}
            onCheckedItem={handleCheckItems}
         />
         <select
            className='sortDrop'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
         >
            <option value={"input"}>Sort by Value</option>
            <option value={"name"}>Sort by Name</option>
            <option value={"checked"}>Sort by Check Status Order</option>
         </select>
         <Footer items={items} />
      </div>
   );
}

export default App;
