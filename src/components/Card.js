import React from 'react' // импорт библиотеки
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Card(props){
  const currentPerson = React.useContext(CurrentUserContext)

  const isOwn = props.card.owner._id === currentPerson._id;
  const isLiked = props.card.likes.some(i => i._id === currentPerson._id)

  const cardDeleteButtonClassName = (
    `element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hide'}`
  );

  const cardLikeButtonClassName  = (
    `element__like-button ${isLiked ? 'element__like-button_active' : 'element__like-button_hide'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick(){
    props.onCardDelete(props.card);
  }

  return(
    <li className="element">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <img className="element__img" alt="#" src={props.card.link} onClick={handleClick}/>
      <div className="element__flex">
        <h4 className="element__text">{props.card.name}</h4>
        <div className="element__column">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="element__count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;

