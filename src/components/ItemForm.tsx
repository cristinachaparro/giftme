import { FormEventHandler, useState } from "react";

type Props = {
  onSubmit: (item: Item) => void;
  initialValues?: Item;
};

function ItemForm({ onSubmit, initialValues }: Props) {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [link, setLink] = useState(initialValues?.link || "");
  const [notes, setNotes] = useState(initialValues?.notes || "");
  //const [image, setImage] = useState();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      link,
      notes,
      id: initialValues?.id || Math.random() * 1000,
    });
    setTitle("");
    setLink("");
    setNotes("");
  };

  return (
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
  );
}

export default ItemForm;
