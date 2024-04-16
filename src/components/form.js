import React, { useState } from "react";
import styles from "./form.module.scss";
import { ItemsList } from "./ItemsList";

export default function Form({ onAddItem }) {
   const [name, setName] = useState("");
   const [quantity, setQuantity] = useState(1);

   const onHandleSubmit = (e) => {
      e.preventDefault();

      if (!name) alert("Hello world");

      const newItems = { name, quantity, isChecked: false };

      setName("");
      setQuantity(1);
      onAddItem(newItems);
   };
   return (
      <div className={styles.container}>
         <form onSubmit={onHandleSubmit}>
            <select
               value={quantity}
               onChange={(e) => setQuantity(Number(e.target.value))}
            >
               {Array.from({ length: 30 }, (_, n) => n + 1).map((num) => (
                  <option value={num} key={num}>
                     {num}
                  </option>
               ))}
            </select>
            <input
               value={name}
               onChange={(e) => setName(e.target.value)}
               type='text'
               placeholder='Type here...'
            />
            <button type='submit'>Add</button>
         </form>
      </div>
   );
}
