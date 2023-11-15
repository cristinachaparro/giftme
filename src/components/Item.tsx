type Props = {
  item: Item;
};

function Item({ item }: Props) {
  return (
    <div className="m-3" key={`${item.title}-${item.id}`}>
      <h1 className=" ml-3 text-xl">{item.title}</h1>
      <h2 className="ml-3 visited:text-sky-300 truncatez">
        {" "}
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.link}
        </a>
      </h2>
      <p className="ml-3">{item.notes}</p>
      {/* add the price - obtain from website */}
    </div>
  );
}

export default Item;
