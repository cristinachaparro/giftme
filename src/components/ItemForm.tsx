import { FormEventHandler, useState } from "react";

type Props = {
  onItemCreation: (
    title: String,
    link: String,
    notes: String
    //image: String
  ) => void;
};

function ItemForm({ onItemCreation }: Props) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  //const [image, setImage] = useState();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onItemCreation(title, link, notes);
  };

  return (
    <div className="w-96 m-2">
      <h1 className="text-3xl text-center m-2 font-bold">Your gift</h1>
      <form onSubmit={handleSubmit} className="form flex flex-col">
        <input
          className="m-2 text-cyan-950 p-2 rounded-xl"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="m-2 text-cyan-950 p-2 rounded-xl"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          className="m-2 text-cyan-950 p-2 rounded-xl"
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default ItemForm;
