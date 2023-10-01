import Tag from './Tag';

function Card({
  id,
  company,
  logo,
  labelNew,
  labelFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  addTagHandler,
}) {
  return (
    <div key={id} className="card" data-featured={labelFeatured}>
      <div className="card__logo">
        <img src={logo} alt={company} />
      </div>
      <div className="card__data">
        <div className="card__heading">
          <div className="card__name">{company}</div>
          <div className="card__labels">
            {labelNew && (
              <span className="card__label" data-label="new">
                NEW!
              </span>
            )}
            {labelFeatured && (
              <span className="card__label" data-label="featured">
                FEATURED
              </span>
            )}
          </div>
        </div>
        <div className="card__title">
          <a href="#">{position}</a>
        </div>
        <div className="card__meta">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="card__tags">
        <Tag name={role} addTagHandler={() => addTagHandler('role', role)} />
        <Tag name={level} addTagHandler={() => addTagHandler('level', level)} />
        {languages.map((language) => (
          <Tag
            key={language}
            name={language}
            addTagHandler={() => addTagHandler('languages', language)}
          />
        ))}
        {tools.map((tool) => (
          <Tag
            key={tool}
            name={tool}
            addTagHandler={() => addTagHandler('tools', tool)}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
