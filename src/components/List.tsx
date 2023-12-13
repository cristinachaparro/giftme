"use client";

import { useEffect, useState } from "react";
import ItemModal from "./ItemModal";
import Item from "./Item";
import ItemForm from "./ItemForm";

function List() {
  const [items, setItems] = useState<Item[] | undefined>();
  const [editingItem, setEditingItem] = useState<number | undefined>();

  useEffect(() => {
    let saved;
    saved = window.localStorage.getItem("items");
    const initialValue = JSON.parse(saved || "[]");
    setItems(initialValue);
  }, []);

  useEffect(() => {
    if (items) {
      window?.localStorage?.setItem("items", JSON.stringify(items));
    }
  }, [items, items?.length]);

  function onItemDelete(id: number) {
    const updatedList: Item[] = items!.filter((item) => item.id !== id);
    setItems(updatedList);
  }

  function onItemSave(editedItem: Item) {
    console.log(editedItem);

    const updatedList: Item[] = items!.map((item) =>
      item.id !== editedItem.id ? item : editedItem
    );
    setItems(updatedList);
    setEditingItem(undefined);
  }

  // search for a nice cool looking spinner
  if (!items) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ItemModal onItemCreation={(item) => setItems([...items, item])} />
      <div className="border border-solid rounded-lg border-sky-300 w-[600px]">
        {/* Make it so that users can choose the title of their lists */}
        <div className="text-center">
          <h1 className="text-3xl font-bold p-4">My gift list</h1>
        </div>
        {items.map((item, i) =>
          editingItem === i ? (
            <ItemForm
              onSubmit={onItemSave}
              initialValues={item}
              key={item.id}
            />
          ) : (
            <Item
              item={item}
              onDelete={() => onItemDelete(item.id)}
              onEdit={() => setEditingItem(i)}
              key={item.id}
            />
          )
        )}
      </div>
    </>
  );
}

export default List;
