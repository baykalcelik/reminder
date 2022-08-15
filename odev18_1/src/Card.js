import './card.css';


export default function Card(props){


    return(
        <div id="card_cover">
            <div id="imgCover">
                <img id="cardImg" src={props.imgUrl} alt="card image"/>
            </div>
            <div id="card_context">
                <p id="name">{props.name}</p>
                <p id="age">{props.age} years</p>
            </div>
        </div>
    )
}

