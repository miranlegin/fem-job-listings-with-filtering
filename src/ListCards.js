import Card from './Card';

function ListCards({ cards, addTagHandler }) {
  return (
    <div className="container">
      <div className="cards-list">
        {cards.map((card) => (
          <Card
            key={card.id}
            company={card.company}
            logo={card.logo}
            labelNew={card.new}
            labelFeatured={card.featured}
            position={card.position}
            role={card.role}
            level={card.level}
            postedAt={card.postedAt}
            contract={card.contract}
            location={card.location}
            languages={card.languages}
            tools={card.tools}
            addTagHandler={addTagHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default ListCards;
