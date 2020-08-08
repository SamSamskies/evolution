import { cardInfo } from '../shared/cardInfo';

const CardDetails = (props) => {
    return (
        <a href={props.link.href} className="card" target="_blank">
            <div className="card-header">
                <img src={props.link.src} alt={props.link.alt} />
                <h3>{props.link.header} &rarr;</h3>
            </div>
            <p>{props.link.text}</p>
        </a>
    )
}

const Card = (props) => {
    
    return (
        <React.Fragment>
            { cardInfo.map(card => <CardDetails link={card}/>) }
        </React.Fragment>
    )
}

export default Card;