function Tag({ name, addTagHandler }) {
  return (
    <button
      key={name}
      className="card__tag card__tag-hover"
      onClick={addTagHandler}
    >
      <span className="card__tag-name">{name}</span>
    </button>
  );
}

export default Tag;
