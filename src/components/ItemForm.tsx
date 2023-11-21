import { FormEventHandler, useState } from "react";

import ReactModal from "react-modal";

type Props = {
  onItemCreation: (item: Item) => void;
};

function ItemForm({ onItemCreation }: Props) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  //const [image, setImage] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onItemCreation({ title, link, notes, id: Math.random() * 1000 });
    setTitle("");
    setLink("");
    setNotes("");
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
        <form onSubmit={handleSubmit} className="form flex flex-col">
          <input
            className="m-2 text-cyan-950 p-2 rounded-xl border border-solid border-indigo-700"
            type="text"
            value={title}
            placeholder="What do you want?"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="m-2 text-cyan-950 p-2 rounded-xl border border-solid border-indigo-700"
            type="text"
            value={link}
            placeholder="Paste your link"
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            className="m-2 text-cyan-950 p-2 rounded-xl border border-solid border-indigo-700"
            type="text"
            value={notes}
            placeholder="Colour, size..."
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="text-center">
            <button
              className="rounded-full bg-cyan-400 w-52 py-2 m-2"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </ReactModal>
    </div>
  );
}

export default ItemForm;
