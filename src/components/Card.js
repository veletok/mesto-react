function Card(props){

  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
    <li className="element" onClick={handleClick}>
      <button className="element__delete-button" type="button"></button>
      <img className="element__img" alt="#" src={props.card.link} />
      <div className="element__flex">
        <h4 className="element__text">{props.card.name}</h4>
        <div className="element__column">
          <button type="button" className="element__like-button"></button>
          <p className="element__count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;

