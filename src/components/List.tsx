"use client";

import { useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";

function List() {
  const [items, setItems] = useState<Item[]>([]);

  // 2. estado que gestione si se edita un Item
  // 3. funcion que coge los datos de newItem del ItemForm y añade un Item nuevo al array

  return (
    <>
      <ItemForm onItemCreation={(item) => setItems([...items, item])} />
      <div className="border border-solid rounded-lg border-sky-300 w-[600px]">
        {/* Make it so that users can choose the title of their lists */}
        <div className="text-center">
          <h1 className="text-3xl font-bold p-4">My gift list</h1>
        </div>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default List;
