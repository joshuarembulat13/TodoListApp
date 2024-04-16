import React, { useEffect, useState } from "react";
import { ItemsList } from "./ItemsList";
import { TbTrash, TbCheck } from "react-icons/tb";
import styles from "./items.module.scss";

export default function Items({ items, onDeleteItem, onCheckedItem }) {
   return (
      <div className={styles.container}>
         {items.map(({ id, name, quantity, isChecked }) => (
            <div key={id} className={styles.itemCard}>
               <div>
                  <span>{quantity}</span>
                  {isChecked === false ? <h2>{name}</h2> : <s>{name}</s>}
               </div>
               <div>
                  <button onClick={() => onDeleteItem(id)}>
                     <TbTrash size={23} />
                  </button>
                  <button onClick={() => onCheckedItem(id)}>
                     <TbCheck size={23} />
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
}
