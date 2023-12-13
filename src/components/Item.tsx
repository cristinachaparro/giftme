type Props = {
  item: Item;
  onDelete: () => void;
};

//state to edit/delete the item

function Item({ item, onDelete }: Props) {
  return (
    <>
      <div
        className=" m-6 p-3 border rounded-xl border-solid border-black shadow-xl shadow-indigo-900 bg-slate-100"
        key={`${item.title}-${item.id}`}
      >
        <div className="flex flex-col items-end">
          {/* <button>...</button> */}
          <button>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
        <h1 className=" ml-3 text-xl">{item.title}</h1>
        <h2 className="ml-3 text-sky-950 visited:text-sky-300 truncated">
          {" "}
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
        </h2>
        <p className="ml-3">{item.notes}</p>
        {/* add the price - obtain from website */}
      </div>
    </>
  );
}

export default Item;
