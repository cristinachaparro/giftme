"use client";

import { useState } from "react";
import ItemForm from "./ItemForm";

function List() {
  const [items, setItems] = useState<Item[]>([]);

  console.log(items);

  // 2. estado que gestione si se edita un Item
  // 3. funcion que coge los datos de newItem del ItemForm y añade un Item nuevo al array

  return (
    <div className="text-center">
      {/* Make it so that users can choose the title of their lists */}
      <h1 className="text-3xl font-bold">My gift list</h1>
      {items.map((item) => (
        <div key={`${item.title}-${item.id}`}>
          <h1 className="p-2 text-yellow-500">{item.title}</h1>
          <h2>{item.link}</h2>
          <p>{item.notes}</p>
        </div>
      ))}
      <ItemForm onItemCreation={(item) => setItems([...items, item])} />
    </div>
  );
}

export default List;
