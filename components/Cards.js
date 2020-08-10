import { cardInfo } from "../shared/cardInfo";

const Cards = (props) => {
    return (
        <React.Fragment>
            {cardInfo.map((card) => (
                <a
                    href={card.href}
                    className="card"
                    target="_blank"
                    key={card.href}
                >
                    <div className="card-header">
                        <img src={card.src} alt={card.alt} />
                        <h3>{card.header} &rarr;</h3>
                    </div>
                    <p>{card.text}</p>
                </a>
            ))}
        </React.Fragment>
    );
};

export default Cards;
