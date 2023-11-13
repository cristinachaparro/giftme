"use client";

import Item from "./Item";
import ItemForm from "./ItemForm";

function List() {
  // 1. estado de Items (Item[])
  // 2. estado que gestione si se edita un Item
  // 3. funcion que coge los datos de newItem del ItemForm y añade un Item nuevo al array
  return (
    <div>
      List
      {/* Lista de items: items.map => Item */}
      {/* ItemForm */}
      <ItemForm
        onItemCreation={(title, link, notes) => console.log(title, link, notes)}
      />
    </div>
  );
}

export default List;
