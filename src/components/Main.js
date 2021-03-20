import {api} from '../utils/api.js'
import Card from './Card.js'
import React from 'react' // импорт библиотеки
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
function Main(props){

  const currentPerson = React.useContext(CurrentUserContext)

  return(
    <main>
        <section className="profile">
            <div className="profile__avatar-button" onClick={props.onEditAvatar}>
                <img
                src={currentPerson.avatar}
                alt={currentPerson.name}
                className="profile__img"/>
                <div className="profile__hover">
                <div className="profile__hover-button"></div>
                </div>
            </div>
            <div className="profile__info">
                <div className="profile__text">
                <h1 className="profile__title">{currentPerson.name}</h1>
                <p className="profile__subtitle">{currentPerson.about}</p>
                </div>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <button type="button" className="profile__add-button" onClick={props.onAddPlace}>+</button>
        </section>
        <section className="elements-list">
            <ul className="elements">
              {props.cards.map((card, i) => (
                <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.handleCardLike} onCardDelete={props.handleCardDelete}/>
              ))}
            </ul>
        </section>
    </main>
  )
}

export default Main;
