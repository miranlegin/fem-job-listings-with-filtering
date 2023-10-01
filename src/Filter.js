const Filter = ({ name, removeTagHandler }) => {
  return (
    <div key={name} className="card__tag">
      <span className="card__tag-name">{name}</span>
      <button className="card__tag-delete" onClick={removeTagHandler}>
        <div className="sr-only">Remove filter</div>
        <img src="/icon-remove.svg" alt="" />
      </button>
    </div>
  );
};

export default Filter;
