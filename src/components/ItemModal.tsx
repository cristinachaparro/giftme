import { useState } from "react";

import ReactModal from "react-modal";
import ItemForm from "./ItemForm";

type Props = {
  onItemCreation: (item: Item) => void;
};

function ItemModal({ onItemCreation }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (item: Item) => {
    onItemCreation(item);
    setModalOpen(false);
  };

  return (
    <div className="border border-solid rounded-lg border-sky-300 w-[500px] m-2 p-4 flex justify-center content-center">
      <button onClick={() => setModalOpen(true)}>+</button>
      <ReactModal
        className={"bg-white w-[900px] mx-auto"}
        isOpen={modalOpen}
        ariaHideApp={false}
      >
        <button className=" text-right" onClick={() => setModalOpen(false)}>
          X
        </button>
        <h1 className="text-3xl text-center font-bold p-2">Your gift</h1>
        <ItemForm onSubmit={handleSubmit} />
      </ReactModal>
    </div>
  );
}

export default ItemModal;
