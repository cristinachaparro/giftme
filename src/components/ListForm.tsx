import { FormEventHandler, useState } from "react";

type Props = {
  onListCreation: (list: List) => void;
};

function ListForm({ onListCreation }: Props) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  //const [image, setImage] = useState();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onListCreation({ title, notes, id: Math.random() * 1000 });
    setTitle("");
    setNotes("");
  };

  return (
    <div className="border border-solid rounded-lg border-sky-300 w-[500px] m-2 p-4">
      <h1 className="text-3xl text-center font-bold p-2">Your gift</h1>
      <form onSubmit={handleSubmit} className="form flex flex-col">
        <input
          className="m-2 text-cyan-950 p-2 rounded-xl"
          type="text"
          value={title}
          placeholder="What do you want?"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="m-2 text-cyan-950 p-2 rounded-xl"
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
    </div>
  );
}

export default ListForm;
