import React from "react";

export default function Footer({ items }) {
   return (
      <div>
         You have {items.length} Items Completd{" "}
         {items.filter((a) => a.isChecked === true).length}
      </div>
   );
}
